import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function AgendaCardActionButton({ action, label }) {
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
		width: 96,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black,
		marginTop: 8,
		marginBottom: 8,
		marginRight: 32,
		borderRadius: 2,
	},
	text: {
		fontSize: 10,
		fontWeight: '500',
		color: colors.white,
	},
});

export default AgendaCardActionButton;
