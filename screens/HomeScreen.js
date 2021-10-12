import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { auth } from '../firebase';
import { firebase } from '../firebase';
import UserBox from '../components/UserBox';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

//retreives all users from the db 'Users' collecction
  useEffect(() => {
    let isMounted = true;   
    let userList = [];
    const db = firebase;
    db.firestore()
      .collection('Users')
      .get()
      .then((querySnapshot) => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach((doc) => {
          const userDoc = doc.data();
          userList.push(userDoc);
        });
        if(isMounted){
          setUsers(userList);
        }
        
      });
    return () => {
      console.log(users);
      isMounted = false;
        }
    
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserBox
            item={item}
            onPress={() =>
              navigation.navigate('UserInfo', {clickedUser: item})
            }
          />
        )}
      />
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
