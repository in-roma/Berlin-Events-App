import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useWindowDimensions } from 'react-native';
import colors from '../../UIsettings/colors';

function EventPicturesSlideCard({ image }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.imageFrame, { width: windowWidth }]}>
			<FastImage
				style={styles.image}
				source={image}
				resizeMode={FastImage.resizeMode.cover}
			/>
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
		opacity: 0.6,
	},
});

export default EventPicturesSlideCard;
