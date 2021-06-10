import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../UIsettings/colors';

function dateLine({ titelDateLine }) {
	return (
		<View style={styles.container}>
			<Text style={styles.dateText}>{titelDateLine}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 48,
		backgroundColor: colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 4,
	},
	dateText: {
		fontSize: 32,
		color: colors.black,
		fontWeight: '500',
	},
});

export default dateLine;
