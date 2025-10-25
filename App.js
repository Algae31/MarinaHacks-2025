import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function MyButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#005BBB' : '#2196F3' },
        styles.button
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>

      <MyButton
        title="I'm a button"
        onPress={() => { console.log("Button pressed!"); alert("Pressed!"); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});