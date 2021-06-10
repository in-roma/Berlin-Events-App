import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Moment from 'react-moment';
import colors from '../../UIsettings/colors';

function Marker({ coordinate, id, artist, venue, utc, event, openEvent }) {
	return (
		<MapboxGL.PointAnnotation
			coordinate={coordinate}
			id={id}
			children={true}
			// onSelected={openEvent}
		>
			<View style={styles.container}>
				<Image
					source={require('../../assets/images/marker.png')}
					style={{
						flex: 1,
						resizeMode: 'contain',
						width: 15,
						height: 15,
					}}
				/>
				<View style={styles.markerThumbnail}>
					{/* <Image source={image} style={styles.image} /> */}
					<View style={styles.markerText}>
						<Text style={styles.event}>{event}</Text>
						<Text style={styles.artist}>{artist}</Text>
						<Text style={styles.venue}>{venue}</Text>
						<View style={styles.time}>
							<Text style={styles.tagTimeAt}>At</Text>
							<Moment
								format="HH.mm"
								style={styles.tagTime}
								element={Text}
							>
								{utc}
							</Moment>
						</View>
					</View>
				</View>
			</View>
		</MapboxGL.PointAnnotation>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 160,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	markerThumbnail: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 6,
	},
	markerText: {
		flexDirection: 'column',
		width: 130,
		marginTop: 2,
	},
	event: {
		fontSize: 14,
		fontWeight: '600',
		color: 'black',
		backgroundColor: 'white',
		paddingTop: 8,
		paddingBottom: 2,
		paddingLeft: 4,
		paddingRight: 4,
	},
	artist: {
		fontSize: 12,
		fontWeight: '300',
		color: 'black',
		backgroundColor: 'white',
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 4,
		paddingRight: 4,
	},
	venue: {
		fontSize: 12,
		fontWeight: '400',
		color: 'black',
		backgroundColor: 'white',
		paddingTop: 2,
		paddingBottom: 8,
		paddingLeft: 4,
		paddingRight: 4,
	},
	time: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 4,
		paddingRight: 4,
		alignItems: 'center',
		backgroundColor: 'black',
	},
	tagTimeAt: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.white,
		marginRight: 2,
	},
	tagTime: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.white,
	},
});

export default Marker;
