import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function SplashScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.lightWhite }}>

            <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate("OnboardingfirstScreen") }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: RFPercentage(8) }}>

                <Image style={{ marginRight: RFPercentage(2.5), width: RFPercentage(17), height: RFPercentage(17) }} source={require('../../assets/images/splash1.png')} />
                <Image style={{ width: RFPercentage(25.4), height: RFPercentage(5.4) }} source={require('../../assets/images/textlogoo.png')} />

            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({

})