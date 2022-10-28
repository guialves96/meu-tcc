import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';
import firebase from '../src/config/firebaseconfig';

const auth = firebase.auth();

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function signIn() {
    setLoading(true);
    auth.signInWithEmailAndPassword(email, password)
      .then((snap) => {
        const user = snap.user;
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ImageBackground 
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='E-mail'
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder='Senha'
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => signIn()}
      >
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.link}>Cadastrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00518C',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  btn: {
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#37C6F7',
    marginVertical: 10
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  link: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'right',
    marginTop: 10
  }
});
