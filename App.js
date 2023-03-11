import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  	const users = [
		{
			id:'12101',
			displayName:'Ali',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Wah, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'ali@gmail.com',
		},
		{
			id:'12102',
			displayName:'Haris',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Taxila, does bachelors in computer science, is a hardworking student, has average grades in all the courses.',
			email: 'haris@gmail.com',
		},
		{
			id:'12103',
			displayName:'Asma',
			profileImage: require('./assets/images/b.png'),
			bio: 'Lives in Islamabad, does bachelors in computer science, is a hardworking student, has excellent grades in all the courses.',
			email: 'sohail@gmail.com',
		},
		{
			id:'12104',
			displayName:'Usman',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Wah, does bachelors in computer science, is a hardworking student, has excellent grades in all the courses.',
			email: 'usman@gmail.com',
		},
		{
			id:'12105',
			displayName:'Hira',
			profileImage: require('./assets/images/b.png'),
			bio: 'Lives in Rawalpindi, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'hamza@gmail.com',
		},
		{
			id:'12106',
			displayName:'Talha',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Chakwal, does bachelors in computer science, is a hardworking student, has bad grades in all the courses.',
			email: 'talha@gmail.com',
		},
		{
			id:'12107',
			displayName:'Fatima',
			profileImage: require('./assets/images/b.png'),
			bio: 'Lives in Peshawar, does bachelors in computer science, is a hardworking student, has great grades in all the courses.',
			email: 'fatima@gmail.com',
		},
		{
			id:'12108',
			displayName:'Shahzaib',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Attock, does bachelors in computer science, is a hardworking student, has great grades in all the courses.',
			email: 'shahzaib@gmail.com',
		},
		{
			id:'12109',
			displayName:'Irfan',
			profileImage: require('./assets/images/a.png'),
			bio: 'Lives in Karachi, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'irfan@gmail.com',
		},
		{
			id:'12110',
			displayName:'Iqra',
			profileImage: require('./assets/images/b.png'),
			bio: 'Lives in Hassan abdal, does bachelors in computer science, is a hardworking student, has bad grades in all the courses.',
			email: 'iqra@gmail.com',
		},
	]	

	return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} initialParams={{list: users}}/>
        <Tab.Screen name="Profile" component={Profile} initialParams={{list: users}}/>
        <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{list: users}}/>
      </Tab.Navigator>
    </NavigationContainer>
	)
}

export function Stacks() {
       <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
}


const styles = StyleSheet.create({
  
})

