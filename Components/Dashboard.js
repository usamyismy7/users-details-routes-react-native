import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Image } from 'react-native';
import Profile from './Profile';

export default function Dashboard({navigation, route}) {
  const userList = route.params.list;
	return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {userList.map((item, index) => {
          return(
            <Pressable onPress={()=>navigation.navigate('Profile',{person: index})}>
              <View style={styles.myData}>
                <Image source={item.profileImage} style={{width: 100, height: 100}} />
                <View style={styles.text}>
                  <Text>{item.displayName}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            </Pressable>
          )
        })}
      </ScrollView>
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
  text: {
    paddingBottom: 20,
  },
})
