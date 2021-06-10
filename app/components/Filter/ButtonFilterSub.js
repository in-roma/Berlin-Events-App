import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../../UIsettings/colors';

function ButtonFilterSub({ onPress, text, name }) {
	return (
		<TouchableWithoutFeedback onPress={onPress} name={name}>
			<View style={styles.btnView} name={name} pointerEvents="box-only">
				<Text name={name} style={styles.btnText}>
					{text}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	btnView: {
		height: 56,
		// marginRight: 16,
		// marginLeftt: 16,
		marginRight: 16,
		marginLeft: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		color: 'white',
		fontSize: 14,
		fontWeight: '400',
		textAlign: 'center',
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default ButtonFilterSub;
