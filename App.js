import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import ChatList from './src/components/screens/chat/ChatList';
import {COLORS} from './src/components/constants';
import Navigation from './src/navigation';
import ChatScreen from './src/components/screens/chat/ChatScreen';

export default function App() {
  // return <Navigation />;
  return <ChatScreen />
}
