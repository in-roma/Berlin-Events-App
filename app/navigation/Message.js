import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Message({ type, content }) {
    if (type === 'delete') {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.message}>
                    has been deleted from your agenda
                </Text>
            </View>
        );
    }
    if (type === 'add') {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.message}>
                    has been added to your agenda
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 46,
        marginBottom: 8,
        width: 'auto',
        left: 12,
        right: 12,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        zIndex: 6,
        elevation: 6,

        alignSelf: 'center',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 3,
    },
    content: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        marginTop: 16,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 2,
    },
    message: {
        fontSize: 13,
        color: 'black',
        fontWeight: '300',
        marginTop: 2,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 16,
    },
});

export default Message;
