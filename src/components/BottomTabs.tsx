/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  WalletIcon,
} from 'react-native-heroicons/outline';
import {
  ChartBarIcon as ChartBarSolid,
  Cog6ToothIcon as CogSolid,
  HomeIcon as HomeSolid,
  WalletIcon as WalletSolid,
} from 'react-native-heroicons/solid';

const icons = [
  {outline: HomeIcon, solid: HomeSolid},
  {outline: ChartBarIcon, solid: ChartBarSolid},
  {outline: WalletIcon, solid: WalletSolid},
  {outline: Cog6ToothIcon, solid: CogSolid},
];

const BottomTabs = ({state, navigation}: BottomTabs) => {
  return (
    <View style={styles.bottomView}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = isFocused ? icons[index].solid : icons[index].outline;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{alignItems: 'center'}}>
            <Icon color={isFocused ? '#F9B6FF' : '#999999'} size={30} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(BottomTabs);

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    elevation: 7,
    backgroundColor: '#FFFFFF',
  },
});
