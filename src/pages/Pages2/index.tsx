import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {BalanceView, Header} from '../../components';

const Pages2 = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        translucent={false}
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}
      />

      <Header headerMain={true} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <BalanceView currency={'USD'} daysView={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pages2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
