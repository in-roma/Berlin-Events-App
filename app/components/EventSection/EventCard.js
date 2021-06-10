import React from 'react';
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import EventMainSlideCard from './EventMainSlideCard';
import EventPicturesSlideCard from './EventPicturesSlideCard';
import EventReviewsSlideCard from './EventReviewsSlideCard';
import EventYoutubeSlideCard from './EventYoutubeSlideCard';
import EventSoundcloudSlideCard from './EventSoundcloudSlideCard';
import { useWindowDimensions } from 'react-native';
import colors from '../../UIsettings/colors';

function EventCard({
	event,
	id,
	saveEvent,
	pinEvent,
	openEvent,
	image,
	artist,
	type,
	utc,
	venue,
	shareEvent,
	artistPicture,
	reviews,
	youtubeLink,
	soundCloudLink,
}) {
	// Pin Layout
	// const header = () => {
	// 	return <View style={styles.header} />;
	// };

	// const separator = () => {
	// 	return <View style={styles.separator} />;
	// };
	const windowWidth = useWindowDimensions().width;

	return (
		<View style={[styles.container, { width: windowWidth }]}>
			<ScrollView
				horizontal={true}
				pagingEnabled={true}
				// ListHeaderComponent={header}
				style={styles.flatlistPinWindow}
				// ItemSeparatorComponent={separator}
				// data={event}
				// keyExtractor={(item) => item.toString()}
			>
				<EventMainSlideCard
					event={event}
					image={image}
					artist={artist}
					type={type}
					utc={utc}
					venue={venue}
					key={id.toString()}
				/>
				{youtubeLink && <EventYoutubeSlideCard video={youtubeLink} />}
				{soundCloudLink && (
					<EventSoundcloudSlideCard sound={soundCloudLink} />
				)}
				{reviews &&
					reviews.map((item, index) => (
						<EventReviewsSlideCard
							image={image}
							review={item}
							key={index}
						/>
					))}
				{artistPicture && (
					<EventPicturesSlideCard image={artistPicture} />
				)}
			</ScrollView>

			<View style={styles.textFrame}>
				<View style={styles.btnZone}>
					<TouchableWithoutFeedback onPress={shareEvent}>
						<View style={styles.btnCard}>
							<Text style={styles.btnText}>Share</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={saveEvent}>
						<View style={styles.btnCard}>
							<Text style={styles.btnText}>Save</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={pinEvent}>
						<View style={styles.btnCard}>
							<Text style={styles.btnText}>Pin</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={openEvent}>
						<View style={styles.btnCard}>
							<Text style={styles.btnText}>Open</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderBottomWidth: 1,
		borderBottomColor: colors.line,
	},
	btnZone: {
		flexDirection: 'row',
		marginRight: 2,
	},
	textFrame: {
		height: 80,
		width: '100%',
		position: 'relative',
		bottom: 20,

		backgroundColor: colors.black,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	btnCard: {
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 4,

		// backgroundColor: colors.light,
	},
	btnText: {
		fontSize: 10,
		color: colors.dark,
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default EventCard;

// return (
// 	<View style={styles.container}>
// 		<Swipeable renderRightActions={renderRightActions}>
// 			<View style={styles.imageFrame}>
// 				<View style={styles.tag}>
// 					<Text style={styles.tagText}>{type}</Text>
// 					<Text style={styles.tagVenue}>{venue}</Text>
// 					<View style={styles.tagTimeWindow}>
// 						<Text style={styles.tagTimeAt}>At</Text>
// 						<Moment
// 							format="HH.mm"
// 							style={styles.tagTime}
// 							element={Text}
// 						>
// 							{utc}
// 						</Moment>
// 					</View>
// 				</View>
// 				<FastImage
// 					style={styles.image}
// 					source={image}
// 					resizeMode={FastImage.resizeMode.cover}
// 				/>

// 				{/* <Image source={image} style={styles.image} /> */}
// 				<View style={styles.titleFrame}>
// 					<View style={styles.backgroundEventArtist}></View>
// 					<Text numberOfLines={1} style={styles.textEvent}>
// 						{event}
// 					</Text>
// 					<Text numberOfLines={1} style={styles.textArtist}>
// 						by {artist}
// 					</Text>
// 				</View>
// 			</View>
// 		</Swipeable>
// 		<View style={styles.textFrame}>
// 			<View style={styles.btnZone}>
// 				<TouchableWithoutFeedback onPress={shareEvent}>
// 					<View style={styles.btnCard}>
// 						<Text style={styles.btnText}>Share</Text>
// 					</View>
// 				</TouchableWithoutFeedback>
// 				<TouchableWithoutFeedback onPress={saveEvent}>
// 					<View style={styles.btnCard}>
// 						<Text style={styles.btnText}>Save</Text>
// 					</View>
// 				</TouchableWithoutFeedback>
// 				<TouchableWithoutFeedback onPress={pinEvent}>
// 					<View style={styles.btnCard}>
// 						<Text style={styles.btnText}>Pin</Text>
// 					</View>
// 				</TouchableWithoutFeedback>
// 				<TouchableWithoutFeedback onPress={openEvent}>
// 					<View style={styles.btnCard}>
// 						<Text style={styles.btnText}>Open</Text>
// 					</View>
// 				</TouchableWithoutFeedback>
// 			</View>
// 		</View>
// 	</View>
// );
// }

// const styles = StyleSheet.create({
// container: {
// 	height: 400,
// 	width: '100%',
// 	borderBottomWidth: 1,
// 	borderBottomColor: '#0D0C0C',
// },
// imageFrame: {
// 	position: 'relative',
// 	height: 340,
// 	width: '100%',
// 	backgroundColor: colors.black,
// 	flexDirection: 'row',
// },
// image: {
// 	position: 'absolute',
// 	top: 0,
// 	left: 0,
// 	height: 340,
// 	width: '100%',
// 	backgroundColor: colors.black,
// 	opacity: 0.6,
// },
// tag: {
// 	width: 220,
// 	height: 22,
// 	position: 'relative',
// 	top: 18,
// 	left: 10,
// 	zIndex: 3,
// 	// backgroundColor: colors.black,
// 	opacity: 0.8,
// 	alignItems: 'flex-start',
// 	justifyContent: 'flex-start',
// },
// tagText: {
// 	color: colors.white,
// 	fontSize: 14,
// 	fontWeight: '600',
// },

// tagVenue: {
// 	color: colors.white,
// 	fontSize: 16,
// 	fontWeight: '600',
// 	marginTop: 4,
// },
// tagTimeWindow: {
// 	width: 64,
// 	height: 22,
// 	backgroundColor: colors.black,
// 	flexDirection: 'row',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	marginTop: 6,
// },
// tagTimeAt: {
// 	color: colors.white,
// 	fontSize: 13,
// 	fontWeight: '600',
// 	marginRight: 2,
// },
// tagTime: {
// 	color: colors.white,
// 	fontSize: 13,
// 	fontWeight: '600',
// },
// textFrame: {
// 	height: 80,
// 	width: '100%',
// 	backgroundColor: colors.black,
// 	flex: 1,
// 	flexDirection: 'row',
// 	alignItems: 'center',
// 	justifyContent: 'flex-end',
// },
// titleFrame: {
// 	height: 64,
// 	width: '100%',
// 	position: 'absolute',
// 	bottom: 0,
// 	left: 0,

// 	// opacity: 0.7,
// 	// backgroundColor: colors.white,
// },
// backgroundEventArtist: {
// 	position: 'relative',
// 	bottom: 0,
// 	left: 0,
// 	height: 64,
// 	opacity: 0.7,
// 	backgroundColor: colors.white,
// },
// textEvent: {
// 	position: 'absolute',
// 	top: 4,
// 	left: 0,
// 	fontSize: 16,
// 	color: colors.black,
// 	marginTop: 8,
// 	marginLeft: 10,
// 	fontWeight: '600',
// 	// justifyContent: 'start',
// },
// textArtist: {
// 	position: 'absolute',
// 	top: 32,
// 	left: 0,
// 	fontSize: 14,
// 	color: colors.black,
// 	marginLeft: 10,
// 	marginTop: 4,
// },
// btnZone: {
// 	flexDirection: 'row',
// 	marginRight: 0,
// },
// btnCard: {
// 	width: 48,
// 	height: 48,
// 	alignItems: 'center',
// 	justifyContent: 'center',
// 	marginLeft: 4,

// 	// backgroundColor: colors.light,
// },
// btnText: {
// 	fontSize: 10,
// 	color: colors.dark,
// },
// });

// export default EventCard;
