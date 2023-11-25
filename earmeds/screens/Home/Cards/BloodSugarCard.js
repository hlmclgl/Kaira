// Card.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card3 = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {

    width: 180,
    height: 150,
    top:-208,
    right: -95,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: 'black', // Customize the background color as needed
    padding: 20,
    marginBottom: 20, // Adjust margin as needed
  },
});

export default Card3;
