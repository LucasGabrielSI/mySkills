import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Platform,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills((oldState) => [...oldState, data]);
  }

  function  handleRemoveSkill( id: string ) {
    setMySkills( oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('God Morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('God afternoon!');
    } else {
      setGreeting('God night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas!</Text>

      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill} 
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    backgroundColor: '#121015',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 30,
    borderRadius: 7,
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'android' ? 10 : 15,
  },
  greeting: {
    color: '#FFF',
  },
});
