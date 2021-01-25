import { Text, View } from 'react-native';
import * as Device from 'expo-device';
import React from 'react'

//library that shows the device the user is using. 
const Index = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
            <Text>
                {Device.manufacturer}: {Device.modelName}
            </Text>
        </View>
    )
}

export default Index;