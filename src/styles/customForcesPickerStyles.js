import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const customForcesPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    width: 150,
    height: 30,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    textAlign: "left",
    alignSelf: "flex-end",
    backgroundColor: "white",
    paddingRight: 10, // to ensure the text is never behind the icon
  },
  icon: {color: "black", zIndex: 1000},
  placeholder: {color: "#000000"},
});

export default customForcesPickerStyles;