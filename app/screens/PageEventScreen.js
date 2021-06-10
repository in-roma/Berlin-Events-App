import React, { useState } from 'react';
import {
	Button,
	View,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'react-moment';

// Components
import EventPageActions from '../components/EventPage/EventPageActions';
import TextInputEvent from '../components/EventPage/TextInputEvent';
import DateInputEvent from '../components/EventPage/DateInputEvent';
import Toptabbar from '../components/tabbars/Toptabbar';
import CustomScreen from '../UIsettings/CustomScreen';
import ButtonMapView from '../components/MapView/ButtonMapView';
import MapViewPage from '../components/MapView/MapViewPage';
import EventPicturesSlideCard from '../components/EventSection/EventPicturesSlideCard';
import EventReviewsSlideCard from '../components/EventSection/EventReviewsSlideCard';
import EventYoutubeSlideCard from '../components/EventSection/EventYoutubeSlideCard';
import EventSoundcloudSlideCard from '../components/EventSection/EventSoundcloudSlideCard';

// Utilities
import colors from '../UIsettings/colors';
import Icon from '../UIsettings/Icon';

function PageEventScreen({ route, navigation, style, onPress }) {
	const [mapView, setMapView] = useState(false);
	const [eventContentOp, setEventContentOp] = useState(styles.eventContent);
	// const handleMapView = () => {
	// 	if (!mapView) {
	// 		setEventContentOp(styles.eventContentOpacityNull);
	// 		setMapView(true);
	// 	}
	// 	if (mapView) {
	// 		setEventContentOp(styles.eventContentOp);
	// 		setMapView(false);
	// 	}
	// };

	const { event, utc } = route.params;
	const windowWidth = useWindowDimensions().width;
	return (
		<CustomScreen>
			<View style={[styles.container, { width: windowWidth }]}>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<View style={styles.btnView}>
						<Icon
							icon="icon-x"
							style={{
								fontSize: 28,
								color: colors.darker,
								bottom: 0,
							}}
						/>
					</View>
				</TouchableWithoutFeedback>
				<ScrollView style={styles.eventContent}>
					<View style={styles.imageFrame}>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							// ListHeaderComponent={header}
							style={styles.flatlistPinWindow}
							// ItemSeparatorComponent={separator}
							data={event}
							keyExtractor={(item, index) =>
								index + item.toString()
							}
						>
							<EventPicturesSlideCard
								image={
									event && {
										uri: event.imageUrl,
									}
								}
							/>
							{event.youtubeLink && (
								<EventYoutubeSlideCard
									video={event.youtubeLink}
								/>
							)}
							{event.soundCloudLink && (
								<EventSoundcloudSlideCard
									sound={event.soundCloudLink}
								/>
							)}
							{event.reviews &&
								event.reviews.map((item, index) => (
									<EventReviewsSlideCard
										image={{
											uri: event.imageUrl,
										}}
										review={item && item}
										key={index}
									/>
								))}
						</ScrollView>
					</View>
					<View style={styles.eventInfo}>
						<Text style={styles.eventTitle}>{event.event}</Text>
						<Text style={styles.artistTitle}>
							by {event.artist.name}
						</Text>
						<View style={styles.timeFrame}>
							<Moment
								format="DD.MM.YY"
								style={styles.tagTime}
								element={Text}
							>
								{utc}
							</Moment>
							<Text style={styles.time}> at </Text>

							<Moment
								format="HH.mm"
								style={styles.tagTime}
								element={Text}
							>
								{utc}
							</Moment>
						</View>
						{/* <Text style={styles.venueTitle}>
							
							{event.venue.name}
						</Text> */}
						<Text style={styles.priceTitle}>
							Admission: {event.price}
						</Text>
						<Text style={styles.priceTitle}>
							Venue: {event.venue.name}
						</Text>
						<Text style={styles.priceTitle}>
							Adress: {event.venue.address}
						</Text>

						{/* <Text style={styles.section}>Details</Text>
						<Text style={styles.time}>{event.venue.name}</Text> */}
						<Text style={styles.section}>Presentation</Text>
						<Text style={styles.descriptionTitle}>
							{event.description}
						</Text>
						<Text style={styles.section}>
							About {event.artist.name}
						</Text>
						<View style={styles.artistSection}>
							<Text style={styles.descriptionArtist}>
								{event.artist.description}
							</Text>
							<FastImage
								style={styles.imageArtist}
								source={{
									uri: event.artist.picture,
								}}
								resizeMode={FastImage.resizeMode.cover}
							/>
							{/* <Text style={styles.websiteArtist}>
								Website: {event.artist.website}
							</Text> */}
						</View>
						<Text style={styles.section}>Venue</Text>
						<Text style={styles.descriptionArtist}>
							{event.venue.description}
						</Text>
						<Text style={styles.venue}>{event.venue.name}</Text>
						<Text style={styles.address}>
							{event.venue.address}
						</Text>
						<View style={[styles.mapframe, { width: 'auto' }]}>
							<MapViewPage
								location={event.venue && event.venue.location}
								id={event && event._id}
								event={event && event.event}
								artist={event.artist && event.artist.name}
								venue={event.venue && event.venue.name}
								time={utc}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		</CustomScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.white,
	},
	imageFrame: {
		width: '100%',
		height: 340,
		backgroundColor: colors.black,
	},
	eventContent: {
		zIndex: 2,
		elevation: 1,
		top: 0,
		opacity: 1,
		backgroundColor: colors.white,
	},
	btnView: {
		width: 60,
		height: 48,
		alignItems: 'flex-end',
		justifyContent: 'center',
		position: 'absolute',
		top: 6,
		right: 8,
		zIndex: 7,
		elevation: 7,
		alignSelf: 'center',
	},
	eventTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginLeft: 12,
		marginBottom: 4,
	},
	artistTitle: {
		fontSize: 18,
		fontWeight: '400',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginLeft: 12,
		marginBottom: 4,
	},
	timeFrame: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: 12,
		marginTop: 24,
	},
	time: {
		fontSize: 14,
	},
	priceTitle: {
		fontSize: 14,
		marginLeft: 12,
		marginTop: 4,
		textTransform: 'capitalize',

		fontFamily: 'helvetica',
	},
	venueTitle: {
		fontSize: 16,
		marginLeft: 12,
		marginTop: 4,
		textTransform: 'capitalize',
		fontWeight: '500',
		fontFamily: 'Unica 77 Trial TT',
	},
	descriptionTitle: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginTop: 0,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 4,
		textAlign: 'justify',
	},
	section: {
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '600',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginTop: 24,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 12,
		textTransform: 'capitalize',
	},
	imageArtist: {
		height: 280,
		marginTop: 12,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 12,
	},
	descriptionArtist: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 4,
		textAlign: 'justify',
	},
	websiteArtist: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginLeft: 12,
		marginBottom: 4,
	},
	venue: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginTop: 24,
		marginLeft: 12,
		marginBottom: 4,
		textTransform: 'capitalize',
	},
	address: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.black,
		fontFamily: 'Unica 77 Trial TT',
		marginTop: 4,
		marginLeft: 12,
		marginBottom: 16,
		textTransform: 'capitalize',
	},
	mapframe: {
		height: 480,
		// marginLeft: 12,
		// marginRight: 12,
	},
	eventInfo: {
		marginTop: 18,
		width: '100%',
		height: '100%',
	},
});

export default PageEventScreen;
