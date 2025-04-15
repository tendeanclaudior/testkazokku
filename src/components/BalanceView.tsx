import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moments} from '../utils';

const BalanceView = ({currency = 'USD', daysView}: BalanceView) => {
  const generateRandomBalance = () => {
    const randomAmount = Math.floor(Math.random() * 10000) + 100;

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(randomAmount);
  };

  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.title}>Your Balance Is</Text>

      <Text style={styles.titleAmount}>{generateRandomBalance()}</Text>

      {daysView && (
        <Text style={styles.titleDays}>
          {moments.format('dddd, DD MMM YYYY')}
        </Text>
      )}
    </View>
  );
};

export default BalanceView;

const styles = StyleSheet.create({
  balanceContainer: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#937BB7',
  },
  titleAmount: {
    fontSize: 50,
    fontWeight: '800',
    color: '#2D2D2D',
  },
  titleDays: {
    fontSize: 16,
    fontWeight: '300',
    color: '#A1A4AB',
  },
});
