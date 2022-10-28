import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from './screens/Loading';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

import firebase from './services/firebase';
const auth = firebase.auth();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return subscriber;
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <MainStack />;
  }

  return <AuthStack />;
}

// import React, { useState, useEffect , useRef} from 'react';
// import { Text, View, StyleSheet, ImageBackground, } from 'react-native';
// import Constants from 'expo-constants';
// import MapView from 'react-native-maps';
// import * as Location from "expo-location";
// import * as Permissions from 'expo-permissions';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// export default function App() {


//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);
  
//   useEffect(()=>{
//     (async function(){
//         const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
//         if (status === 'granted') {
//             let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
//             setOrigin({
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//                 latitudeDelta: 0.00922,
//                 longitudeDelta: 0.00421
//             })
//         } else {
//             throw new Error('Location permission not granted');
//         }
//     })();
// },[]);
//   return (
//     <View 
//       style={styles.container}
//     >
//       <View style={styles.header}>
//         <Text style={styles.title}>Precious<Text style={styles.title2}>Life</Text></Text>
//       </View>
//       <View style={styles.container}>
//         <MapView 
        
//         style={styles.map}
//         initialRegion={origin}
//         showsUserLocation={true}
//         zoomEnabled={false}
//         loadingEnabled={true}

//         >
        
//       </MapView>
//       </View>
       
//       <View style={styles.endline}>
        
      
//       </View>
     
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,

  },
  header: {
    height: 80,
    backgroundColor: '#00518C',
    paddingTop: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#37C6F7'
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  endline: {
    backgroundColor: '#00518C',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  map: {
    height: '100%',
    backgroundColor: 'black',
  
  },
});
