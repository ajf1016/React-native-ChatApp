import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardEvent,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatScreenHeader from '../../includes/ChatScreenHeader';
import {COLORS, SIZES} from '../../constants';

export default function ChatScreen() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [isKeyboardVisible]);


  return (
    <SafeAreaView>
      <ChatScreenHeader />
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        activeOpacity={1}
        style={{
          backgroundColor: '#300902',
          height: SIZES.hp('90%'),
        }}></TouchableOpacity>

      {/* send section */}
      <View style={[styles.sendSection,{bottom : isKeyboardVisible ? SIZES.hp('32%') :SIZES.hp('0%')}]}>
        <View style={styles.inputContainer}>
          <View style={styles.left}>
            <View style={styles.iconBox}></View>
            <TextInput placeholder="Message" style={styles.input} />
          </View>
          <View style={styles.right}>
            <View style={styles.iconBox}></View>
            <View style={styles.iconBox}></View>
            <View style={styles.iconBox}></View>
          </View>
        </View>
        <View style={styles.micBox}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sendSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#300902',
    paddingHorizontal: SIZES.wp('3%'),
    height: SIZES.hp('10%'),
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    // bottom: 0,
    left: 0,
  },
  inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '70%',
    width: '83%',
    paddingHorizontal: SIZES.wp('4.5%'),
    borderRadius: 50,
    backgroundColor: COLORS.TEAL_GREEN_DARK,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: SIZES.wp('7%'),
    height: SIZES.wp('7%'),
    borderColor: '#fff',
    borderWidth: 1,
  },
  input: {},
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  micBox: {
    borderRadius: 50,
    width: SIZES.wp('14.5%'),
    height: SIZES.wp('14.5%'),
    backgroundColor: COLORS.LIGHT_GREEN,
  },
});
