import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../UIsettings/colors';
import AgendaMiniCard from './agendaMiniCard';
import ButtonFilter from '../Filter/ButtonFilter';
import ButtonRatingFilter from './ButtonRatingFilter';
// import eventsApi from '../api/events';

function ReviewNewCard({ closeWindow }) {
	// DB All events
	// const getEventsApi = useApi(eventsApi.getEvents);
	// useEffect(() => {
	// 	getEventsApi.request();
	// }, []);

	// DB past events
	const [agenda, setAgenda] = useState([]);

	loadDataStatus = async () => {
		const agendaDBStored = await AsyncStorage.getItem('eventsAgenda');
		setAgenda(agendaDBStored);
	};

	useEffect(() => {
		loadAgenda();
	}, []);

	loadAgenda = async () => {
		try {
			// await AsyncStorage.removeItem('eventsAgenda');
			const agendaDBStored = await AsyncStorage.getItem('eventsAgenda');
			const agendaStored = JSON.parse(agendaDBStored);
			console.log('this agendastore', agendaDBStored);
			setAgenda(agendaStored);
		} catch (error) {}
	};

	// Input fields states

	const [review, setReview] = useState();
	const [link, setLink] = useState();
	const [name, setName] = useState();

	// Layout

	const header = () => {
		return <View style={styles.headerReviewsEvents} />;
	};
	const separator = () => {
		return <View style={styles.separatorReviews} />;
	};

	return (
		<>
			<View style={styles.frame}>
				<ButtonFilter
					text="Close"
					color={{ color: colors.dark }}
					onPress={closeWindow}
				/>
				<View style={styles.eventFrame}>
					<Text style={styles.titleSelect}>
						Select one of your saved event:
					</Text>
					<FlatList
						data={agenda}
						horizontal={true}
						ListHeaderComponent={header}
						ItemSeparatorComponent={separator}
						style={styles.flatlist}
						keyExtractor={(event, index) =>
							index + event._id.toString()
						}
						renderItem={({ item, index }) => (
							<AgendaMiniCard
								event={item.event && item.event.event}
								artist={item.event && item.event.artist}
								image={{
									uri: item.event && item.event.imageUrl,
								}}
								utc={item.event && item.utc}
							/>
						)}
					/>
				</View>
				<View style={styles.ratingFrame}>
					<Text style={styles.titleSelect}>Rating:</Text>
					<View style={styles.ratingList}>
						<ButtonRatingFilter
							text="No go"
							color={{ color: colors.dark }}
						/>
						<ButtonRatingFilter
							text="Poor"
							color={{ color: colors.dark }}
						/>
						<ButtonRatingFilter
							text="Good"
							color={{ color: colors.dark }}
						/>
						<ButtonRatingFilter
							text="Super"
							color={{ color: colors.dark }}
						/>
						<ButtonRatingFilter
							text="Fanstastisch"
							color={{ color: colors.dark }}
						/>
					</View>
				</View>
				<View style={styles.reviewFrame}>
					<View style={styles.textFrame}>
						<Text style={styles.titleSelect}>Text:</Text>
						<TextInput
							style={styles.reviewText}
							placeholder="Write a review (140 characters max)"
							onChangeText={(text) => setReview(text)}
							maxLength={140}
							keyboardType="default"
							clearButtonMode="always"
							autoCapitalize="sentences"
							autoFocus={true}
							multiline={true}
							numberOfLines={15}
							scrollEnabled={true}
							textAlign="left"
						/>
					</View>
					<View style={styles.nameFrame}>
						<Text style={styles.titleSelect}>Link:</Text>
						<TextInput
							style={styles.reviewText}
							placeholder="Add a link"
							onChangeText={(text) => setLink(text)}
							maxLength={40}
							keyboardType="default"
							clearButtonMode="always"
							autoCapitalize="none"
							dataDetectorTypes="link"
							tt
							textAlign="left"
						/>
						<Text style={styles.titleSelect}>Name:</Text>
						<TextInput
							style={styles.reviewText}
							placeholder="Sign your Review"
							onChangeText={(text) => setName(text)}
							maxLength={40}
							keyboardType="default"
							clearButtonMode="always"
							textAlign="left"
						/>
						<View style={styles.buttonSubmit}>
							<Text style={styles.buttonSubmitText}>Submit</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.background} />
		</>
	);
}

const styles = StyleSheet.create({
	frame: {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		top: 32,
		left: 16,
		right: 16,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: 'white',
		zIndex: 5,
		borderRadius: 4,
		overflow: 'scroll',
	},
	eventFrame: {
		position: 'relative',
		top: 14,
		width: '100%',
		height: 'auto',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		marginBottom: 8,
	},
	titleSelect: {
		paddingTop: 8,
		fontSize: 12,
		marginBottom: 8,
		fontWeight: '600',
	},
	flatlist: {
		width: '100%',
		height: 'auto',
		marginTop: 8,
		marginBottom: 0,
		backgroundColor: 'white',
	},
	pictureFrame: {
		width: 140,
		height: 100,
		backgroundColor: 'black',
	},
	eventText: {
		fontSize: 14,
		fontWeight: '600',
		marginLeft: 8,
		color: 'black',
		overflow: 'scroll',
	},
	ratingFrame: {
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		marginTop: 8,
		marginBottom: 8,
	},
	ratingList: {
		width: '100%',
		height: 48,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	reviewFrame: {
		width: '100%',
		height: 440,
		marginTop: 8,
		marginBottom: 8,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		overflow: 'scroll',
		// backgroundColor: colors.medium,
	},
	textFrame: {
		width: '100%',
		height: 180,
		marginTop: 8,
		marginBottom: 8,

		overflow: 'scroll',
		// backgroundColor: colors.medium,
	},
	reviewText: {
		width: '100%',
		height: 48,
		fontSize: 16,
		fontWeight: '400',
		fontStyle: 'italic',
		color: 'black',
		paddingLeft: 0,
	},
	nameFrame: {
		width: '100%',
		height: 48,
		marginTop: 8,
		marginBottom: 8,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	buttonSubmit: {
		position: 'relative',
		width: '100%',
		height: 48,

		marginTop: 24,
		borderRadius: 2,
		backgroundColor: 'black',
		marginBottom: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonSubmitText: {
		color: 'white',
		fontWeight: '600',
	},
	background: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		backgroundColor: 'black',
		opacity: 0.8,
		zIndex: 4,
	},
	headerReviewsEvents: {
		width: '100%',
		height: 4,
		fontSize: 18,
		fontWeight: '500',
	},
	separatorReviews: {
		width: '100%',
		height: 6,
	},
});

export default ReviewNewCard;
