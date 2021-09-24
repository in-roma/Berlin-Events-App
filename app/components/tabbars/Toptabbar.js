import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../../UIsettings/colors';

function Toptabbar({ onPress }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.btnView}>
                    <Text style={styles.btnclose}>CLOSE</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 16,
        zIndex: 99,
        elevation: 99,
        alignSelf: 'center',
    },
    btnView: {
        fontSize: 12,
        color: colors.black,
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnclose: {
        fontSize: 12,
        color: colors.black,
        fontWeight: '500',
    },
});

export default Toptabbar;
