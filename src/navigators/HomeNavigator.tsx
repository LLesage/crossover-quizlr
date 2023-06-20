import React from 'react';
import { Platform, NativeModules, Dimensions } from 'react-native';
const { StatusBarManager } = NativeModules;
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Following } from '../screens/Home/Following';
import { ForYou } from '../screens/Home/ForYou';

const Tab = createMaterialTopTabNavigator();

export const HomeNavigator: React.FC<any> = () => {
  return (
    <Tab.Navigator
        style={{ 
            marginTop: StatusBarManager.HEIGHT,
        }}
        screenOptions={{
            // tabBarItemStyle : { width: 100 },
            tabBarStyle : { backgroundColor: '#000' },
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#777',
            tabBarIndicatorStyle: { 
                backgroundColor: '#FFF', 
                height: 4, 
                width: 60,
                marginHorizontal: Dimensions.get('screen').width/4 - 30
            },
            tabBarContentContainerStyle: { 
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: "center",
                // width: '100%'
            }
        }}
    >
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="For you" component={ForYou} />
    </Tab.Navigator>
  );
}