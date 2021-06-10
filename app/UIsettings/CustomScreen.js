import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
	View,
} from 'react-native';
import colors from './colors';

const MyStatusBar = ({ backgroundColor, ...props }) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
);

function CustomScreen(props) {
	return (
		<>
			<MyStatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaView style={[styles.screen, props.style]}>
				<View style={[props.style, styles.view]}>{props.children}</View>
			</SafeAreaView>
		</>
	);
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT,
		backgroundColor: colors.black,
	},
	screen: {
		flex: 1,
		backgroundColor: colors.black,
		// opacity: 0.8,
	},
	view: {
		flex: 1,
		backgroundColor: colors.black,
	},
});

export default CustomScreen;
