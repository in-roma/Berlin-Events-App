import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';
// import Moment from 'react-moment';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../UIsettings/colors';

function AgendaMiniCard({ event, artist, image }) {
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
					<View style={styles.containerEvent}>
						<Text style={styles.eventTitle}>{event}</Text>
					</View>

					{/* <Text style={styles.artistTitle}>By {artist}</Text> */}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 'auto',
		height: 'auto',
		flexDirection: 'column',
		marginTop: 2,
		marginBottom: 2,
	},

	card: {
		flexDirection: 'column',
		width: 'auto',
		height: 'auto',
	},
	pictureFrame: {
		width: 120,
		height: 80,
		backgroundColor: colors.black,
	},
	image: {
		width: 120,
		height: 80,
		backgroundColor: colors.black,
		opacity: 0.8,
	},
	textFrame: {
		width: 'auto',
		height: 'auto',
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

	containerEvent: {
		width: 'auto',

		height: 'auto',
		marginTop: 4,

		marginBottom: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
	},
	eventTitle: {
		width: 112,
		height: 'auto',
		fontSize: 10,
		fontWeight: '400',
		marginBottom: 4,
	},
	artistTitle: {
		width: 112,
		fontSize: 12,
		fontWeight: '300',
		marginTop: 0,

		marginBottom: 4,
	},
});

export default AgendaMiniCard;
