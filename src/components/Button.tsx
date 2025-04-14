import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({text, onPress}: Button) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        colors={['#FFA6B8', '#F9B6FF', '#A595FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View>
          <Text style={styles.title}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
