import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../UIsettings/colors';

function TextInputEvent({ label, value }) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.input}>{value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 'auto',
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
	label: {
		width: 90,
		height: 'auto',
		fontSize: 13,
		fontWeight: '600',
		paddingTop: 8,
		paddingBottom: 16,
		paddingLeft: 16,
	},
	input: {
		width: '70%',
		height: '100%',
		fontSize: 12,
		paddingTop: 8,
		paddingRight: 16,
		paddingLeft: 16,
	},
});

export default TextInputEvent;
