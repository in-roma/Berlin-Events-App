import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Marker from './Marker';

MapboxGL.setAccessToken(
	'pk.eyJ1Ijoicm9tYWluZ3JhbmRqZWFuIiwiYSI6ImNrZ2pxYTJ6ZjAyaDIydGxvbGxmaW44ZDYifQ.TN4ZiZL3jFZ5NBIiNLYveg'
);

function MapView({ location, id, event, artist, venue, time }) {
	return (
		<View style={[styles.container]}>
			<MapboxGL.MapView
				styleURL={
					'mapbox://styles/romaingrandjean/ckh91g9ou03vx19o4152oocl1'
				}
				zoomLevel={12}
				centerCoordinate={location}
				showUserLocation={true}
				style={{ flex: 1 }}
			>
				<Marker
					coordinate={location}
					id={id}
					event={event}
					artist={artist}
					venue={venue}
					time={time}
				/>

				<MapboxGL.Camera
					animationDuration={1}
					zoomLevel={12}
					centerCoordinate={location}
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
