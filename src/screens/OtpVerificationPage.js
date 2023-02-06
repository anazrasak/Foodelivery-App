import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {useRef, useState} from 'react';
import React from 'react';
import Fonts from '../constants/Fonts';
import Display from '../util/Display';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const OtpVerificationPage = ({
  route: {
    params: {phoneNumber, countryText},
  },
}) => {
  const navigation = useNavigation();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '',2: '',3: '',4: '',})
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.subContainer}>
        <View style={styles.flexRowOtp}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <Text style={styles.OtpTxt}> Verification </Text>
        </View>
        <Text style={styles.OtpTxtt}> Verification </Text>
        <Text style={styles.welcomeNot}>
          Enter the OTP code from the phone we just sent you at
          <Text style={styles.passedCodeTxt}> {countryText}</Text>
          <Text style={styles.passedNumTxt}> {phoneNumber}</Text>
        </Text>
        <Text style={styles.welcomeTxt}>
          {' '}
          Did you enter the correct number?{' '}
        </Text>

        <View style={styles.otpInputView}>
          <View style={styles.otpInputBox}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              style={styles.otpTxtInput}
              onChangeText={text => {
                setOtp({...otp, 1 : text})
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpInputBox}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              style={styles.otpTxtInput}
              onChangeText={text => {
                setOtp({...otp, 2 : text})
                text ? thirdInput.current.focus() :  firstInput.current.focus()
              }}
            />
          </View>
          <View style={styles.otpInputBox}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              style={styles.otpTxtInput}
              onChangeText={text => {
                setOtp({...otp, 3 : text})
                text ? fourthInput.current.focus() :  secondInput.current.focus()
              }}
            />
          </View>
          <View style={styles.otpInputBox}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              style={styles.otpTxtInput}
              onChangeText={text => {
                setOtp({...otp, 4 : text})
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>

        <Text style={styles.resendNote}>
          Didn't receive SMS?
          <Text style={styles.resendBtn}> Resend Code</Text>
        </Text>

        <TouchableOpacity
          style={styles.OtpBtn}
          onPress={() => console.log(otp)}>
          <Text style={styles.OtpBtnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginTop: 70,
    margin: 15,
  },
  flexRowOtp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    alignItems: 'center',
    marginBottom: 30,
  },
  OtpTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 20,
    marginLeft: 14,
  },
  OtpTxtt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 20,
  },
  welcomeTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
  },
  welcomeNot: {
    marginLeft: 5,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: 'black',
    marginTop: 20,
  },

  passedNumTxt: {
    color: '#000080',
  },
  passedCodeTxt: {
    color: '#000080',
  },

  OtpBtn: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#2e856e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  OtpBtnTxt: {
    color: 'white',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
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
  otpInputView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  otpInputBox: {
    borderWidth: 2,
    borderColor: '#2e856e',
    height: Display.setHeight(9),
    width: Display.setWidth(15),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpTxtInput: {
    color: '#800080',
    fontSize: 30,
  },
  resendNote: {
    marginLeft: 5,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: 'black',
    marginTop: 25,
  },
  resendBtn: {
    color: '#2e856e',
  },
});
