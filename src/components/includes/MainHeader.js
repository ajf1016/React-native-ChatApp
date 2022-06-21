import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

export default function MainHeader({sliderMode}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <Text style={styles.title}>xChat</Text>
        </View>
        <View style={styles.right}>
          <View style={[styles.iconBox, {marginRight: SIZES.wp('4%')}]}>
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.image}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/images/dots.png')}
              style={styles.image}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.camIcon}>
          <Image
            source={require('../../assets/images/cam.png')}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.slideBox}>
          <Text style={styles.slideText}>CHATS</Text>
          {sliderMode === 'chat' && <View style={styles.underLine} />}
        </View>
        <View style={styles.slideBox}>
          <Text style={styles.slideText}>STATUS</Text>
          {sliderMode === 'status' && <View style={styles.underLine} />}
        </View>
        <View style={styles.slideBox}>
          <Text style={styles.slideText}>CALLS</Text>
          {sliderMode === 'call' && <View style={styles.underLine} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TEAL_GREEN_DARK,
    width: SIZES.wp('100%'),
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.wp('4.5%'),
    paddingTop: SIZES.hp('2%'),
    marginBottom: SIZES.hp('3%'),
  },
  left: {},
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: SIZES.wp('8%'),
    color: '#fff',
  },
  right: {
    flexDirection: 'row',
  },
  iconBox: {
    width: 25,
    height: 25,
    borderColor: '#fff',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SIZES.hp('1%'),
  },
  camIcon: {
    width: '10%',
    height: 25,
    borderColor: '#fff',
    marginRight: SIZES.wp('3%'),
  },
  slideBox: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#fff',
    width: '27%',
    position: 'relative',
  },
  slideText: {
    fontSize: SIZES.wp('4%'),
    color: '#fff',
  },
  underLine: {
    position: 'absolute',
    bottom: '-35%',
    left: 0,
    height: 5,
    width: '100%',
    backgroundColor: '#fff',
  },
});
