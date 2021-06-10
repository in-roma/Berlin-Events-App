import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'react-moment';
import { useWindowDimensions } from 'react-native';

import colors from '../../UIsettings/colors';
import Icon from '../../UIsettings/Icon';
import ButtonMore from './ButtonMore';

function ArtistCardEventSection({
	artistImage,
	artistName,
	venue,
	event,
	utc,
	closeCard,
	openEvent,
}) {
	const windowWidth = useWindowDimensions().width;
	return (
		<TouchableWithoutFeedback onPress={openEvent}>
			<View style={[styles.container, { width: windowWidth }]}>
				<View style={styles.imageFrame}>
					<FastImage
						style={styles.image}
						source={artistImage}
						resizeMode={FastImage.resizeMode.cover}
					/>
				</View>
				<View style={styles.textFrame}>
					<View style={styles.artistLine}>
						<Text style={styles.artistText}>{artistName}</Text>
					</View>

					<View style={styles.eventLine}>
						<Text style={styles.eventText}>{event}</Text>
					</View>
					<View style={styles.timeLine}>
						<Text style={styles.timeText}>Today at </Text>
						<Moment
							format="HH.mm"
							style={styles.timeText}
							element={Text}
						>
							{utc}
						</Moment>
					</View>
					<View style={styles.venueLine}>
						<Text style={styles.venueText}>At {venue}</Text>
					</View>
				</View>

				<View style={styles.btnFrame}>
					{/* <Text style={styles.btnMore}>More</Text>
				<Text style={styles.btnMore}>Unfollow</Text> */}
				</View>
				<TouchableWithoutFeedback onPress={closeCard}>
					<View style={styles.btnClose}>
						<Icon
							icon="icon-x"
							style={{
								fontSize: 18,
								color: colors.darker,
								bottom: 0,
							}}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 'auto',

		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: colors.light,
		zIndex: 7,
		elevation: 7,
		marginBottom: 8,
		borderRadius: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 3,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		paddingTop: 12,

		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 12,
	},
	imageFrame: {
		width: 112,
		height: 'auto',
		borderRadius: 100,
		backgroundColor: colors.black,
	},
	image: {
		width: 112,
		height: 112,
		opacity: 0.9,
		borderRadius: 100,
	},
	textFrame: {
		width: 'auto',
		height: 112,
		flexDirection: 'column',
		justifyContent: 'center',

		marginLeft: 16,
		marginRight: 8,
	},
	artistText: {
		fontSize: 16,
		color: colors.black,
		fontWeight: '600',
	},
	eventLine: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginBottom: 12,
	},
	eventText: {
		fontSize: 14,
		color: colors.black,
		fontWeight: '400',
	},
	venueText: {
		fontSize: 14,
		color: colors.black,
		fontWeight: '400',
	},
	artistLine: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginBottom: 8,
	},

	timeLine: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginBottom: 2,
	},
	timeText: {
		fontSize: 12,
		color: colors.black,
		fontWeight: '400',
	},
	venueLine: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	venueText: {
		fontSize: 12,
		color: colors.black,
		fontWeight: '400',
	},
	infoLine: {
		position: 'relative',
		// right: 8,
		bottom: 12,
		alignSelf: 'center',
	},
	btnFrame: {
		height: 'auto',
		position: 'relative',
		top: 38,
		right: 16,
		flexDirection: 'column',
	},
	btnMore: {
		fontSize: 11,
		color: colors.black,
		backgroundColor: colors.light,
		fontWeight: '600',
		width: 64,
		marginTop: 4,
		marginBottom: 4,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 4,
		paddingRight: 4,
		textAlign: 'center',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: colors.black,
	},
	btnClose: {
		width: 32,
		height: 40,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 7,
		elevation: 7,
		top: 2,
		right: 0,
		// backgroundColor: colors.dark,
	},
});

export default ArtistCardEventSection;
