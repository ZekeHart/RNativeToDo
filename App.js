import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './src/screens/ToDo'

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Let's try and make a to do list app</Text>
      < ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
