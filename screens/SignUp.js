import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';
import firebase from '../src/config/firebaseconfig';

const auth = firebase.auth();
const db = firebase.firestore();

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function signUp() {
    setLoading(true);
    auth.createUserWithEmailAndPassword(email, password)
      .then((snap) => {
        const user = snap.user;
        db.collection('users')
          .doc(user.uid)
          .set({
            name: name,
            email: email
          });

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
      <Text style={styles.title}>Registrar</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder='Nome'
      />

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
        onPress={() => signUp()}
      >
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.link}>Login</Text>
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
