import React from 'react';
import { View, StyleSheet } from 'react-native';

import EventPageActionButton from './EventPageActionButton';
import colors from '../../UIsettings/colors';

function EventPageActions(action) {
	return (
		<View style={styles.container}>
			<EventPageActionButton label="SAVE TO AGENDA" action={action} />
			<EventPageActionButton label="SHARE" action={action} />
			<EventPageActionButton label="OPEN ON MAP" action={action} />
			<EventPageActionButton label="VENUE's WEBSITE" action={action} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 32,
		backgroundColor: colors.light,
	},
});

export default EventPageActions;
