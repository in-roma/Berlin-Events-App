import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useWindowDimensions } from 'react-native';
import ButtonFollow from './ButtonFollow';
import colors from '../../UIsettings/colors';

function ArtistCard({ name, type, image, onPress, btnText }) {
	const [followBtn, setFollBtn] = useState('Follow');
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.container, { width: windowWidth }]}>
			<View style={styles.photoNameType}>
				<View style={styles.round}>
					<FastImage
						style={styles.image}
						source={image}
						resizeMode={FastImage.resizeMode.cover}
					/>
				</View>
				<View style={styles.nameTypeFrame}>
					<Text style={styles.nameText}>{name} </Text>
					<Text style={styles.typeText}>{type} </Text>
				</View>
			</View>

			<ButtonFollow
				style={[styles.btnFollow]}
				text={btnText}
				color="white"
				onPress={onPress}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		// left: 12,
		// marginRight: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	photoNameType: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	round: {
		width: 60,
		height: 60,
		borderRadius: 100,
		// backgroundColor: colors.white,
		// marginLeft: 16,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 100,
		marginLeft: 16,
	},
	nameTypeFrame: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	nameText: {
		fontSize: 18,
		color: colors.white,
		marginLeft: 32,
		fontFamily: 'Unica 77 Trial TT',
	},
	typeText: {
		fontSize: 14,
		color: colors.dark,
		marginLeft: 32,
		paddingTop: 4,
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default ArtistCard;
