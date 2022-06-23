import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacityComponent,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MainHeader from '../../includes/MainHeader';
import {COLORS, SIZES} from '../../constants';
import {chatListData} from '../../../data/chatListData';
import {DoubleTick, GreenTick, OneTick} from '../../includes/IconSets';

export default function ChatList({navigation}) {
  return (
    <View>
      <MainHeader sliderMode={'chat'} />
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View
          style={{
            height: SIZES.hp('90%'),
            backgroundColor: COLORS.TEAL_GREEN,
            paddingVertical: SIZES.hp('2%'),
            paddingHorizontal: SIZES.wp('2.4%'),
          }}>
          {chatListData &&
            chatListData.map(item => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                onPress={() => navigation.navigate('ChatScreen', item)}>
                <View style={styles.listItem}>
                  <View style={styles.left}>
                    <View style={styles.profilePicBox}>
                      {item.profile_picture ? (
                        <Image
                          source={item.profile_picture}
                          style={styles.image}
                        />
                      ) : (
                        <Image
                          source={require('../../../assets/images/user.png')}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <View style={styles.middle}>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={styles.messageDetails}>
                        {item.send_message_status === 'seen' &&
                        item.unread_count === 0 ? (
                          <GreenTick />
                        ) : item.send_message_status === 'delivered' &&
                          item.unread_count === 0 ? (
                          <DoubleTick />
                        ) : item.send_message_status === 'not-delivered' &&
                          item.unread_count === 0 ? (
                          <OneTick />
                        ) : null}
                        <Text style={styles.lastMessage}>
                          {item.last_message}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.right}>
                    <Text
                      style={[
                        styles.time,
                        {
                          color: item.unread_count
                            ? COLORS.LIGHT_GREEN
                            : '#fff',
                        },
                      ]}>
                      {item.last_message_time}
                    </Text>
                    {item.unread_count ? (
                      <View style={styles.countBox}>
                        <Text style={styles.count}>{item.unread_count}</Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.hp('2%'),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
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
  image: {
    width: '100%',
    height: '100%',
  },
  middle: {},
  name: {
    fontSize: SIZES.wp('4%'),
    color: '#fff',
    fontWeight: '500',
  },
  messageDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sentStatus: {
    width: 10,
    height: 10,
    borderColor: '#fff',
    marginRight: SIZES.wp('1%'),
    borderWidth: 1,
  },
  lastMessage: {
    fontSize: SIZES.wp('4%'),
    color: '#fff',
    fontWeight: '500',
  },
  right: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: SIZES.wp('3%'),
    color: '#fff',
    fontWeight: '500',
  },
  count: {
    fontSize: SIZES.wp('3%'),
    color: '#fff',
  },
  countBox: {
    backgroundColor: COLORS.LIGHT_GREEN,
    width: SIZES.wp('5%'),
    height: SIZES.wp('5%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.wp('2%'),
    marginTop: SIZES.wp('1%'),
  },
});
