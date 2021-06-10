import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

export default class Icon extends Component {
	// static icons = {
	// 	'icon-icon-events': '\u{e904}',
	// 	'icon-icon-agenda': '\u{e903}',
	// 	'icon-icon-reviews': '\u{e901}',
	// 	'icon-icon-account': '\u{e900}',
	// };

	static icons = {
		'icon-calendar': '\u{e900}',
		'icon-chevron-left': '\u{e901}',
		'icon-chevron-right': '\u{e902}',
		'icon-compass': '\u{e903}',
		'icon-edit': '\u{e904}',
		'icon-eye': '\u{e905}',
		'icon-flag': '\u{e906}',
		'icon-grid': '\u{e907}',
		'icon-heart': '\u{e908}',
		'icon-map-pin': '\u{e909}',
		'icon-map': '\u{e90a}',
		'icon-plus': '\u{e90b}',
		'icon-search': '\u{e90c}',
		'icon-x': '\u{e90d}',
	};

	static styles = StyleSheet.create({
		icon: {
			fontFamily: 'iconsFeather',
		},
	});

	static propTypes = () => ({
		icon: PropTypes.oneOf(Object.keys(Icon.icons)).isRequired,
		style: Text.propTypes.style,
	});

	safeIconStyle(styles) {
		const style = StyleSheet.flatten(styles);

		delete style.fontWeight;

		return style;
	}

	/**
	 * On rend un composant Text contenant le pictogramme demandé
	 */
	render() {
		const { icons, styles } = this.constructor;
		const { icon, style } = this.props;

		return (
			<Text style={this.safeIconStyle([styles.icon, style])}>
				{icons[icon]}
			</Text>
		);
	}
}
