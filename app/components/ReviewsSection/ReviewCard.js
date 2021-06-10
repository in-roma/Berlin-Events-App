import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useWindowDimensions } from 'react-native';

import colors from '../../UIsettings/colors';
import ButtonRatingFilter from './ButtonRatingFilter';

function ReviewCard({ event, artist, type, image, reviews }) {
	const windowWidth = useWindowDimensions().width;
	return (
		<View style={[styles.frame, { width: 'auto' }]}>
			<View style={styles.frameBorders}>
				<View style={[styles.textFrame, { width: '100%' }]}>
					<View style={styles.textArtistEvent}>
						<Text style={styles.eventTitle}>{event}</Text>
						<Text style={styles.eventText}>{artist}</Text>
					</View>
					<Text style={styles.tagType}>{type}</Text>
				</View>
				<FastImage
					style={[styles.image, { width: windowWidth }]}
					source={image}
					resizeMode={FastImage.resizeMode.cover}
				/>

				{reviews &&
					reviews.map((review, index) => (
						<View style={styles.reviewFrame} key={index}>
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
					))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	frame: {
		height: 280,
	},
	frameBorders: {
		width: '100%',
	},

	textFrame: {
		height: 48,
		position: 'absolute',
		top: 16,
		paddingLeft: 12,
		paddingRight: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		zIndex: 3,
		elevation: 3,
		opacity: 1,
	},
	textArtistEvent: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	eventTitle: {
		fontSize: 14,
		fontWeight: '500',
		color: colors.white,
	},
	eventText: {
		marginTop: 4,
		fontSize: 14,
		fontWeight: '300',
		color: colors.white,
	},
	tagType: {
		backgroundColor: colors.black,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		color: colors.white,
		fontSize: 12,
		fontWeight: '500',
		// marginLeft: 12,
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 4,
		paddingBottom: 4,
		borderRadius: 4,
	},

	image: {
		height: 280,
		backgroundColor: colors.black,
		opacity: 1,
	},

	reviewFrame: {
		width: '100%',
		height: 280,
		position: 'absolute',
		top: 0,
		backgroundColor: colors.black,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.8,
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
		height: 280,

		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	reviewTextFrame: {
		width: '100%',
		height: 160,
		paddingTop: 32,
		paddingLeft: 8,
		paddingRight: 8,
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
		textAlign: 'center',
	},
	reviewName: {
		fontSize: 14,
		fontWeight: '400',
		fontStyle: 'normal',
		color: colors.white,
		marginLeft: 16,
		bottom: 32,
	},
});

export default ReviewCard;
