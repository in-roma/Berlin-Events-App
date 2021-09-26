import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '../UIsettings/Icon';
import colors from '../UIsettings/colors';
import CustomScreen from '../UIsettings/CustomScreen';
import ReviewCard from '../components/ReviewsSection/ReviewCard';
import ReviewNewCard from '../components/ReviewsSection/ReviewNewCard';
import ButtonFilter from '../components/Filter/ButtonFilter';
import eventsApi from '../api/events';

import useApi from '../hooks/useApi';
import userApi from '../api/user';

function SectionReviewsScreen() {
    // Database state management
    const [dataEvents, setDataEvents] = useState([]);
    const [dataEventsResult, setDataEventsResult] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadEvents();
    }, []);

    loadEvents = async () => {
        ////
        // const initialEventsDB = await AsyncStorage.setItem(
        // 	'eventsReviews',
        // 	JSON.stringify([])
        // );
        try {
            setLoading(true);
            const response = await eventsApi.getEvents();
            clearData = async () => {
                try {
                    await AsyncStorage.removeItem('eventsReviews');
                } catch (e) {}

                // console.log('Reviews db cleared reload.');
            };
            clearData();
            await AsyncStorage.setItem(
                'eventsReviews',
                JSON.stringify(response.data),
            );
            // console.log(
            // 	'this is response.data events/reviews section: ',
            // 	response.data
            // );
        } catch (error) {
            console.log(error);
        }
        const eventDBStored = await AsyncStorage.getItem('eventsReviews');
        const eventsStored = JSON.parse(eventDBStored);
        setDataEvents(eventsStored);
        setLoading(false);

        setDataEventsResult(eventsStored);
        // console.log(
        // 	'this is DataEventsResult events/reviews section: ',
        // 	dataEventsResult
        // );
    };
    // Filter
    const [displayCommunity, setDisplayCommunity] = useState(false);
    const [displayPublished, setDisplayPublished] = useState(true);

    const showCommunity = () => {
        setDisplayCommunity(false);
        setDisplayPublished(true);
    };
    const showPublished = () => {
        setDisplayCommunity(true);
        setDisplayPublished(false);
    };

    const [newReviewDisplay, setNewReviewDisplay] = useState(false);
    const [newButton, setNewButton] = useState(true);
    const displayNew = () => {
        if (newReviewDisplay) {
            setNewButton(true);
            setNewReviewDisplay(false);
        }
        if (!newReviewDisplay) {
            setNewButton(false);
            setNewReviewDisplay(true);
        }
    };

    const header = () => {
        return <View style={styles.headerReviewsEvents} />;
    };
    const separator = () => {
        return <View style={styles.separatorReviews} />;
    };
    const windowWidth = useWindowDimensions().width;
    return (
        <CustomScreen>
            <View style={[styles.container, { width: windowWidth }]}>
                {newReviewDisplay && <ReviewNewCard closeWindow={displayNew} />}
                {newButton && (
                    <TouchableWithoutFeedback onPress={displayNew}>
                        <View style={styles.btnView}>
                            <Icon
                                icon="icon-plus"
                                style={{
                                    fontSize: 28,
                                    color: colors.darker,
                                    bottom: 0,
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                )}
                <View style={styles.filterContainer}>
                    <View style={[styles.filterFrame, { width: windowWidth }]}>
                        <TouchableWithoutFeedback onPress={showCommunity}>
                            <View style={styles.community}>
                                <Text
                                    style={
                                        displayPublished
                                            ? styles.selected
                                            : styles.filterText
                                    }>
                                    Community
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={showPublished}>
                            <View style={styles.published}>
                                <Text
                                    style={
                                        displayCommunity
                                            ? styles.selected
                                            : styles.filterText
                                    }>
                                    Published
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                {loading && (
                    <View style={styles.activityFrame}>
                        <ActivityIndicator
                            animating={loading}
                            color={'white'}
                        />
                    </View>
                )}

                <FlatList
                    ListHeaderComponent={header}
                    ItemSeparatorComponent={separator}
                    style={styles.flatlist}
                    data={dataEventsResult}
                    keyExtractor={(artist, index) =>
                        index + artist._id.toString()
                    }
                    renderItem={({ item, index }) => (
                        // item.map((item) => (
                        <ReviewCard
                            event={item && item.event}
                            artist={item.artist && item.artist.name}
                            image={{ uri: item && item.imageUrl }}
                            reviews={item && item.reviews}
                            type={item && item.type}

                            // event={item.event}
                            // openEvent={() =>
                            // 	navigation.navigate('Event', item)
                        />
                    )}
                />
            </View>
        </CustomScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 0,
    },
    filterContainer: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        top: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,

        backgroundColor: colors.black,
    },
    filterFrame: {
        // width: '100%',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    community: {
        marginLeft: 8,
        marginRight: 8,
        // backgroundColor: 'red',
    },
    published: {
        marginLeft: 8,
        marginRight: 8,
        // backgroundColor: 'blue',
    },
    selected: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '500',
        fontFamily: 'Unica 77 Trial TT',
    },
    filterText: {
        fontSize: 16,
        color: colors.medium,
        fontWeight: '300',
        fontFamily: 'Unica 77 Trial TT',
    },
    flatlist: {
        marginTop: 0,
    },
    headerReviewsEvents: {
        height: 8,
    },
    separatorReviews: {
        height: 16,
    },
    btnView: {
        width: 60,
        height: 48,
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        top: 4,
        right: 12,
        zIndex: 99,
        elevation: 99,
        alignSelf: 'center',
        // backgroundColor: colors.white,
    },
    activityFrame: {
        width: '100%',
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SectionReviewsScreen;
