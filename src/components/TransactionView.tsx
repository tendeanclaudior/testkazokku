/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

interface renderProps {
  item: any;
}

const renderItem = ({item}: renderProps) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={item.image} style={styles.imageView} />

      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.day}</Text>
      </View>
    </View>

    <View style={{alignItems: 'flex-end'}}>
      <Text style={styles.title}>- {item.amount}</Text>
      <Text style={styles.subTitle}>{item.time}</Text>
    </View>
  </View>
);

const TransactionView = ({data}: TransactionView) => {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
};

export default memo(TransactionView);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#F49AEE',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2D2D2D',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: '#9698A1',
  },
});
