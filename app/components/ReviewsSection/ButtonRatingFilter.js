import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function ButtonRatingFilter({ onPress, text, color }) {
	const [colorBackground, setColorBackground] = useState(colors.white);
	const [colorBorder, setColorBorder] = useState('grey');
	const [borderWidth, setBorderWidth] = useState(1.2);
	const [colorText, setColorText] = useState(colors.black);

	const activateBtn = () => {
		setColorBackground(colors.black);
		setColorText(colors.white);
	};

	return (
		<TouchableWithoutFeedback onPress={activateBtn}>
			<View style={styles.btnView}>
				<View
					style={[
						styles.btnBackground,
						{ backgroundColor: colorBackground },
						{ borderWidth: borderWidth },
					]}
				>
					<Text style={[styles.btnText, color, { color: colorText }]}>
						{text}
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	btnView: {
		width: 'auto',
		height: 32,
		alignItems: 'flex-end',
		justifyContent: 'center',

		zIndex: 99,
		elevation: 99,
		alignSelf: 'center',
		marginRight: 8,
	},
	btnBackground: {
		width: 'auto',
		height: 'auto',
		borderRadius: 2,
	},
	btnText: {
		fontSize: 12,
		color: 'white',
		fontWeight: '500',

		paddingTop: 4,
		paddingBottom: 4,
		paddingRight: 8,
		paddingLeft: 8,
	},
});

export default ButtonRatingFilter;
