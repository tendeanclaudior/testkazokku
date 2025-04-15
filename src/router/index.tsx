import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomTabs} from '../components';
import {Pages1, Pages2} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Statistics = () => <></>;
const EWallet = () => <></>;
const Settings = () => <></>;

const MainApp = () => {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen
        name="Pages2"
        component={Pages2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="EWallet"
        component={EWallet}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pages1"
        component={Pages1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
