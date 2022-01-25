import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
} 

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7} 
      { ...rest }
    >
      <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: '#A370F7',
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
