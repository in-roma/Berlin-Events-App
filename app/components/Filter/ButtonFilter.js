import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';
import Icon from '../../UIsettings/Icon';

function ButtonFilter({ onPress, text, color }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.btnView}>
				{text == 'MAP' ? (
					<Icon
						icon="icon-map"
						style={{
							fontSize: 28,
							color: colors.darker,
							bottom: 0,
						}}
					/>
				) : (
					<Icon
						icon="icon-x"
						style={{
							fontSize: 28,
							color: colors.darker,
							bottom: 0,
						}}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	btnView: {
		width: 60,
		height: 48,
		alignItems: 'flex-end',
		justifyContent: 'center',
		position: 'absolute',
		top: 6,
		right: 12,
		zIndex: 99,
		elevation: 99,
		alignSelf: 'center',
		// backgroundColor: colors.white,
	},
});

export default ButtonFilter;
