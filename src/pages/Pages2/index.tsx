import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components';

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
          <Text>Pages2</Text>
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
    padding: 20,
  },
});
