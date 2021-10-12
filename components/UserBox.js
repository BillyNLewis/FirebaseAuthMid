import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function UserBox(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.content}>
        <View style={styles.textView}>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.date}</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: props.item.link }}
            resizeMode="stretch"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:15
  },
  textView: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  image: {
    height: 100,
    width: 125,
    borderWidth: 2,
  },
});
