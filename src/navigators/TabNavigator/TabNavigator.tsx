/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  CartScreen,
  HomeScreen,
  PaymentScreen,
  ProfileScreen,
} from '../../screens';
import Routes from '../Routes/Routes';

export type TabParamsList = {
  Home_Tab: undefined;
  Cart_Tab: undefined;
  Payment_Tab: undefined;
  Profile_Tab: undefined;
};
const Tab = createBottomTabNavigator<TabParamsList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({color, focused}) => {
          let iconName: string;

          if (route.name === Routes.HOME_TAB) {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === Routes.CART_TAB) {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === Routes.PAYMENT_TAB) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === Routes.PROFILE_TAB) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else {
            iconName = '';
          }
          return (
            <IonIcons
              name={iconName}
              size={22}
              color={color}
              // style={{width: METRICS.width / 5, textAlign: 'center'}}
            />
          );
        },
      })}>
      <Tab.Screen name={Routes.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name={Routes.CART_TAB} component={CartScreen} />
      <Tab.Screen name={Routes.PAYMENT_TAB} component={PaymentScreen} />
      <Tab.Screen name={Routes.PROFILE_TAB} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
