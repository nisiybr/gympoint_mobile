import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Checkin from '~/pages/Checkin';
import HelpOrder from '~/pages/HelpOrder';
import HelpOrderDetail from '~/pages/HelpOrder/HelpOrderDetail';
import Configuration from '~/pages/Configuration';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            Help: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  HelpOrderDetail,
                },
                {
                  defaultNavigationOptions: {
                    headerShown: false,
                    // headerTransparent: true,
                    // headerTintColor: '#FFF',
                    // headerLeftContainerStyle: {
                    // marginLeft: 20,
                    // },
                  },
                }
              ),

              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Pedir Ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help" size={20} color={tintColor} />
                ),
              },
            },
            Configuration,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      { initialRouteName: signed ? 'App' : 'Sign' }
    )
  );
