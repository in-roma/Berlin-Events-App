import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useWindowDimensions } from 'react-native';
import colors from '../../UIsettings/colors';

function EventSoundcloudSlideCard({ sound }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<>
			<View style={[styles.frame, { width: windowWidth }]}>
				<View style={styles.black} />
				<WebView source={{ uri: sound }} style={styles.player} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	frame: {
		position: 'relative',
		height: 320,
		backgroundColor: colors.black,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	player: {
		bottom: 55,
		zIndex: 2,
		elevation: 2,
	},

	black: {
		width: '100%',
		height: 51,
		position: 'absolute',
		top: 0,
		backgroundColor: colors.black,
		zIndex: 3,
		elevation: 3,
	},
});

export default EventSoundcloudSlideCard;
