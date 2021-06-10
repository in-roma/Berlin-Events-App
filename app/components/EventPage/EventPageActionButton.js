import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function EventPageActionButton({ action, label }) {
	return (
		<TouchableWithoutFeedback onPress={action}>
			<View style={styles.container}>
				<Text style={styles.text}>{label}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 144,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black,
		margin: 8,
		borderRadius: 2,
	},
	text: {
		fontSize: 10,
		fontWeight: '500',
		color: colors.white,
	},
});
export default EventPageActionButton;
