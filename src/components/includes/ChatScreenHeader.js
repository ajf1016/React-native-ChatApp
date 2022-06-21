import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

export default function ChatScreenHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconBox}></View>
        <View style={styles.profilePicBox}></View>
        <Text style={styles.userName}>XkaZaA</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TEAL_GREEN_DARK,
    paddingHorizontal: SIZES.wp('4.5%'),
    width: SIZES.wp('100%'),
    height: SIZES.hp('10%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBox: {
    width: SIZES.wp('7%'),
    height: SIZES.wp('7%'),
    borderColor: '#fff',
    borderWidth: 1,
  },
  profilePicBox: {
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: SIZES.wp('2%'),
    overflow: 'hidden',
  },
  userName: {
    fontSize: SIZES.wp('4%'),
    color: '#fff',
    fontWeight: '500',
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
