import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../UIsettings/colors';
import Icon from '../../UIsettings/Icon';

function PinCard({ event, artist, openEvent, deletePin, image }) {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={openEvent}>
				<View style={styles.picture}>
					<FastImage
						style={styles.image}
						source={image}
						resizeMode={FastImage.resizeMode.cover}
					/>
					<Text style={styles.pinText}>{artist}</Text>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={deletePin}>
				<View style={styles.btnClose}>
					<Icon
						icon="icon-x"
						style={{
							fontSize: 20,
							color: colors.white,
							bottom: 0,
						}}
					/>
					{/* <Text style={styles.btnTextClose}>X</Text> */}
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 140,
		height: 'auto',
		backgroundColor: colors.black,
		flexDirection: 'column',
		marginTop: 12,
		marginBottom: 12,
	},
	picture: {
		width: '100%',
		height: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundColor: colors.black,
		opacity: 0.4,
	},
	pinText: {
		position: 'absolute',
		bottom: 8,
		left: 4,
		fontSize: 13,
		paddingTop: 8,
		// paddingBottom: 9,
		color: colors.white,
		fontWeight: '500',
	},
	btnClose: {
		width: 16,
		height: 16,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 99,
		right: 8,
		top: 4,

		// backgroundColor: colors.dark,
	},
	btnTextClose: {
		color: colors.white,
	},
});

export default PinCard;
