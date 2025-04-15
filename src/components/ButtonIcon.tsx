/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  ViewfinderCircleIcon,
  ArrowsPointingInIcon,
  ChevronLeftIcon,
} from 'react-native-heroicons/outline';

const ButtonIcon = ({icon, onPress, disabled}: ButtonIcon) => {
  const Icon = () => {
    switch (icon) {
      case 'finder':
        return (
          <View style={styles.FView}>
            <ViewfinderCircleIcon size={30} color={'#2D2D2D'} />
          </View>
        );
      case 'pointing':
        return (
          <View style={styles.PView}>
            <ArrowsPointingInIcon size={30} color={'#2D2D2D'} />
          </View>
        );
      case 'chevronL':
        return (
          <View style={styles.CLView}>
            <ChevronLeftIcon size={30} color={'#2D2D2D'} />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disabled}>
      {Icon()}
    </TouchableOpacity>
  );
};

export default memo(ButtonIcon);

const styles = StyleSheet.create({
  FView: {
    backgroundColor: '#F6F7F9',
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 1,
  },
  PView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CLView: {
    backgroundColor: '#EBF1F4',
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
