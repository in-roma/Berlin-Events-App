import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function ButtonFollow({ onPress, text, color }) {
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
		marginRight: 12,
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
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default ButtonFollow;
