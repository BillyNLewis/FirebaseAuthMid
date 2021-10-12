import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserInfo(props) {
  return (
    <View>
      <View style={styles.content}>
      <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: props.item.link }}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.date}</Text>
          <Text style={styles.text}>{props.item.bio}</Text>
          <Text style={styles.text}>{props.item.hometown}</Text>
          <Text style={styles.text}>{props.item.age}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 5,
    borderColor: 'black',
  },
  textView: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  imageView:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 1,
  },
});
