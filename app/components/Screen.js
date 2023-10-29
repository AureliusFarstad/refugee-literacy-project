import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

function Screen({children , style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        marginTop:Constants.statusBarHeight,
    }
})

export default Screen;