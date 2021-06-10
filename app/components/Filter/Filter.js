import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableWithoutFeedback,
	Button,
} from 'react-native';
import colors from '../../UIsettings/colors';

function Filter({ data, allBtn, nowBtn, filterType, filterWhen }) {
	const separator = () => {
		return (
			<View
				style={{
					width: 30,
					height: '100%',
				}}
			/>
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.mainFilter}>
				{/* <Text style={styles.logo}>52.13/ B</Text> */}
				<TouchableWithoutFeedback onPress={allBtn}>
					<Text style={styles.typeBtn}>{filterType}</Text>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={nowBtn}>
					<Text style={styles.whenBtn}>{filterWhen}</Text>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 'auto',
		borderBottomWidth: 1,
		borderBottomColor: colors.line,
	},

	mainFilter: {
		width: '100%',
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		fontSize: 16,
		color: 'white',
		fontWeight: '700',
		left: 12,
		bottom: 2,
		fontFamily: 'helvetica',
		marginRight: 16,
		paddingLeft: 4,
		paddingRight: 4,
		backgroundColor: colors.black,
	},
	typeBtn: {
		// position: 'absolute',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		left: 12,
		// textTransform: 'uppercase',
		fontFamily: 'Unica 77 Trial TT',
	},
	whenBtn: {
		position: 'absolute',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		left: 152,
		// textTransform: 'uppercase',
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default Filter;
