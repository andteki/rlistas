import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useState} from 'react';


export default function App() {
  const [employees, setEmployees] = useState([
    {name: 'Pont Irén', city: 'Szeged'},
    {name: 'Perka Lajos', city: 'Szolnok'},
    {name: 'Rotes Imre', city: 'Szeged'},
    {name: 'Hentes Gábor', city: 'Miskolc'},
  ]);
  function renderItem({item}) {
    return (
      <View>
        <Text>{item.name} {item.city}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista</Text>
      <FlatList 
	      data={employees}
	      renderItem={renderItem}
        keyExtractor={item => item.name}
      />      
      <StatusBar style="auto" />
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
});
