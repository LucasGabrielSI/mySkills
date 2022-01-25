import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
} 

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill} 
      { ...rest }
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 15,
    marginTop: 20,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#1F1E25',
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
