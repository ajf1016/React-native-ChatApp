import {View, Text, StatusBar} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from './components/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChatList from './components/screens/chat/ChatList';
import ChatScreen from './components/screens/chat/ChatScreen';
import CreateUser from './components/screens/createUser/CreateUser';
import {Context} from './context/store';

const Stack = createNativeStackNavigator();

const ChatSection = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.TEAL_GREEN_DARK}
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </>
  );
};

const UserSection = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.TEAL_GREEN_DARK}
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
    </>
  );
};

export default function Navigation() {
  const {state, dispatch} = useContext(Context);
  console.log(state,"NAVIGATION")

  useEffect(() => {
    const fetchUserData = async () => {
      let userDataStored = await AsyncStorage.getItem('userData');
      let userDataValue = JSON.parse(userDataStored);
      dispatch({
        type: 'UPDATE_USER_DATA',
        userData: userDataValue,
      });
    };
    fetchUserData();
  }, []);

  return (
    <NavigationContainer>
      {state.userData.isVerified ? <ChatSection /> : <UserSection />}
    </NavigationContainer>
  );
}
