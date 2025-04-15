import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const Card = ({id, style}: Card) => {
  const getColor = () => {
    switch (id) {
      case 0:
        return '#7F49A7';
      case 1:
        return '#407488';

      default:
        return '#407488';
    }
  };

  const getTitle = () => {
    switch (id) {
      case 0:
        return 'USD';
      case 1:
        return 'EURO';

      default:
        return '';
    }
  };

  return (
    <Animated.View style={style}>
      <Text style={styles.title}>{getTitle()}</Text>
      <View style={styles.spacer} />
      <View style={styles.container}>
        <View style={[styles.circle, {backgroundColor: getColor()}]} />
        <View>
          <View style={[styles.topLine, {backgroundColor: getColor()}]} />
          <View style={[styles.bottomLine, {backgroundColor: getColor()}]} />
        </View>
      </View>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'right',
    right: 15,
  },
  spacer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 20,
    marginLeft: 15,
  },
  topLine: {
    height: 20,
    width: 120,
    borderRadius: 40,
    marginBottom: 20,
    marginLeft: 15,
  },
  bottomLine: {
    height: 20,
    width: 60,
    borderRadius: 40,
    marginBottom: 20,
    marginLeft: 15,
  },
});
