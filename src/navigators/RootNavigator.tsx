import React, { useRef } from 'react';
import { RootNavigatorParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { routes } from './routes';
import { AppNavigator } from './AppNavigator';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
};

export const RootNavigator: React.FC<any> = ({ }) => {
  const navigationRef = useRef();
  
  return (
    <>
      <StatusBar
        backgroundColor={
          '#FFF'
        }
        barStyle={
          'light-content'
        }
      />
      <NavigationContainer
        theme={MyTheme}
      >
        <Stack.Navigator>
          <Stack.Screen
            name={routes.app}
            component={AppNavigator}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    )
};
