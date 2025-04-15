import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pages1, Pages2} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pages1"
        component={Pages1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pages2"
        component={Pages2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
