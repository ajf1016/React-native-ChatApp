import {View, Text,StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLORS } from './components/constants';
import ChatList from './components/screens/chat/ChatList';
import ChatScreen from './components/screens/chat/ChatScreen';

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
  

export default function Navigation() {
  return (
    <NavigationContainer>
      <ChatSection />
    </NavigationContainer>
  );
}
