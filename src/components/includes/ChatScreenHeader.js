import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

export default function ChatScreenHeader({navigation, userDetails}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatList')}
          style={[
            styles.iconBox,
            {transform: [{rotateY: '180deg'}], marginRight: SIZES.wp('2%')},
          ]}>
          <Image
            style={styles.image}
            source={require('../../assets/images/right-arrows.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={styles.profilePicBox}>
          {userDetails.profile_picture ? (
            <Image source={userDetails.profile_picture} style={styles.image} resizeMode={'contain'}/>
          ) : (
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.image}
              resizeMode={'contain'}
            />
          )}
        </View>
        <Text style={styles.userName}>{userDetails.name}</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBox}>
          <Image
            style={styles.image}
            source={require('../../assets/images/phone.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.iconBox}>
          <Image
            style={styles.image}
            source={require('../../assets/images/video-cam.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={[styles.iconBox, {marginRight: 0}]}>
          <Image
            style={styles.image}
            source={require('../../assets/images/dots.png')}
            resizeMode={'contain'}
          />
        </View>
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
    width: SIZES.wp('5%'),
    height: SIZES.wp('5%'),
    borderColor: '#fff',
    marginRight: SIZES.wp('5%'),
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
  image: {
    width: '100%',
    height: '100%',
  },
});
