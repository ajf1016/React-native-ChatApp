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
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ChatScreenHeader from '../../includes/ChatScreenHeader';
import {COLORS, SIZES} from '../../constants';
import {Context} from '../../../context/store';
import {chatListData} from '../../../data/chatListData';

export default function ChatScreen({navigation, route}) {
  const {state, dispatch} = useContext(Context);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chat, setChat] = useState({});
  const userDetails = route.params;
  console.log(userDetails, 'USERDETAILS');

  const updateUserData = data => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      userData: data,
    });
  };

  const sendChat = () => {
    if (inputValue) {
      const chatId =
        chatListData[1].name === userDetails.name
          ? chatListData[1].name + chatListData[0].name
          : chatListData[0].name + chatListData[1].name;

      let chatData = {
        id: chatId,
        from: userDetails.name,
        to:
          userDetails.name === chatListData[0].name
            ? chatListData[1].name
            : chatListData[0].name,
        message: inputValue,
      };
      setChat(chatData);
      updateUserData({
        ...state.userData,
        chatData: [...state.userData.chatData, chatData],
      });
      chatData = {};
      setInputValue('');
    }
  };

  console.log(chat, 'CHAT');
  console.log(state.userData.chatData, 'CHATDATA');

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
      <ChatScreenHeader navigation={navigation} userDetails={userDetails} />
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        activeOpacity={1}
        style={{
          backgroundColor: '#591f15',
          height: SIZES.hp('90.5%'),
        }}>
        {/* to message box */}
        <View style={styles.toMessageBox}>
          <Text style={styles.toMessageBoxText}>Message to</Text>
          <View style={styles.toMessageBoxImageBox}></View>
        </View>

        {/* messages */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: SIZES.wp('4%'),
            marginBottom: SIZES.hp('3%'),
          }}>
          {state.userData.chatData
            ? state.userData.chatData.map((message, index) => {
                return (
                  <View
                    key={index + message}
                    style={[
                      styles.textBox,
                      {
                        alignSelf:
                          message.from === userDetails.name
                            ? 'flex-end'
                            : 'flex-start',
                        backgroundColor:
                          message.from === userDetails.name
                            ? COLORS.LIGHT_GREEN
                            : COLORS.TEAL_GREEN,
                        borderTopRightRadius:
                          message.from === userDetails.name ? 0 : 10,
                        borderTopLeftRadius:
                          message.from === userDetails.name ? 10 : 0,
                      },
                    ]}>
                    <Text style={styles.messageText}>{message.message}</Text>
                  </View>
                );
              })
            : null}
        </ScrollView>
      </TouchableOpacity>

      {/* send section */}
      <View
        style={[
          styles.sendSection,
          {bottom: isKeyboardVisible ? SIZES.hp('32%') : SIZES.hp('0%')},
        ]}>
        <View style={styles.inputContainer}>
          <View style={styles.left}>
            <TouchableOpacity activeOpacity={0.9} style={styles.iconBox}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/smile.png')}
                resizeMode={'contain'}
                View
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Message"
              style={styles.input}
              onChangeText={text => setInputValue(text)}
              value={inputValue}
            />
          </View>
          <View style={styles.right}>
            <TouchableOpacity
              style={[styles.iconBox, {marginRight: SIZES.wp('2%')}]}
              activeOpacity={0.9}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/attachment.png')}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} activeOpacity={0.9}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/cam.png')}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        {inputValue ? (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.micBox}
            onPress={sendChat}>
            <Image
              style={styles.mic}
              source={require('../../../assets/images/send.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.9} style={styles.micBox}>
            <Image
              style={styles.mic}
              source={require('../../../assets/images/mic.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sendSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#591f15',
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
    width: SIZES.wp('5%'),
    height: SIZES.wp('5%'),
    borderColor: '#fff',
  },
  input: {
    marginLeft: SIZES.wp('1%'),
    fontSize: SIZES.wp('4%'),
    width: '70%',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  micBox: {
    borderRadius: 50,
    width: SIZES.wp('14%'),
    height: SIZES.wp('14%'),
    backgroundColor: COLORS.LIGHT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mic: {
    width: '40%',
    height: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  //message screen
  toMessageBox: {
    backgroundColor: COLORS.TEAL_GREEN,
    borderRadius: 2,
    paddingVertical: SIZES.hp('1%'),
    paddingHorizontal: SIZES.hp('3%'),
  },
  toMessageBoxText: {},
  toMessageBoxImageBox: {},

  textBox: {
    marginBottom: SIZES.hp('2%'),
    borderRadius: 10,
    maxWidth: '60%',
    paddingHorizontal: SIZES.wp('2%'),
    paddingVertical: SIZES.wp('1%'),
  },
  messageText: {
    fontSize: SIZES.wp('4%'),
  },
});
