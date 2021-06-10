import React, { createRef } from 'react';
import { View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import colors from '../../UIsettings/colors';
import ButtonFilterSub from './ButtonFilterSub';
import filterWhen from './filterWhen';

function SubMenuType({ filterType }) {
	const typeRef = createRef();

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
		<View style={styles.menuBarType} pointerEvents="box-none" name="hello">
			<FlatList
				contentContainerStyle={styles.scrollView}
				horizontal={true}
				data={filterWhen}
				keyExtractor={(element) => element.when.toString()}
				renderItem={({ item }, index) => (
					<ButtonFilterSub
						onPress={() => filterType(item.when)}
						type={item.when}
						name={item.when}
						text={item.when}
						index={index}
					/>
				)}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	menuBarType: {
		height: 56,
		marginLeft: 0,
		opacity: 0.8,
	},

	scrollView: {
		height: 56,
	},
});

export default SubMenuType;
