import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SectionsNavigator from './app/navigation/SectionsNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

const App = () => {
    let isDataStored = async (collection) => {
        let response = await AsyncStorage.getItem(collection);
        return response;
    };

    const localDB = async () => {
        try {
            if (!isDataStored('eventsStored')) {
                await AsyncStorage.setItem('eventsStored', JSON.stringify({}));
            }
            if (!isDataStored('eventsAgenda')) {
                await AsyncStorage.setItem('eventsAgenda', JSON.stringify([]));
            }
            if (!isDataStored('eventsReviews')) {
                await AsyncStorage.setItem('eventsReviews', JSON.stringify([]));
            }
            if (!isDataStored('artistsSection')) {
                await AsyncStorage.setItem(
                    'artistsSection',
                    JSON.stringify([]),
                );
            }
            if (!isDataStored('artistsFollowed')) {
                await AsyncStorage.setItem(
                    'artistsFollowed',
                    JSON.stringify([]),
                );
            }
        } catch (error) {
            console.log('there is an error with the localDB: ', error);
        }
    };
    localDB();
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    return (
        <NavigationContainer>
            <SectionsNavigator />
        </NavigationContainer>
    );
};

export default App;
