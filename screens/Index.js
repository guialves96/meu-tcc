import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';


export default function App({navigation}) {
  const [temp, setTemp]= useState('');

  return (
    <ImageBackground 
      style={styles.container}
    >
      <Text style={styles.title}>Precious<Text style={styles.title2}>Life</Text></Text>

      
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => {navigation.navigate('Verify', {temp:temp});
        }}
      >
      <Text style={styles.second}> ↓ </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00518C',
    padding: 20
  },
  title: {
    fontSize: 42,
    // fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#37C6F7'
  },
  title2: {
    fontSize: 42,
    // fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  btn: {
    backgroundColor: '#007AFE',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  second: {
    fontSize: 30,
    // fontFamily: 'Open Sans',
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFFFFF'
  },
});