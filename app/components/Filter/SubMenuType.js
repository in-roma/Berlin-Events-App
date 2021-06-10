import React, { createRef } from 'react';
import { View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import colors from '../../UIsettings/colors';
import ButtonFilterSub from './ButtonFilterSub';
import filterTypeList from './filterTypeList';

function SubMenuType({ filterType }) {
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
				data={filterTypeList}
				keyExtractor={(element) => element.name.toString()}
				renderItem={({ item }, index) => (
					<ButtonFilterSub
						onPress={() => filterType(item.type, item.name)}
						type={item.type}
						name={item.name}
						text={item.name}
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
		// borderTopWidth: 2,
		// borderTopColor: colors.line,
	},

	scrollView: {
		height: 56,
	},
});

export default SubMenuType;
