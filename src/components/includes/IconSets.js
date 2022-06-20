import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { SIZES } from '../constants';

export const GreenTick = () => {
  return (
    <View style={styles.tickContainer}>
      <View style={styles.tickBox}>
        <Image
          source={require('../../assets/images/tick-green.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.tickBox}>
        <Image
          source={require('../../assets/images/tick-green.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export const OneTick = () => {
  return (
    <View style={styles.tickContainer}>
      <View style={styles.tickBox}>
        <Image
          source={require('../../assets/images/tick-white.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export const DoubleTick = () => {
  return (
    <View style={styles.tickContainer}>
      <View style={styles.tickBox}>
        <Image
          source={require('../../assets/images/tick-white.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.tickBox}>
        <Image
          source={require('../../assets/images/tick-white.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tickContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight : SIZES.wp('2%')
  },
  tickBox: {
    width: 10,
    height: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
