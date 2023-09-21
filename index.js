import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const Integration = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>React Native</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#76b6e4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent(
    'RnIntegration',
    () => Integration,
);
