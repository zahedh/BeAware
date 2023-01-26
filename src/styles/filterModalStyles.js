import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const filterModalStyles = StyleSheet.create({
  modalView: {
    width: '85%',
    maxWidth: "85%",
    height: 260,
    maxHeight: 260,
    backgroundColor: '#FFF6E3',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: "#000000",
    padding: 8,
    borderWidth: 1,
    borderRadius: 10
  },

  modalTitleText: {
    fontWeight: "bold",
    fontFamily: 'Roboto',
    fontSize:  14,
    color: "#000000",
    marginBottom: 57,
    textDecorationLine: "underline"
},

  TitleHolder: {
    width: '100%',
//    padding: 10,
    textAlign: "center",
    fontFamily: 'Roboto',
  },

  inputRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  modalButtonView: {
    flexDirection: "row",
    width: 280,
    maxWidth: 280,
    justifyContent: "space-between",
    marginTop: 23
  },

  modalButton: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#00738b",
    paddingTop: 7,
    paddingBottom: 7,
    borderWidth: 1,
    width: 130
  },

  modalButtonText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: "center"
  },

  text: {
    fontSize: 14,
    fontFamily: 'Roboto',
    marginBottom: 10,
    color: "#000000",
    width: "50%"

  }
});

export default filterModalStyles;