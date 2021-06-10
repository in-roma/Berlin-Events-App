import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import PinCard from './PinCard';
import colors from '../../UIsettings/colors';

function PinView({ artist, data, openEvent, deletePin }) {
	const header = () => {
		return (
			<View
				style={{
					width: 0,
					height: '100%',
				}}
			/>
		);
	};

	const separator = () => {
		return (
			<View
				style={{
					width: 0,
					height: '100%',
				}}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				horizontal={true}
				ListHeaderComponent={header}
				ItemSeparatorComponent={separator}
				style={styles.flatListPin}
				data={data}
				keyExtractor={(event) => event.id.toString() + 'pin'}
				renderItem={({ item }) => (
					<PinCard
						artist={item.artist}
						pin={item}
						openEvent={openEvent}
						deletePin={deletePin}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default PinView;
