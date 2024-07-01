import { StyleSheet, Text, ImageBackground, SafeAreaView,View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors';

const Onboarding = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>

           

        <ImageBackground source={require('../assets/onboardingBG.png')} resizeMode="stretch" style={styles.image}>
            
            {/* Bottom part container with info and CTA */}
            <View style={styles.infoContaier}>

                {/* Header */}
                <Text style={styles.heading}>
                    Explorer Lite
                </Text>

                {/* Description of services provided*/}
                <Text style={styles.text}>
                    Watch movies from your laptop, phone or any device
                </Text>

                {/* CTA button to direct user to home page */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>
                        navigation.navigate('Home')
                }>
                    <Text style={styles.buttonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      heading: {
        color: COLORS.lightBlue,
        fontSize: 35,
        fontWeight: "600",
        textAlign: 'center',
        marginBottom: 10

      },
      text: {
        color: 'white',
        fontSize: 15,
        fontWeight: "300",
        textAlign: 'center'
      },
      infoContaier: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 150
    },
    button : {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: COLORS.lightBlue
    },
    buttonText :{
        color: 'white',
        fontWeight: "600",
        fontSize: 20,
        textAlign: 'center'
    }
})