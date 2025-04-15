/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon1, Icon2, ImageGrafik} from '../../assets';
import {Button, ButtonIcon, Gap, GradientText} from '../../components';

const Pages1 = ({navigation}: Pages1) => {
  const {width, height} = useWindowDimensions();

  const buttonPress = useCallback(
    (type: string) => {
      if (type === 'start') {
        navigation.navigate('Pages2');
      } else {
        ToastAndroid.show('This feature being developed.', ToastAndroid.SHORT);
      }
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        translucent
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View>
            <View style={styles.contentHeader}>
              <Icon1 />
              <Icon2 />
            </View>

            <Gap height={20} width={0} />

            <Image
              source={ImageGrafik}
              style={[
                styles.imageGrafikView,
                {width: width * 0.8, height: height * 0.4},
              ]}
            />

            <Gap height={25} width={0} />

            <Text style={styles.title}>{'Find way to \nmanage'}</Text>
            <GradientText text={'your finance'} fontSize={40} />

            <Gap height={30} width={0} />

            <Text style={styles.subTitle}>
              {'The most Transparent & \nSecurity Bank ever'}
            </Text>
          </View>

          <View style={styles.buttonView}>
            <View style={{flex: 3}}>
              <Button
                text={'Get Started'}
                onPress={() => buttonPress('start')}
              />
            </View>

            <View style={{flex: 0.7}}>
              <ButtonIcon
                icon={'finder'}
                onPress={() => buttonPress('finder')}
                disabled={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pages1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 35,
    justifyContent: 'space-between',
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageGrafikView: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333333',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#9FA3AC',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
