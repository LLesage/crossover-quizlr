import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainNavigatorParamList } from './types';
import { routes } from './routes';
import { Home } from '../screens/Home';
import { Discover } from '../screens/Discover';
import { Actvity } from '../screens/Activity';
import { Bookmarks } from '../screens/Bookmarks';
import { Profile } from '../screens/Profile';
import HomeTabIconActive from '../components/svgs/icons/HomeTabIconActive';
import HomeTabIcon from '../components/svgs/icons/HomeTabIcon';
import DiscoverTabIcon from '../components/svgs/icons/DiscoverTabIcon';
import ActivityTabIcon from '../components/svgs/icons/ActivityTabIcon';
import BookmarlsTabIcon from '../components/svgs/icons/BookmarlsTabIcon';
import ProfileTabIcon from '../components/svgs/icons/ProfileTabIcon';
import { Text } from 'react-native';
import DiscoverTabIconActive from '../components/svgs/icons/DiscoverTabIconActive';
import ActivityTabIconActive from '../components/svgs/icons/ActivityTabIconActive';
import BookmarlsTabIconActive from '../components/svgs/icons/BookmarlsTabIconActive';
import ProfileTabIconActive from '../components/svgs/icons/ProfileTabIconActive';
import { HomeNavigator } from './HomeNavigator';

const Tabs = createBottomTabNavigator<MainNavigatorParamList>();

export const AppNavigator: React.FC<any> = () => {
    return (
        <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0
                },
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#777',
            }}
        >
            <Tabs.Screen
                name={routes.home}
                component={HomeNavigator}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => null,
                    headerTransparent: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: (
                            {focused, color, size}
                        ) => {
                        return (
                            focused 
                            ? 
                            <HomeTabIconActive /> 
                            : 
                            <HomeTabIcon />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name={routes.discover}
                component={Discover}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => null,
                    headerTransparent: true,
                    tabBarLabel: 'Discover',
                    tabBarIcon: (
                            {focused, color, size}
                        ) => {
                        return (
                            focused 
                            ? 
                            <DiscoverTabIconActive /> 
                            : 
                            <DiscoverTabIcon />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name={routes.activity}
                component={Actvity}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => null,
                    headerTransparent: true,
                    tabBarLabel: 'Activity',
                    tabBarIcon: (
                            {focused, color, size}
                        ) => {
                        return (
                            focused 
                            ? 
                            <ActivityTabIconActive /> 
                            : 
                            <ActivityTabIcon />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name={routes.bookmarks}
                component={Bookmarks}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => null,
                    headerTransparent: true,
                    tabBarLabel: 'Bookmarks',
                    tabBarIcon: (
                            {focused, color, size}
                        ) => {
                        return (
                            focused 
                            ? 
                            <BookmarlsTabIconActive /> 
                            : 
                            <BookmarlsTabIcon />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name={routes.profile}
                component={Profile}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => null,
                    headerTransparent: true,
                    tabBarLabel: 'Profile',
                    tabBarIcon: (
                            {focused, color, size}
                        ) => {
                        return (
                            focused 
                            ? 
                            <ProfileTabIconActive /> 
                            : 
                            <ProfileTabIcon />
                        )
                    }
                }}
            />
        </Tabs.Navigator>
    )
}