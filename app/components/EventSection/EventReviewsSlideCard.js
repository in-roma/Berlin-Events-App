import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useWindowDimensions } from 'react-native';
import colors from '../../UIsettings/colors';

function EventReviewsSlideCard({ image, review }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.frame, { width: windowWidth }]}>
			<View style={[styles.imageFrame, { width: windowWidth }]}>
				<FastImage
					style={styles.image}
					source={image}
					resizeMode={FastImage.resizeMode.cover}
				/>
			</View>
			<View style={styles.reviewFrame}>
				<View style={styles.review}>
					<View style={styles.rating}>
						{/* <Text style={styles.ratingLabel}>
									Rating:
								</Text> */}
						{/* <Text style={styles.tagRating}>
									{review && review.rating}
								</Text> */}
					</View>
					<View style={styles.reviewTextFrame}>
						<Text style={styles.reviewText}>
							"{review && review.text}"
						</Text>
					</View>
				</View>
				<Text style={styles.reviewName}>
					By {review && review.name}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	frame: {
		height: 340,
		// flexDirection: 'column',
		// justifyContent: 'flex-start',
		// alignItems: 'flex-start',
		marginTop: 12,
		marginBottom: 16,
		marginLeft: 8,
		marginRight: 8,
	},
	imageFrame: {
		position: 'relative',
		height: 340,
		backgroundColor: colors.black,
		flexDirection: 'row',
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 340,
		width: '100%',
		backgroundColor: colors.black,
		opacity: 0.5,
	},
	reviewFrame: {
		width: '100%',
		height: 340,
		position: 'absolute',
		top: 0,
		backgroundColor: colors.black,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.7,
		zIndex: 3,
		elevation: 3,
	},
	rating: {
		height: 0,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	tagRating: {
		fontSize: 12,
		color: colors.black,
		fontWeight: '500',
		borderWidth: 1,
		borderColor: colors.black,
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 4,
		paddingBottom: 4,
		borderRadius: 2,
		marginLeft: 8,
	},
	ratingLabel: {
		fontSize: 12,
		color: colors.black,
		fontWeight: '500',
	},
	textRating: {
		fontSize: 14,
		color: colors.black,
	},
	review: {
		width: '100%',
		height: 140,
		marginTop: 0,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	reviewTextFrame: {
		width: '100%',
		height: 130,
		paddingLeft: 16,
		paddingRight: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	reviewText: {
		width: 'auto',
		fontSize: 18,
		fontWeight: '500',
		fontStyle: 'italic',
		color: colors.white,
		fontFamily: 'Unica 77 Trial TT',
	},
	reviewName: {
		fontSize: 14,
		fontWeight: '500',
		fontStyle: 'normal',
		color: colors.white,
		marginLeft: 16,
		bottom: 16,
		fontFamily: 'Unica 77 Trial TT',
	},
});

export default EventReviewsSlideCard;
