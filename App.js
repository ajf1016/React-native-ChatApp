import {View, Text, SafeAreaView,StatusBar} from 'react-native';
import React from 'react';
import ChatList from './src/components/screens/ChatList';
import { COLORS } from './src/components/constants';

export default function App() {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.TEAL_GREEN_DARK}
        // barStyle="dark-content"
      />
      <SafeAreaView>
        <ChatList />
      </SafeAreaView>
    </View>
  );
}
