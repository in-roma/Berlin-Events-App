import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useWindowDimensions } from 'react-native';
import colors from '../../UIsettings/colors';

function EventYoutubeSlideCard({ video }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.frame, { width: windowWidth }]}>
			<YoutubePlayer
				width={windowWidth}
				height={276}
				// play={playing}
				videoId={video}
				// onChangeState={onStateChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	frame: {
		position: 'relative',
		height: 340,
		backgroundColor: colors.black,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default EventYoutubeSlideCard;
