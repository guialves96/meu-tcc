import React, { useState, useEffect } from 'react';
import CheckBox from 'react-native-modest-checkbox';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, FlatList, Button,Modal } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Loading from './Loading';
import firebase from '../src/config/firebaseconfig';
import { 
  Tienne_400Regular,
  Tienne_700Bold,
  Tienne_900Black 
} from '@expo-google-fonts/tienne'

const auth = firebase.auth();
const db = firebase.firestore();

const data = [
  { id: 1, txt: 'Leito', isChecked: false },
  { id: 2, txt: 'Banco de Sangue', isChecked: false },
  { id: 3, txt: 'Raio-X', isChecked: false },
  { id: 4, txt: 'Sala de Cirurgia', isChecked: false },
  { id: 5, txt: 'Tomografia', isChecked: false },

];

export default function App({navigation}) {
  const [temp, setTemp]= useState('');
  const [products, setProducts] = useState(data);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const uid = auth.currentUser.uid;
    db.collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setUser(doc.data());
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };
  
  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ 
                  margin: 3,
                  borderWidth: '1px',
          }}>
            <View style={styles.card}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                 
	              }}>
                <CheckBox
                  style={styles.box}
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <Text style={styles.text}>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };
  
  return ( 
    <ImageBackground 
      style={styles.container}
    >
      <View style={styles.header}>
      <TouchableOpacity
        style={styles.btnout}
        onPress={() => auth.signOut()}
      >
        <Text style={styles.btnText}>Sair</Text>
      </TouchableOpacity>
        <Text style={styles.title}>Precious<Text style={styles.title2}>Life</Text></Text>
      </View>
      <View style={styles.container}>
      <View style={{ flex: 1 }}>{renderFlatList(products)}</View>
    </View>
       <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => {navigation.navigate('Home', {temp:temp});
          }}
        >
        <Text style={styles.sub}> Buscar Hospital </Text>
        </TouchableOpacity>
      
      </View>
     
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,

  },
  header: {
    height: '80px',
    backgroundColor: '#00518C',
    paddingTop: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnout: {
    paddingLeft: 10,
  },
  btnText: {
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
    // fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#37C6F7'
  },
  title2: {
    fontSize: 24,
    // fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  footer: {
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  btn: {
    backgroundColor: '#00518C',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
 
  sub: {
    fontSize: 18,
    // fontFamily: 'Open Sans',
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  card: {
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: 18,
    // fontFamily: 'tiene',
    fontWeight: 'bold',
    color: '#00518C',
  },
  box: {
    marginRight: 10
  },
 
});