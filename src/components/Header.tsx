import {Image, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {memo} from 'react';
import ButtonIcon from './ButtonIcon';
import {Profile} from '../assets';

const Header = ({headerMain, headerGlobal, pressGlobal}: Header) => {
  return (
    <>
      {headerMain && (
        <View style={styles.headerMainBackground}>
          <View style={styles.headerMainContainer}>
            <View style={styles.headerMainContentProfile}>
              <Image source={Profile} style={styles.headerMainProfile} />

              <View>
                <Text style={styles.hedaerMainTitle}>Welcome Back,</Text>
                <Text style={styles.headerMainTitleName}>Dio Tendean</Text>
              </View>
            </View>

            <ButtonIcon
              icon={'pointing'}
              onPress={() =>
                ToastAndroid.show(
                  'This feature being developed.',
                  ToastAndroid.SHORT,
                )
              }
              disabled={false}
            />
          </View>
        </View>
      )}

      {headerGlobal && (
        <View style={styles.headerGlobalBackground}>
          <View style={styles.headerGlobalContainer}>
            <ButtonIcon
              icon={'chevronL'}
              onPress={pressGlobal}
              disabled={false}
            />

            <Text style={styles.headerGlobalTitle}>Statistics</Text>

            <Image source={Profile} style={styles.headerMainProfile} />
          </View>
        </View>
      )}
    </>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headerMainBackground: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMainContentProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerMainProfile: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  hedaerMainTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#909398',
  },
  headerMainTitleName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D2D2D',
  },
  headerGlobalBackground: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerGlobalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerGlobalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D2D2D',
  },
});
