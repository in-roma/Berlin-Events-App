import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SectionEventsScreen from '../screens/SectionEventsScreen';
import PageEventScreen from '../screens/PageEventScreen';

const Stack = createStackNavigator();

function PageEventsNavigator() {
    // const NavigationOptions = () => {
    // 	return {
    // 		screenInterpolator: (sceneProps) => {
    // 			const { layout, position, scene } = sceneProps;
    // 			const { index } = scene;
    // 			return FadeTransition(position, index);
    // 		},
    // 	};
    // };

    // const FadeTransition = (position, index) => {
    // 	const sceneRange = [index - 1, index];
    // 	const outputOpacity = [0, 1];
    // 	const transition = position.interpolate({
    // 		inputRange: sceneRange,
    // 		outputRange: outputOpacity,
    // 	});
    // 	return {
    // 		opacity: transition,
    // 	};
    // };

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            mode="card"
            initialRouteName="Events"
            // transitionConfig={NavigationOptions}
            options={{
                animationEnabled: true,
                animationTypeForReplace: 'pop',
            }}>
            <Stack.Screen name="Events" component={SectionEventsScreen} />
            <Stack.Screen name="Event" component={PageEventScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default PageEventsNavigator;
