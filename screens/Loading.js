import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
export default function App({ navigation }) {
 return (
 <View style={styles.container}>
 <ActivityIndicator size="large" color="#FFFFFF"/>
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#00518C',
 },
});