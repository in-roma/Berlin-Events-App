import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function ButtonMapView({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.btnView}>
				<Text style={styles.btnText}>MAP VIEW</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	btnView: {
		width: 120,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		zIndex: 99,
		elevation: 99,
		alignSelf: 'center',
	},
	btnText: {
		fontSize: 12,
		color: colors.black,
		fontWeight: '500',
		backgroundColor: colors.white,
		paddingTop: 6,
		paddingBottom: 6,
		paddingRight: 16,
		paddingLeft: 16,
		opacity: 0.8,
	},
});

export default ButtonMapView;
