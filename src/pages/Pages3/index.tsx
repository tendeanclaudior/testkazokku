import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BalanceView, Gap, Header, TransactionView} from '../../components';
import {generateHistorys} from '../../utils';

const Pages3 = ({navigation}: Pages3) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        translucent={false}
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}
      />

      <Header
        headerMain={false}
        headerGlobal={true}
        pressGlobal={() => navigation.goBack('')}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <BalanceView currency={'USD'} daysView={false} />

          <Gap height={20} width={0} />

          <View>
            <Text style={styles.titleHistory}>History</Text>

            <TransactionView data={generateHistorys(10)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pages3;

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
  titleHistory: {
    fontSize: 25,
    fontWeight: '800',
    color: '#2D2D2D',
    left: 20,
  },
});
