import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../UIsettings/colors';
import Icon from '../UIsettings/Icon';

import PageEventsNavigator from './PageEventsNavigator';
import SectionAgendaScreen from '../screens/SectionAgendaScreen';
import SectionReviewsScreen from '../screens/SectionReviewsScreen';
import SectionArtistsScreen from '../screens/SectionArtistsScreen';

const BottomTab = createBottomTabNavigator();

function SectionsNavigator(props) {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: colors.white,
                inactiveTintColor: colors.medium,

                style: { borderTopWidth: 0 },

                tabStyle: {
                    backgroundColor: 'black',
                    height: 80,
                    borderTopWidth: 0,
                    display: 'flex',
                    alignItems: 'center',
                },
            }}>
            <BottomTab.Screen
                name="Events"
                component={PageEventsNavigator}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icon
                                icon="icon-eye"
                                style={{
                                    fontSize: 26,
                                    color: colors.white,
                                    bottom: 15,
                                }}
                            />
                        ) : (
                            <Icon
                                icon="icon-eye"
                                style={{
                                    fontSize: 26,
                                    color: colors.darker,
                                    bottom: 15,
                                }}
                            />
                        ),
                }}
            />
            <BottomTab.Screen
                name="Agenda"
                component={SectionAgendaScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icon
                                icon="icon-calendar"
                                style={{
                                    fontSize: 26,
                                    color: colors.white,
                                    bottom: 15,
                                }}
                            />
                        ) : (
                            <Icon
                                icon="icon-calendar"
                                style={{
                                    fontSize: 26,
                                    color: colors.darker,
                                    bottom: 15,
                                }}
                            />
                        ),
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={SectionArtistsScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icon
                                icon="icon-heart"
                                style={{
                                    fontSize: 26,
                                    color: colors.white,
                                    bottom: 15,
                                }}
                            />
                        ) : (
                            <Icon
                                icon="icon-heart"
                                style={{
                                    fontSize: 26,
                                    color: colors.darker,
                                    bottom: 15,
                                }}
                            />
                        ),
                }}
            />
            {/* <BottomTab.Screen
                name="Reviews"
                component={SectionReviewsScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Icon
                                icon="icon-edit"
                                style={{
                                    fontSize: 26,
                                    color: colors.white,
                                    bottom: 15,
                                }}
                            />
                        ) : (
                            <Icon
                                icon="icon-edit"
                                style={{
                                    fontSize: 26,
                                    color: colors.darker,
                                    bottom: 15,
                                }}
                            />
                        ),
                }}
            /> */}
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabbar: { backgroundColor: 'black' },
    icon: {
        height: 26,
    },
});
export default SectionsNavigator;
