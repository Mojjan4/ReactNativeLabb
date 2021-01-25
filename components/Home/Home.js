import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

// library for animations. 
const Home = () => {
    return (
        <View>
            <Animatable.Text style={{ textAlign: 'center', padding: 110 }} animation="slideInDown" iterationCount="infinite" direction="alternate">Merry Christmas and a happy new year!</Animatable.Text>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 50 }}>❤️</Animatable.Text>
        </View>
    )
}


export default Home;