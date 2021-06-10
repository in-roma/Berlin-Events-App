import React from 'react';
import { View, StyleSheet } from 'react-native';

import AgendaCardActionButton from './AgendaCardActionButton';
import colors from '../../UIsettings/colors';

function AgendaCardAction(action) {
	return (
		<View style={styles.container}>
			<AgendaCardActionButton label="SHARE" action={action} />
			<AgendaCardActionButton label="OPEN ON MAP" action={action} />
			<AgendaCardActionButton label="DELETE" action={action} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 160,
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginTop: 4,
		marginBottom: 4,
		backgroundColor: colors.light,
	},
});

export default AgendaCardAction;
