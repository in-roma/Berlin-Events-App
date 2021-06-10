import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Moment from 'react-moment';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FastImage from 'react-native-fast-image';

import colors from '../../UIsettings/colors';

function AgendaCard({
	event,
	artist,
	venue,
	utc,
	image,
	deleteEvent,
	openEvent,
	renderRightActions,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.pictureFrame}>
					<FastImage
						style={styles.image}
						source={image}
						resizeMode={FastImage.resizeMode.cover}
					/>
				</View>
				<View style={styles.textFrame}>
					<View style={styles.firstLine}>
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
						<Moment
							format="DD.MM.YY"
							style={styles.tagDate}
							element={Text}
						>
							{utc}
						</Moment>
					</View>
					<Text style={styles.venueTitle}>{venue}</Text>
					<View style={styles.containerEvent}>
						<Text style={styles.eventTitle}>{event}</Text>
					</View>

					<Text style={styles.artistTitle}>By {artist}</Text>
				</View>
			</View>
			<View style={styles.btnZone}>
				<TouchableWithoutFeedback onPress={deleteEvent}>
					<View style={styles.btnMore}>
						<Text style={styles.btnText}>Delete</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={openEvent}>
					<View style={styles.btnMore}>
						<Text style={styles.btnText}>Open</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 186,
		flexDirection: 'column',
		marginTop: 2,
		marginBottom: 2,
	},

	card: {
		flexDirection: 'row',
	},
	pictureFrame: {
		width: 136,
		height: 136,
	},
	image: {
		width: 136,
		height: 136,
		backgroundColor: colors.black,
		opacity: 0.6,
	},
	textFrame: {
		width: '100%',
		height: 136,
		backgroundColor: colors.white,

		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	firstLine: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 8,
	},
	tagTimeWindow: {
		width: 64,
		height: 22,
		backgroundColor: colors.black,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		marginLeft: 8,
	},
	tagTimeAt: {
		color: colors.white,
		fontSize: 12,
		fontWeight: '600',
		marginRight: 2,
		fontFamily: 'helvetica',
	},
	tagTime: {
		color: colors.white,
		fontSize: 12,
		fontWeight: '600',
		fontFamily: 'helvetica',
	},
	tagDate: {
		color: colors.black,
		fontSize: 12,
		fontWeight: '400',
		marginLeft: 8,
		fontFamily: 'helvetica',
	},
	venueTitle: {
		fontSize: 14,
		fontWeight: '500',
		marginTop: 8,
		marginLeft: 8,
		fontFamily: 'helvetica',
		textTransform: 'capitalize',
	},
	containerEvent: {
		minWidth: 180,
		maxWidth: 230,
		height: 40,
		marginTop: 8,
		marginLeft: 8,
		marginBottom: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
	},
	eventTitle: {
		fontSize: 16,
		fontWeight: '400',
		marginBottom: 0,
		fontFamily: 'helvetica',
		textTransform: 'capitalize',
	},
	artistTitle: {
		fontSize: 14,
		fontWeight: '400',
		marginTop: 0,
		marginLeft: 8,
		marginBottom: 16,
		fontFamily: 'helvetica',
	},
	btnZone: {
		flexDirection: 'row',
		marginRight: 0,
		justifyContent: 'flex-end',
	},
	btnMore: {
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

export default AgendaCard;
