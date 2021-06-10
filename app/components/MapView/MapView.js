import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Marker from './Marker';

MapboxGL.setAccessToken(
	'pk.eyJ1Ijoicm9tYWluZ3JhbmRqZWFuIiwiYSI6ImNrZ2pxYTJ6ZjAyaDIydGxvbGxmaW44ZDYifQ.TN4ZiZL3jFZ5NBIiNLYveg'
);

function MapView({ navigation, data }) {
	return (
		<View style={[styles.container]}>
			<MapboxGL.MapView
				styleURL={
					'mapbox://styles/romaingrandjean/ckh91g9ou03vx19o4152oocl1'
				}
				zoomLevel={13}
				centerCoordinate={[13.416806, 52.515674]}
				showUserLocation={true}
				style={{ flex: 1 }}
				scrollZoom={false}
				boxZoom={false}
				// animationMode={false}
			>
				{data.map((item) => (
					<Marker
						coordinate={
							item.event.venue ? item.event.venue.location : null
						}
						key={item.event && item.event._id + item.utc}
						id={item.event && item.event._id}
						event={item.event && item.event.event}
						artist={item.event.artist && item.event.artist.name}
						venue={item.event.venue && item.event.venue.name}
						utc={item.utc}
						openEvent={() => navigation.navigate('Event', item)}
					/>
				))}

				<MapboxGL.Camera
					animationDuration={1}
					zoomLevel={12.2}
					centerCoordinate={[13.416806, 52.515674]}
					scrollZoom={false}
					boxZoom={false}
				></MapboxGL.Camera>
			</MapboxGL.MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
	},
	map: {
		width: '100%',
		height: '100%',
	},
});

export default MapView;
