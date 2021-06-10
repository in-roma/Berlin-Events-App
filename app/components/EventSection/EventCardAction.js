import React from 'react';
import { View, StyleSheet } from 'react-native';

import EventCardActionButton from './EventCardActionButton';
import colors from '../../UIsettings/colors';

function EventCardAction(action) {
	return (
		<View style={styles.container}>
			<EventCardActionButton label="SAVE TO AGENDA" action={action} />
			<EventCardActionButton label="SHARE" action={action} />
			<EventCardActionButton label="OPEN ON MAP" action={action} />
			<EventCardActionButton label="VENUE's WEBSITE" action={action} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
	},
});

export default EventCardAction;
