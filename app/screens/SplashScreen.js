import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function SplashScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.lightWhite }}>

            <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate("SplasheScreen") }}>
                <Image style={{ marginBottom: RFPercentage(8), width: RFPercentage(32), height: RFPercentage(32) }} source={require('../../assets/images/splash1.png')} />
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({

})