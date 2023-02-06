import {StyleSheet, Text, View, StatusBar, Image,} from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import Fonts from '../constants/Fonts';
import Display from '../util/Display';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"
      backgroundColor="#2e856e" 
      translucent/>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.titleText}>FooDelivery</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e856e',
  },
  logo: {
    height: Display.setHeight(28),
    width: Display.setWidth(40),
  },
  titleText: {
    color: '#36454F',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});
