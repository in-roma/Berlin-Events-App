import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	FlatList,
	SectionList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

// Components
import CustomScreen from '../UIsettings/CustomScreen';
import DateLine from '../components/AgendaSection/dateLine';
import AgendaCard from '../components/AgendaSection/agendaCard';
import AgendaCardAction from '../components/AgendaSection/AgendaCardAction';
import Message from '../navigation/Message';

// Utilities
import colors from '../UIsettings/colors';

// API
import useApi from '../hooks/useApi';
import userApi from '../api/user';

function SectionAgendaScreen({ navigation }) {
	const [agenda, setAgenda] = useState([]);

	useEffect(() => {
		loadAgenda();
	}, []);

	loadAgenda = async () => {
		try {
			const agendaDBStored = await AsyncStorage.getItem('eventsAgenda');
			const agendaStored = JSON.parse(agendaDBStored);
			// console.log('this agendastore', agendaDBStored);
			setAgenda(agendaStored);
		} catch (error) {
			// setAgenda([]);
			console.log(error);
		}
	};

	// Moments functions
	const timeNow = moment().utcOffset(0, true).subtract(2, 'hours');
	const endOfDay = moment().utcOffset(0, true).endOf('day');
	const night = moment().utcOffset(0, true).endOf('day').subtract(5, 'hours');
	const tomorrow = moment().utcOffset(0, true).add(30, 'h');
	const friday = moment().weekday(5);
	const sunday = moment().weekday(7);

	// Delete function
	const handleDelete = async (id, content, index) => {
		let newAgendaStored;

		try {
			const agendaDBStored = await AsyncStorage.getItem('eventsAgenda');
			const agendaStored = JSON.parse(agendaDBStored);

			if (agendaDBStored) {
				newAgendaStored = agendaStored.filter(
					(item) => item._id !== id
				);
			}

			await AsyncStorage.setItem(
				'eventsAgenda',
				JSON.stringify(newAgendaStored)
			);
			setAgenda(newAgendaStored);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleDelete();
	}, []);

	const DATA = [
		{
			time: 'TODAY',
			data: agenda
				? agenda
						.filter((ele) =>
							moment(ele && ele.utc).isBetween(timeNow, endOfDay)
						)
						.sort((a, b) => {
							return moment(a && a.utc).diff(b && b.utc);
						})
				: [],
		},
		{
			time: 'TOMORROW',
			data: agenda
				? agenda
						.filter((ele) =>
							moment(ele && ele.utc).isSame(tomorrow, 'day')
						)
						.sort((a, b) => {
							return moment(a && a.utc).diff(b && b.utc);
						})
				: [],
		},
		{
			time: 'SOON',
			data: agenda
				? agenda
						.filter((ele) =>
							moment(ele && ele.utc).isAfter(tomorrow)
						)
						.sort((a, b) => {
							return moment(a && a.utc).diff(b && b.utc);
						})
				: [],
		},
	];

	// Lay out section List

	const listHeader = () => {
		return <View style={styles.listHeader} />;
	};
	const listFooter = () => {
		return <View style={styles.listFooter} />;
	};
	const separatorSections = () => {
		return <View style={styles.separatorSections} />;
	};
	const separatorEvents = () => {
		return <View style={styles.separatorEvents} />;
	};
	loadAgenda();
	return (
		<CustomScreen>
			{/* <View style={styles.container}> */}
			<SectionList
				sections={DATA}
				ListHeaderComponent={listHeader}
				ListFooterComponent={listFooter}
				SectionSeparatorComponent={separatorSections}
				ItemSeparatorComponent={separatorEvents}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item, index }) => (
					<AgendaCard
						event={item.event && item.event.event}
						artist={item.event && item.event.artist.name}
						image={{
							uri: item.event && item.event.imageUrl,
						}}
						type={item.event && item.event.type}
						venue={item.event.venue && item.event.venue.name}
						utc={item.event && item.utc}
						deleteEvent={() =>
							handleDelete(item._id, item.event, index)
						}
						openEvent={() => navigation.navigate('Event', item)}
						renderRightActions={() => (
							<AgendaCardAction label="SHARE" />
						)}
					/>
				)}
				renderSectionHeader={({ section: { time } }) => (
					<Text style={styles.title}>{time}</Text>
				)}
			/>
			{/* </View> */}
			{/* {messageWindow && (
				<Message type={messageType} content={messageContent} />
			)} */}
		</CustomScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		top: 0,
	},
	title: {
		fontSize: 28,
		marginLeft: 12,
		color: 'white',
		fontFamily: 'Unica 77 Trial TT',
	},
	columnAgenda: {
		width: '100%',
		height: '100%',
		marginTop: 0,
	},
	events: {
		zIndex: 1,
		elevation: 1,
		top: 0,
	},
	listHeader: {
		width: '100%',
		height: 0,
	},
	listFooter: {
		width: '100%',
		height: 8,
	},
	separatorSections: {
		width: '100%',
		height: 8,
	},
	separatorEvents: {
		width: '100%',
		height: 8,
	},
});

export default SectionAgendaScreen;
