import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import {Context} from '../../../context/store';
import {create} from 'react-test-renderer';

export default function CreateUser() {
  const {state, dispatch} = useContext(Context);
  const [inputValue, setInputValue] = useState('');

  const updateUserData = data => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      userData: data,
    });
  };

  const createUser = () => {
    if (inputValue) {
      updateUserData({
        ...state.userData,
        isVerified: true,
        name: inputValue,
        profile_pic: '',
      });
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create user</Text>
      <View style={styles.box}>
        <View style={styles.picBox}></View>
        <TextInput
          placeholder="Enter name"
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TEAL_GREEN_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.wp('8%'),
    color: COLORS.LIGHT_GREEN,
    marginBottom: SIZES.hp('2%'),
    fontWeight: '500',
  },
  picBox: {
    width: SIZES.wp('30%'),
    height: SIZES.wp('30%'),
    borderColor: COLORS.LIGHT_GREEN,
    borderWidth: 2,
    borderRadius: 100,
  },
  box: {
    width: SIZES.wp('70%'),
    borderColor: COLORS.LIGHT_GREEN,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: SIZES.wp('5%'),
  },
  input: {
    width: '100%',
    marginTop: SIZES.hp('5%'),
    borderColor: COLORS.LIGHT_GREEN,
    borderWidth: 2,
    borderRadius: 10,
    padding: SIZES.wp('2%'),
    fontSize: SIZES.wp('4%'),
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    backgroundColor: COLORS.LIGHT_GREEN,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.hp('5%'),
    marginTop: SIZES.hp('2%'),
  },
  buttonText: {
    fontSize: SIZES.wp('4%'),
    color: '#fff',
  },
});
