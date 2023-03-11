import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native';
import Profile from './Profile.js';

export default function Home({navigation, route}) {
	return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.bold}>User logged in:</Text>
        <Text>Usama Qazi</Text>
        <Text style={styles.bold}>Details:</Text>
        <Text>Lives in Wah, does bachelors in computer science, is a hardworking student, has good grades in all the courses.</Text>
        <br></br>
        <Pressable onPress={()=>navigation.navigate('Profile')} style={styles.button} >Profile</Pressable>
    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center',
    padding: 8,
	},
	header: {
		fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'skyblue',
    paddingBottom: 20,
	},
	bold: {
		fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 20,
	},
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(30,144,255)',
    color: 'whitesmoke',
    fontSize: 20,
    textAlign: 'center',
  }
})