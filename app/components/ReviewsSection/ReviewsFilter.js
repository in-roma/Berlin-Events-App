import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function ReviewsFilter({ userReviews, communityReviews, friendsReviews }) {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={userReviews}>
				<View style={styles.community}>
					<Text style={[styles.filterText, styles.selected]}>
						Community
					</Text>
				</View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={friendsReviews}>
				<View style={styles.community}>
					<Text style={styles.filterText}>Published</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 'auto',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	community: {
		width: 'auto',
		height: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
	},
	filterText: {
		fontSize: 16,
		color: colors.medium,
		fontWeight: '300',
	},
	selected: {
		color: colors.white,
		fontWeight: '500',
	},
});

export default ReviewsFilter;
