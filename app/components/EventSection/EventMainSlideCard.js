import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Moment from 'react-moment';
import FastImage from 'react-native-fast-image';
import { useWindowDimensions } from 'react-native';

import colors from '../../UIsettings/colors';

function EventMainSlideCard({ event, image, artist, type, utc, venue }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.imageFrame, { width: windowWidth }]}>
			<View style={styles.tag}>
				<Text style={styles.tagText}>{type}</Text>
				<Text style={styles.tagVenue}>{venue}</Text>
				<View style={styles.tagTimeWindow}>
					<Text style={styles.tagTimeAt}>At</Text>
					<Moment
						format="HH.mm"
						style={styles.tagTime}
						element={Text}
					>
						{utc}
					</Moment>
				</View>
			</View>
			<FastImage
				style={styles.image}
				source={image}
				resizeMode={FastImage.resizeMode.cover}
			/>

			<View style={styles.titleFrame}>
				<View style={styles.backgroundEventArtist}></View>
				<Text numberOfLines={1} style={styles.textEvent}>
					{event}
				</Text>
				<Text numberOfLines={1} style={styles.textArtist}>
					by {artist}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	imageFrame: {
		position: 'relative',
		height: 340,
		backgroundColor: colors.black,
		flexDirection: 'row',
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 340,
		width: '100%',
		backgroundColor: colors.black,
		opacity: 0.8,
	},
	tag: {
		width: 220,
		height: 22,
		position: 'relative',
		top: 18,
		left: 12,
		zIndex: 3,
		// backgroundColor: colors.black,
		opacity: 0.9,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	tagText: {
		color: colors.white,
		fontSize: 14,
		fontWeight: '600',
		fontFamily: 'helvetica',
		textTransform: 'uppercase',
	},

	tagVenue: {
		color: colors.white,
		fontSize: 16,
		fontWeight: '600',
		marginTop: 0,
		fontFamily: 'helvetica',
		textTransform: 'capitalize',
	},
	tagTimeWindow: {
		width: 64,
		height: 22,
		backgroundColor: colors.black,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 6,
	},
	tagTimeAt: {
		color: colors.white,
		fontSize: 13,
		fontWeight: '600',
		marginRight: 2,
		fontFamily: 'helvetica',
	},
	tagTime: {
		color: colors.white,
		fontSize: 13,
		fontWeight: '600',
		fontFamily: 'helvetica',
	},
	titleFrame: {
		height: 64,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,

		// opacity: 0.7,
		// backgroundColor: colors.white,
	},
	backgroundEventArtist: {
		position: 'relative',
		bottom: 0,
		left: 0,
		height: 64,
		opacity: 0.7,
		backgroundColor: colors.black,
	},
	textEvent: {
		position: 'absolute',
		top: 0,
		left: 0,
		fontSize: 16,
		color: colors.white,
		marginTop: 8,
		marginLeft: 12,
		fontWeight: '600',
		// justifyContent: 'start',
		fontFamily: 'helvetica',
	},
	textArtist: {
		position: 'absolute',
		top: 32,
		left: 0,
		fontSize: 14,
		color: colors.white,
		marginLeft: 12,
		marginTop: 4,
		fontFamily: 'helvetica',
	},
});

export default EventMainSlideCard;
