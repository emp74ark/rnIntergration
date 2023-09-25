import React from 'react';
import {AppRegistry, Button, NativeModules, StyleSheet, Text, View} from 'react-native';

const Integration = () => {
    const {ReactParam} = NativeModules
    const onPress = () => {
        console.log('Button pressed');
        ReactParam.sendParam('testName', 'testValue')
    }
    return (
        <View style={styles.container}>
            <View style={[styles.box, {backgroundColor: '#76b6e4'}]}>
                <Text style={styles.text}>React Native</Text>
            </View>
            <Button title="Send props" onPress={onPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    box: {
        width: 200,
        height: 200,
        borderRadius: 100,
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
