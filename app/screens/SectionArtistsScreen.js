import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TextInput,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWindowDimensions } from 'react-native';
import Icon from '../UIsettings/Icon';
import CustomScreen from '../UIsettings/CustomScreen';
import ArtistCard from '../components/ArtistsSection/ArtistCard';
import colors from '../UIsettings/colors';
import ButtonFilter from '../components/Filter/ButtonFilter';
import artistsApi from '../api/artists';

function SectionAccountScreen({ navigation }) {
	// Database state management
	const [dataArtists, setDataArtists] = useState([]);
	const [filteredDataArtists, setFilteredDataArtists] = useState([]);
	const [followedArtists, setFollowedArtists] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadArtists();
	}, []);

	loadArtists = async () => {
		// const initialEventsDB = await AsyncStorage.setItem(
		// 	'artistsFollowed',
		// 	JSON.stringify([])
		// );
		try {
			// await AsyncStorage.removeItem('artistsFollowed');
			setLoading(true);
			const response = await artistsApi.getArtists();

			clearData = async () => {
				try {
					await AsyncStorage.removeItem('artistsSection');
				} catch (e) {}
			};
			clearData();
			await AsyncStorage.setItem(
				'artistsSection',
				JSON.stringify(response.data)
			);
		} catch (error) {
			console.log(error);
		}
		// Artist all
		try {
			const artistsDBStored = await AsyncStorage.getItem(
				'artistsSection'
			);
			const artistStored = JSON.parse(artistsDBStored);
			setDataArtists(artistStored);
			setFilteredDataArtists(artistStored);
			setLoading(false);
		} catch (error) {}

		// Artist followed
		try {
			const artistsfollowedDBStored = await AsyncStorage.getItem(
				'artistsFollowed'
			);
			const artistsFollowedStored = JSON.parse(artistsfollowedDBStored);
			setFollowedArtists(artistsFollowedStored);
			setLoading(false);
			console.log(
				'this is arrtisFollowedStored: ',
				artistsFollowedStored
			);
		} catch (error) {}
	};

	// Filter data & buttons display
	const [displaySearch, setDisplaySearch] = useState(false);
	const [displayBtnSearch, setDisplayBtnSearch] = useState(true);
	const [displayArtists, setDisplayArtists] = useState(true);
	const [displayArtistsFollowed, setDisplayArtistsFollowed] = useState(false);
	const [searchEntered, setSearchEntered] = useState(true);

	const showArtists = () => {
		setDisplayArtists(true);
		setDisplayArtistsFollowed(false);
		setFilteredDataArtists(dataArtists);
	};
	const showFollowing = () => {
		setDisplayArtists(false);
		setDisplayArtistsFollowed(true);
		setFilteredDataArtists(followedArtists);
	};

	const displaySearchBar = () => {
		setDisplaySearch(true);
		setDisplayBtnSearch(false);
	};
	const closeSearchBar = () => {
		setDisplaySearch(false);
		setDisplayBtnSearch(true);
	};

	// Filter function
	const searchFilterFunction = (text) => {
		if (text) {
			const newData = dataArtists.filter(function (item) {
				const itemData = item.name
					? item.name.toUpperCase()
					: ''.toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredDataArtists(newData);
			setSearchEntered(text);
		} else {
			setFilteredDataArtists(dataArtists);
			setSearchEntered(text);
		}
	};

	// Follow functions
	const followArtist = async (artist) => {
		const savedArtist = artist;

		// console.log('this is artist: ', artist);
		// console.log('this is artistsFollowedStored: ', followedArtists);
		const followed = followedArtists.every(
			(item) => item._id !== artist._id
		);
		console.log('this is unFollowed: ', followed);

		if (followed) {
			try {
				const artistsFollowedDBStored = await AsyncStorage.getItem(
					'artistsFollowed'
				);
				const artistsFollowedStored = JSON.parse(
					artistsFollowedDBStored
				);
				const newArtistFollowedValues = [
					...artistsFollowedStored,
					savedArtist,
				];
				await AsyncStorage.setItem(
					'artistsFollowed',
					JSON.stringify(newArtistFollowedValues)
				);
				setFollowedArtists(newArtistFollowedValues);
			} catch (error) {
				console.log(error);
			}
		}
		if (!followed) {
			try {
				const artistsFollowedDBStored = await AsyncStorage.getItem(
					'artistsFollowed'
				);
				const artistsFollowedStored = JSON.parse(
					artistsFollowedDBStored
				);

				const unfollow = artistsFollowedStored.filter(
					(item) => item._id !== artist._id
				);

				await AsyncStorage.setItem(
					'artistsFollowed',
					JSON.stringify(unfollow)
				);

				setFollowedArtists(unfollow);
			} catch (error) {
				console.log(error);
			}
		}
	};

	// Layout
	const header = () => {
		return <View style={styles.headerAccount} />;
	};
	const separator = () => {
		return <View style={styles.separator} />;
	};
	const windowWidth = useWindowDimensions().width;
	return (
		<CustomScreen>
			<View style={styles.container}>
				{displayBtnSearch && (
					// <ButtonFilter
					// 	text="Search"
					// 	color={{ color: 'black' }}
					// 	onPress={displaySearchBar}
					// 	style={styles.btnSearch}
					// />
					<TouchableWithoutFeedback onPress={displaySearchBar}>
						<View style={styles.btnView}>
							<Icon
								icon="icon-search"
								style={{
									fontSize: 28,
									color: colors.darker,
								}}
							/>
						</View>
					</TouchableWithoutFeedback>
				)}
				<View style={styles.filterContainer}>
					<View style={styles.filterFrame}>
						<TouchableWithoutFeedback onPress={showArtists}>
							<View style={styles.artists}>
								<Text
									style={
										displayArtists
											? styles.selected
											: styles.filterText
									}
								>
									Artists
								</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={showFollowing}>
							<View style={styles.following}>
								<Text
									style={
										displayArtistsFollowed
											? styles.selected
											: styles.filterText
									}
								>
									Following
								</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>

					{displaySearch && (
						<View
							style={[
								styles.searchFieldFrame,
								{ width: windowWidth },
							]}
						>
							<Text style={styles.searchFieldText}>Search:</Text>
							<TextInput
								keyboardType="default"
								maxLength={140}
								multiline={false}
								// placeholder="Search by name"
								textAlign="left"
								fdsf
								textContentType="name"
								style={styles.inputFieldSearch}
								autoFocus={true}
								onChangeText={(text) =>
									searchFilterFunction(text)
								}
							/>
						</View>
					)}
				</View>
				{loading && (
					<View style={styles.activityFrame}>
						<ActivityIndicator
							animating={loading}
							color={'white'}
						/>
					</View>
				)}
				{displaySearch && (
					<TouchableWithoutFeedback onPress={closeSearchBar}>
						<View style={styles.btnView}>
							<Icon
								icon="icon-x"
								style={{
									fontSize: 28,
									color: colors.darker,
								}}
							/>
						</View>
					</TouchableWithoutFeedback>
				)}
				<FlatList
					style={styles.events}
					ListHeaderComponent={header}
					ItemSeparatorComponent={separator}
					data={filteredDataArtists}
					keyExtractor={(event) => event._id.toString()}
					renderItem={({ item, index }) => (
						<ArtistCard
							name={item && item.name}
							type={item && item.type}
							image={{
								uri: item && item.picture,
							}}
							onPress={
								() => followArtist(item)
								// () => console.log(item))
							}
							btnText={
								followedArtists.every(
									(element) => element._id !== item._id
								) && displayArtists
									? 'Follow'
									: 'Unfollow'
							}

							// event={item.event}
							// openEvent={() =>
							// 	navigation.navigate('Event', item)
							// renderRightActions={() => <AccountCardAction />}
						/>
					)}
				/>
			</View>
		</CustomScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		top: 0,
	},
	filterContainer: {
		width: '100%',
		height: 'auto',
		position: 'relative',
		top: 0,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 0,

		backgroundColor: colors.black,
	},
	btnSearch: {
		top: 6,
		right: 8,
		zIndex: 7,
		elevation: 7,
		alignSelf: 'center',
	},
	activityFrame: {
		width: '100%',
		height: 64,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	filterFrame: {
		width: '100%',
		height: 48,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'yellow',
	},
	artists: {
		marginLeft: 8,
		marginRight: 8,
		// backgroundColor: 'red',
	},
	following: {
		marginLeft: 8,
		marginRight: 8,
		// backgroundColor: 'blue',
	},
	filterText: {
		fontSize: 16,
		color: colors.medium,
		fontWeight: '300',
		fontFamily: 'helvetica',
	},
	selected: {
		fontSize: 16,
		color: colors.white,
		fontWeight: '500',
		fontFamily: 'Unica 77 Trial TT',
	},
	searchFieldFrame: {
		height: 48,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: colors.black,
	},
	searchFieldText: {
		fontSize: 14,
		color: colors.white,
		fontWeight: '400',
		marginLeft: 16,
		fontFamily: 'helvetica',
	},
	inputFieldSearch: {
		// width: 140,
		fontSize: 14,
		color: colors.white,
		fontWeight: '400',
		marginLeft: 8,
		fontFamily: 'Unica 77 Trial TT',
	},
	btnSearch: {
		fontSize: 10,
		color: colors.white,
		fontWeight: '600',
		position: 'absolute',
		right: 0,
	},
	header: {},
	headerAccount: {
		width: '100%',
		height: 0,
	},
	separator: {
		width: '100%',
		height: 8,
	},
	btnView: {
		width: 60,
		height: 48,
		alignItems: 'flex-end',
		justifyContent: 'center',
		position: 'absolute',
		top: 4,
		right: 12,
		zIndex: 7,
		elevation: 7,
		alignSelf: 'center',
		// backgroundColor: colors.white,
	},
});

export default SectionAccountScreen;
