import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const myName = () => {
    alert('My name is Christopher Lundqvist!')
}

const About = () => {
    return (
        <View style={styles.contatiner}>
            <Text style={styles.text}>{'Welcome to my app!'}</Text>
            <Button 
                title="The programmers name!"
                color="black"
                onPress={myName}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1, 
        marginTop: 50
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 110
    }
})

export default About