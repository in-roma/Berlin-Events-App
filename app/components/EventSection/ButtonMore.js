import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function ButtonMore({ onPress, text, color }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.btnView}>
				<View style={styles.btnBackground}>
					<Text style={[styles.btnText, color]}>{text}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	btnView: {
		width: 'auto',
		height: 48,
		alignItems: 'flex-end',
		justifyContent: 'center',
		zIndex: 5,
		elevation: 5,
		marginLeft: 100,
		// backgroundColor: colors.white,
	},
	btnBackground: {
		width: 'auto',
		height: 'auto',
		borderRadius: 2,
		backgroundColor: colors.black,
		borderWidth: 1,
		borderColor: colors.dark,
	},
	btnText: {
		fontSize: 12,
		color: colors.dark,
		fontWeight: '500',

		paddingTop: 4,
		paddingBottom: 4,
		paddingRight: 8,
		paddingLeft: 8,
	},
});

export default ButtonMore;
