import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    FlatList,
    View,
    StyleSheet,
    Share,
    ActivityIndicator,
    TouchableWithoutFeedback,
} from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWindowDimensions } from 'react-native';
import colors from '../UIsettings/colors';
import Icon from '../UIsettings/Icon';

// Components
import CustomScreen from '../UIsettings/CustomScreen';
import EventCard from '../components/EventSection/EventCard';
import EventCardAction from '../components/EventSection/EventCardAction';
import ButtonFilter from '../components/Filter/ButtonFilter';
import SubMenuType from '../components/Filter/SubMenuType';
import SubMenuWhen from '../components/Filter/SubMenuWhen';
import Filter from '../components/Filter/Filter';
import MapView from '../components/MapView/MapView';
import PinCard from '../components/PinView//PinCard';
import Message from '../navigation/Message';
import ArtistCardEventSection from '../components/EventSection/ArtistCardEventSection';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getEvents,getEventsFilteredType } from '../store/actions/eventsActions';

export default function SectionEventsScreen({ navigation }) {

// Loader
const [loading, setLoading] = useState(false);

// Fetching events
const eventsReduced = useSelector((state) => state.eventsReducer);
const dispatch = useDispatch();

const fetchingEvents = () => dispatch(getEvents());
    useEffect(() => {
        fetchingEvents();
}, []);

let dataEventsReceived = eventsReduced.events;

// console.log('this is eventsReduced :', eventsReduced.events);
console.log('this dataEventsReceived', dataEventsReceived);

// Filter button states
const [filterTopTab, setFilterTopTab] = useState(true);
const [filterTab, setFilterTab] = useState(true);
const [filterText, setFilterText] = useState('MAP');

// Filter display submenu type
const handleFilterTypeMain = () => {
        setTypeSubmenu(true);
        setSubMenuDisplay(true);
};
const handleFilterWhenMain = () => {
        setTypeSubmenu(false);
        setSubMenuDisplay(true);
};

// Filter Buttons displays/states
const [filterType, setFilterType] = useState('All');
const [filterTypeName, setFilterTypeName] = useState('All');
const [filterWhen, setFilterWhen] = useState('Now');
const [filterWhenName, setFilterWhenName] = useState('Now');
const [typeSubmenu, setTypeSubmenu] = useState(true);
const [subMenuDisplay, setSubMenuDisplay] = useState(false);
const [dateCalendar, setDateCalendar] = useState();

// Filtering function
const handleFilterType = (type, value) => {
        dataEventsReceived = dispatch(getEventsFilteredType({ filterType, filterWhen}))

        setSubMenuDisplay(false);
        if (type === "what"){
        setFilterTypeName(value);}

        if (type === "when"){
        setFilterWhenName(value);
        }
};



    // const dateSelected = (date) => {
    //     const filtering = dataEventsFiltered.filter((ele) =>
    //         moment(ele.utc).isSame(date, 'day'),
    //     );
    //     setDataEventsResult(
    //         filtering.sort((a, b) => {
    //             return moment(a.utc).diff(b.utc);
    //         }),
    //     );

    // };

    // Map view
    const [mapView, setMapView] = useState(false);
    const [flatlistOp, setFlatlistOp] = useState(styles.flatlist);
    const handleMapView = () => {
        if (!mapView) {
            setFlatlistOp(styles.flatlistOpacityNull);
            setMapView(true);
            setFilterTopTab(false);
        }
        if (mapView) {
            setFlatlistOp(styles.flatlist);
            setMapView(false);
            setFilterTopTab(true);
        }
        if (filterText === 'MAP') {
            setFilterTab(true);
            setFilterText('LIST');
        }
        if (filterText === 'LIST') {
            setFilterTab(false);
            setFilterText('MAP');
        }
    };

    // Add Pin
    const [pinView, setPinView] = useState(false);
    const [pinList, setPinList] = useState([]);

    const handlePinView = (event) => {
        setPinView(true);
        setPinList([...pinList, event]);
    };

    const closePinWindow = () => {
        setPinView(false);
    };

    const handlePinCardDelete = (pin) => {
        setPinList(pinList.filter((p) => p.id !== pin.id));
    };

    // Share Event
    const shareEvent = async (event, artist, venue, utc) => {
        try {
            const result = await Share.share({
                title: event + 'by' + artist,
                message:
                    event +
                    ' by ' +
                    artist +
                    ' at ' +
                    venue +
                    ' - ' +
                    moment(utc, 'MM-DD-YYYY'),
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    // Save event
    const [savedEvents, setSavedEvents] = useState([]);

    const handleSaveEvent = async (event) => {
        message('add', event.event.event);
        // setSavedEvents([...savedEvents, { event }]);
        const savedEvent = event;

        try {
            const agendaDBStored = await AsyncStorage.getItem('eventsAgenda');
            const agendaStored = JSON.parse(agendaDBStored);
            // console.log('this local data: ', agendaStored);
            const newAgendaValues = [...agendaStored, savedEvent];
            await AsyncStorage.setItem(
                'eventsAgenda',
                JSON.stringify(newAgendaValues),
            );
            // console.log('this is saved event:', newAgendaValues);
        } catch (error) {
            console.log(error);
        }
        // console.log(event);
    };

    useEffect(() => {
        handleSaveEvent;
    }, [savedEvents]);

    // Display message
    const [messageWindow, setMessageWindow] = useState(false);
    const [messageType, setMessageType] = useState();
    const [messageContent, setMessageContent] = useState();

    const message = (type, content) => {
        setMessageWindow(true);
        setMessageType(type);
        setMessageContent(content);
    };
    useEffect(() => {
        setTimeout(() => {
            setMessageWindow(false);
        }, 2000);
    }, [messageWindow]);

    // Artist display
    const [artistStoredDB, setArtistStoredDB] = useState([]);
    const [artistFollowedToday, setArtistFollowedToday] = useState();
    const [diplayArtistOfTheDay, setDiplayArtistOfTheDay] = useState(false);

    // const loadArtist = async () => {
    // 	try {
    // 		const artistsDBStored = await AsyncStorage.getItem(
    // 			'artistsFollowed'
    // 		);
    // 		const artistStored = JSON.parse(artistsDBStored);
    // 		setArtistStoredDB(artistStored);
    // 		console.log('this is artistStored: ', artistStoredDB);
    // 	} catch (error) {}
    // };

    // const followed = async () => {
    //     try {
    //         const artistsDBStored = await AsyncStorage.getItem(
    //             'artistsFollowed',
    //         );
    //         const artistStored = JSON.parse(artistsDBStored);
    //         setArtistStoredDB(artistStored);
    //         console.log('this is artistStored: ', artistStoredDB);
    //     } catch (error) {}

    //     const artistToday = dataEvents.filter((ele) =>
    //         moment(ele.utc).isBetween(timeNow, endOfDay),
    //     );
    //     console.log('this is artist today: ', artistToday);
    //     const listNameDBstored = [];
    //     artistStoredDB.map((item) => listNameDBstored.push(item.name));
    //     console.log('listNameDBstored: ', listNameDBstored);
    //     const artistFollowed = artistToday.filter((ele) =>
    //         listNameDBstored.includes(ele.event.artist.name),
    //     );

    //     try {
    //         setArtistFollowedToday(artistFollowed);
    //         console.log('this is ArtistFollowedToday: ', artistFollowedToday);
    //         if (artistFollowedToday.length > 0) {
    //             setDiplayArtistOfTheDay(true);
    //         } else {
    //             setDiplayArtistOfTheDay(false);
    //         }
    //     } catch (error) {}
    // };

    const closeCard = (item) => {
        const listFiltered = artistFollowedToday.filter(
            (ele) => ele.event.artist.name !== item,
        );
        setArtistFollowedToday(listFiltered);
        if (artistFollowedToday.length > 0) {
            setDiplayArtistOfTheDay(true);
        } else {
            setDiplayArtistOfTheDay(false);
        }
    };

    // Pin Layout
    const headerPin = () => {
        return <View style={styles.headerPin} />;
    };

    const separatorPin = () => {
        return <View style={styles.separatorPin} />;
    };

    // Events Layout
    const header = () => {
        return <View style={styles.headerEvents} />;
    };
    const separator = () => {
        return <View style={styles.separatorEvents} />;
    };

    const footer = () => {
        return <View style={styles.footerEvents} />;
    };
    const windowWidth = useWindowDimensions().width;
    return (
        <CustomScreen style={styles.screen}>
            {!filterTab && (
                <ButtonFilter
                    onPress={handleMapView}
                    text={filterText}
                    color={{ color: 'black', backgroundColor: 'white' }}
                />
            )}
            {filterTab && (
                <ButtonFilter
                    onPress={handleMapView}
                    text={filterText}
                    color={{ color: 'white', backgroundColor: 'black' }}
                />
            )}
            {filterTopTab && (
                <>
                    <Filter
                        allBtn={handleFilterTypeMain}
                        nowBtn={handleFilterWhenMain}
                        filter="filter"
                        filterTypeName={filterTypeName}
                        filterTypeWhen={filterWhenName}
                    />
                    {subMenuDisplay && (
                        <View style={styles.subFilterMenuContainer}>
                            {typeSubmenu ? (
                                <SubMenuType filterType={handleFilterType} />
                            ) : (
                                <SubMenuWhen filterType={handleFilterType} />
                            )}
                        </View>
                    )}
                    {filterWhen == 'Date' && (
                        <CalendarStrip
                            startingDate={timeNow}
                            scrollable
                            style={{
                                height: 56,
                                paddingTop: 2,
                                paddingBottom: 2,
                            }}
                            calendarColor={'white'}
                            calendarHeaderStyle={{
                                color: 'white',
                                fontSize: 10,
                            }}
                            highlightDateNameStyle={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: '600',
                            }}
                            highlightDateNumberStyle={{
                                color: 'black',
                                fontSize: 24,
                                fontWeight: '600',
                            }}
                            dateNumberStyle={{ color: 'black', fontSize: 14 }}
                            dateNameStyle={{ color: 'black', fontSize: 12 }}
                            iconContainer={{ flex: 0.1 }}
                            selectedDate={timeNow}
                            showMonth={false}
                            styleWeekend={true}
                            onDateSelected={(date) => dateSelected(date)}
                        />
                    )}
                </>
            )}

            {loading && (
                <View style={styles.activityFrame}>
                    <ActivityIndicator animating={loading} color={'white'} />
                </View>
            )}
            {diplayArtistOfTheDay && (
                <View style={[styles.artistFollowedFrame, { width: 'auto' }]}>
                    {diplayArtistOfTheDay &&
                        artistFollowedToday.map((item) => (
                            <ArtistCardEventSection
                                artistImage={{ uri: item.event.artist.picture }}
                                artistName={
                                    item.event.artist && item.event.artist.name
                                }
                                venue={
                                    item.event.venue && item.event.venue.name
                                }
                                event={item.event && item.event.event}
                                utc={item.utc}
                                key={item._id}
                                closeCard={() =>
                                    closeCard(item.event.artist.name)
                                }
                                openEvent={() =>
                                    navigation.navigate('Event', item)
                                }
                            />
                        ))}
                </View>
            )}
            {!mapView && (
                <FlatList
                    ListHeaderComponent={header}
                    ItemSeparatorComponent={separator}
                    ListFooterComponentStyle={footer}
                    style={flatlistOp}
                    data={eventsReduced.events}
                    keyExtractor={(element, index) =>
                        index + element._id.toString()
                    }
                    renderItem={({ item }, index) => (
                        <EventCard
                            key={index + item.event._id.toString()}
                            event={item.event && item.event.event}
                            id={item.event && item.event._id}
                            artist={item.event.artist && item.event.artist.name}
                            artistPicture={
                                item.event && { uri: item.event.artist.picture }
                            }
                            type={item.event && item.event.type}
                            venue={item.event.venue && item.event.venue.name}
                            location={
                                item.event.venue && item.event.venue.location
                            }
                            utc={item.utc}
                            address={
                                item.event.venue && item.event.venue.address
                            }
                            description={item.event && item.event.description}
                            price={item.event && item.event.price}
                            image={{
                                uri: item.event.imageUrl,
                            }}
                            reviews={item.event && item.event.reviews}
                            youtubeLink={item.event && item.event.youtubeLink}
                            soundCloudLink={
                                item.event && item.event.soundCloudLink
                            }
                            shareEvent={() =>
                                shareEvent(
                                    item.event.event,
                                    item.event.artist.name,
                                    item.event.venue.name,
                                    item.utc,
                                )
                            }
                            saveEvent={() => handleSaveEvent(item)}
                            pinEvent={() => handlePinView(item)}
                            openEvent={() => navigation.navigate('Event', item)}
                            renderRightActions={() => <EventCardAction />}
                        />
                    )}
                />
            )}
            {mapView && (
                <MapView style={styles.mapView} data={dataEventsReceived} />
            )}
            {messageWindow && (
                <Message type={messageType} content={messageContent} />
            )}
            {pinView && (
                <View style={styles.pinWindow}>
                    <TouchableWithoutFeedback onPress={closePinWindow}>
                        {/* <Text style={styles.closePinView}>X</Text> */}
                        <View style={styles.closePinView}>
                            <Icon
                                icon="icon-x"
                                style={{
                                    fontSize: 24,
                                    color: colors.white,
                                    bottom: 0,
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <FlatList
                        horizontal={true}
                        ListHeaderComponent={headerPin}
                        style={styles.flatlistPinWindow}
                        ItemSeparatorComponent={separatorPin}
                        data={pinList}
                        keyExtractor={(event, index) =>
                            index + event._id.toString()
                        }
                        renderItem={({ item }) => (
                            <PinCard
                                image={{ uri: item.event.imageUrl }}
                                keyExtractor={(event) =>
                                    event.event._id.toString()
                                }
                                event={item.event.event}
                                artist={item.event.artist.name}
                                openEvent={() =>
                                    navigation.navigate('Event', item)
                                }
                                deletePin={() => handlePinCardDelete(item)}
                            />
                        )}
                    />
                </View>
            )}
        </CustomScreen>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    subFilterMenuContainer: {
        width: '100%',
        height: 56,
    },
    artistFollowedFrame: {
        height: 'auto',
        position: 'absolute',
        top: 64,
        left: 12,
        right: 12,
        zIndex: 7,
        elevation: 7,
        display: 'flex',
        flexDirection: 'column',
    },

    mapView: {
        position: 'absolute',
        top: 0,
        zIndex: 0,
    },
    pinView: {},
    pinWindow: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        bottom: 0,
        zIndex: 5,
        elevation: 5,
        backgroundColor: colors.black,
        flexDirection: 'row',

        alignItems: 'center',
        zIndex: 6,
        elevation: 6,

        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    flatlistPinWindow: {
        height: 112,
    },
    closePinView: {
        width: 24,
        marginLeft: 8,
        marginRight: 16,
    },
    activityFrame: {
        width: '100%',
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatlist: {
        zIndex: 2,
        elevation: 1,
        top: 0,
        opacity: 1,
        backgroundColor: colors.black,
    },
    flatlistOpacityNull: {
        opacity: 0,
    },
    buttonMapView: {
        width: '100%',
    },
    headerEvents: {
        width: '100%',
        height: 0,
    },
    footerEvents: {
        width: '100%',
        marginLeft: 240,
    },
    separatorEvents: {
        width: '100%',
        height: 16,
    },
    headerPin: {
        width: 0,
        height: '100%',
    },
    separatorPin: {
        width: 10,
        height: '100%',
    },
});
