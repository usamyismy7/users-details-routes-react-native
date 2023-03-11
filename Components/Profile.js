import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';
import Home from './Home';

export default function Profile({navigation, route}) {
  const index = route.params.person;
  const userList = route.params.list;
  function first_profile() {
        if (index == null)
            return 0;
        else
            return index;
    }
	return(
    <SafeAreaView style={styles.container}>
        <View>
          <Image source={userList[first_profile()].profileImage} style={{width: 100, height: 100}} />
          <Text style={styles.heading}>{userList[first_profile()].displayName}</Text>
        </View>
        <View>
          <Text style={styles.heading}>Details:</Text>    
        </View>
        <View>
          <Text>ID: {userList[first_profile()].id}</Text>
        </View>	
        <View>
          <Text>BIO: {userList[first_profile()].bio}</Text>
        </View>	
        <View>
          <Text>Email: {userList[first_profile()].email}</Text>
        </View>	
    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center',
	},
  heading: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
})