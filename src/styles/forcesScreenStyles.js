import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const forcesScreenStyles = StyleSheet.create({
  TitleHolder: {
    width: '100%',
//    padding: 10,
    textAlign: "center",
    fontFamily: 'Roboto',
  },

  inputRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  titleText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: "#000000",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 33,

  },

  card: {
    backgroundColor: "#FFF6E3",
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: "#000000",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    width: "85%",
  },

  labelText: {
    color: "black",
    fontFamily: 'Roboto',
    fontSize: 14,
  },

  dataText: {
    color: "#514F4F",
    fontFamily: 'Roboto',
    fontSize: 12,
  }
});

export default forcesScreenStyles;