import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen} from '../../screens';
import TabNavigator, {TabParamsList} from '../TabNavigator/TabNavigator';

export type RootStackParamsList = {
  TabNavigator: NavigatorScreenParams<TabParamsList>;
  Detail: undefined;
};
const RootStack = createStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'TabNavigator'} component={TabNavigator} />
        <RootStack.Screen name={'Detail'} component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
