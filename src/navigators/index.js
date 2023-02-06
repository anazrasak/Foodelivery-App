import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import {SplashScreen} from '../screens';
import {WelcomeScreen} from '../screens';
import {SigninScreen} from '../screens';
import {RegisterScreen} from '../screens';
import {ForgetPasswordScreen} from '../screens';
import {NumberLoginScreen, OtpVerificationPage,HomeScreen,Api} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        <Stack.Screen name="NumberLoginScreen" component={NumberLoginScreen} />
        <Stack.Screen name="OtpVerificationPage" component={OtpVerificationPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Api" component={Api} />
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
