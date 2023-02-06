import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
  } from 'react-native';
  import React from 'react';
  import Fonts from '../constants/Fonts';
  import Display from '../util/Display';
  import {TouchableOpacity} from 'react-native-gesture-handler';
  import {useNavigation} from '@react-navigation/native';
  import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
  import CountryPicker from 'react-native-country-picker-modal'
  import { useState } from 'react';
  

  const SigninScreen = () => {
    const navigation = useNavigation();
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');
    const [countryText, setCountryText] = useState('91');
    const [phoneNumber, setPhoneNumber] = useState('')
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.subContainer}>
          <View style={styles.flexRowLogin}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/back.png')}
                style={styles.back}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
            <Text style={styles.LoginTxt}> Login into Food House </Text>
          </View>
          <Text style={styles.welcomeTxt}> Enter your Registerd phone  </Text>
          <Text style={styles.welcomeTxtt}>  Number to log in </Text>
          <Text style={styles.welcomeNot}>
            Phone Number
          </Text>
          

          <View style={styles.inputboxFlexView}>
            <TouchableOpacity style={styles.inputboxCountry}>
            <CountryPicker
            withFilter
            countryCode={countryCode}
            withFlag
            withAlphaFilter={false}
            withCurrencyButton={false}
            withCallingCode
            containerStyle={StyleSheet.flagView}
            onSelect={country => {
               setCountryText(country.callingCode)
              console.log( 'country', country);
              const {cca2, callingCode} = country;
              setCountryCode(cca2);
              setCallingCode(callingCode[0])
            } }
            containerButtonStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            />
              <Text style={styles.countryTxt}>{countryText}</Text>
              </TouchableOpacity>
            <View style={styles.inputboxNumber}>
                <TextInput placeholder='Phone Number'
                keyboardType='number-pad'
                onChangeText={(text) => setPhoneNumber (text)}
                ></TextInput>
                </View>
          </View>
  
          <TouchableOpacity style={styles.LoginBtn}
          onPress={()=> navigation.navigate('OtpVerificationPage',{phoneNumber,countryText})}
          >
            <Text style={styles.LoginBtnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default SigninScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    subContainer: {
      marginTop: 70,
      margin: 15,
    },
    flexRowLogin: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 310,
      alignItems: 'center',
    },
    LoginTxt: {
      color: 'black',
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 20,
      marginLeft: 14,
    },
    welcomeTxt: {
      color: 'black',
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 20,
      marginTop: 30,      
    },
    welcomeTxtt : {
      color: 'black',
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 20,
      marginBottom: 50,
      marginLeft: -5
    },
    welcomeNot: {
        marginLeft: 5,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginBottom: 5,
        color: 'black'
    },

    LoginBtn: {
      height: Display.setHeight(8),
      width: Display.setWidth(92),
      backgroundColor: '#2e856e',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    LoginBtnTxt: {
      color: 'white',
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 16,
    },
    LoginNotTxt: {
      color: 'black',
      fontFamily: Fonts.POPPINS_REGULAR,
    },
    person: {
      height: Display.setHeight(2.7),
      width: Display.setWidth(4),
      margin: 10,
    },
    back: {
      height: Display.setHeight(4),
      width: Display.setWidth(8),
    },
    inputboxFlexView: {
        flexDirection: 'row',
        width: Display.setWidth(90),
    },
    inputboxCountry: {
        borderWidth:2,
        width: Display.setWidth(25),
        height: Display.setHeight(8),
        marginRight: 10,
        borderRadius: 5,
        borderColor:'black',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    inputboxNumber: {
        borderWidth:2,
        width: Display.setWidth(65),
        height: Display.setHeight(8),
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    flag: {
      height: Display.setHeight(3),
      width: Display.setWidth(7),
    },
    countryTxt: {
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      marginLeft: 4,
      marginTop: 3,
      color: 'black'
    },
    dropBtn: {
      height: Display.setHeight(2),
      width: Display.setWidth(5),
      marginLeft: 4
    }
  });
  