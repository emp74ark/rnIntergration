import React, {useState} from 'react';
import {AppRegistry, Button, NativeModules, StyleSheet, Text, TextInput, View} from 'react-native';

export const Integration = () => {
    const {ReactParam} = NativeModules
    const [param, setParam] = useState(ReactParam.getParam());

    const onPress = () => {
        if (param?.trim()) {
            ReactParam.setParam(param, (value: string) => {
                setParam(value)
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={[styles.box, {backgroundColor: '#76b6e4'}]}>
                <Text style={styles.text}>React Native</Text>
            </View>
            <TextInput onChangeText={(value) => setParam(value)} placeholder="Enter new param value"/>
            <Button title="Send param" onPress={onPress}/>
            <Text style={styles.text}>Param from module: {param}</Text>
        </View>
    );
};

export const RnGallery = () => {
    const {ReactParam} = NativeModules

    return (
        <View style={styles.container}>
            <View style={[styles.box, {backgroundColor: '#99db91'}]}>
                <Text style={styles.text}>Gallery from RN</Text>
            </View>
            <Text style={styles.text}>Param from module: {ReactParam.getParam()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
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