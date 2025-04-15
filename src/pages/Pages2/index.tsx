import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import {BalanceView, CardContainer, Header} from '../../components';

const {height} = Dimensions.get('window');

const Pages2 = () => {
  const firstPriority = useSharedValue(1);
  const secondPriority = useSharedValue(0.9);

  return (
    <GestureHandlerRootView style={styles.rootView}>
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

            <View style={styles.cardContent}>
              <CardContainer
                id={1}
                color={'#004763'}
                priority={secondPriority}
                firstPriority={firstPriority}
                secondPriority={secondPriority}
              />
              <CardContainer
                id={0}
                color={'#D5B8EB'}
                priority={firstPriority}
                firstPriority={firstPriority}
                secondPriority={secondPriority}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Pages2;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
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
  cardContent: {
    height: height * 0.3,
    alignItems: 'center',
    position: 'relative',
  },
});
