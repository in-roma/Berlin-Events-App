import AsyncStorage from '@react-native-async-storage/async-storage';
import eventsDates from '../../api/eventsDates';
import clearData from '../store_utilities/utilities';
import moment from 'moment';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_AGENDA = 'GET_EVENTS_AGENDA';
export const GET_EVENTS_PINNED = 'GET_EVENTS_PINNED';

export const getEvents = () => {
    try {
        return async (dispatch) => {
            const response = await eventsDates.getEventDates();
            if ((response.status = 200)) {
                clearData('eventsStored');
            }
            const results = response.data;
            const eventsFetchedRaw = results
                .filter((event) =>
                    moment(event.utc).isBetween(
                        moment().utcOffset(0, true).subtract(12, 'hours'),
                        moment().add(1, 'y')
                    ),
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
            // console.log('eventsFetchedRaw:', eventsFetchedRaw);
 
            const eventsFetched = await AsyncStorage.setItem(
                'eventsStored',
                JSON.stringify(eventsFetchedRaw),
            );
            const eventsFetchedAsyncStorage = await AsyncStorage.getItem(
                'eventsStored',
            );
        //    console.log('eventsFetchedAsyncStorage:', eventsFetchedAsyncStorage);

            dispatch({
                    type: GET_EVENTS,
                    payload: eventsFetchedAsyncStorage,
            });
        };
    } catch (error) {
        console.log(error);
    }
};

export const getEventsAgenda = () => {
    try {
        return async (dispatch) => {
            const eventsAgendaStored = await AsyncStorage.getItem(
                'eventsAgenda',
            );
            const eventsAgenda = JSON.parse(eventsAgendaStored);
            if (eventsAgendaStored) {
                dispatch({
                    type: GET_EVENTS_AGENDA,
                    payload: eventsAgenda,
                });
            } else {
                console.log('Unable to fetch data from asyncStorage!');
            }
        };
    } catch (error) {
        console.log(error);
    }
};

export const getEventsPinned = () => {
    try {
        return async (dispatch) => {
            const eventsPinnedStored = await AsyncStorage.getItem(
                'eventsPinned',
            );
            const eventsPinned = JSON.parse(eventsPinnedStored);
            if (eventsPinnedStored) {
                dispatch({
                    type: GET_EVENTS_PINNED,
                    payload: eventsPinned,
                });
            } else {
                console.log('Unable to fetch data from asyncStorage!');
            }
        };
    } catch (error) {
        console.log(error);
    }
};
