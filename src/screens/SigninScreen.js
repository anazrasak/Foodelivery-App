import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Fonts from '../constants/Fonts';
import Display from '../util/Display';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import NumberLoginScreen from './NumberLoginScreen';

const SigninScreen = () => {
  const navigation = useNavigation();
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.subContainer}>
        <View style={styles.flexRowSignin}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <Text style={styles.signinTxt}> Sign in </Text>
        </View>
        <Text style={styles.welcomeTxt}> Welcome </Text>
        <Text style={styles.welcomeNot}>
          Enter your Phone number and Email{' '}
        </Text>
        <Text style={styles.welcomeNot}>
          address for signin. Enjoy your food.{' '}
        </Text>
        <View style={styles.inputBox}>
          <View style={styles.flexRow}>
            <Image
              source={require('../assets/person.png')}
              style={styles.person}
            />
            <TextInput placeholder="Username" style={styles.fl} />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.flexRow}>
            <Image
              source={require('../assets/lock.png')}
              style={styles.person}            />
            <TextInput
              placeholder="Password"
              secureTextEntry={isPasswordShow ? false : true}
              style={styles.fl}
            />
            <Pressable onPress={() => setIsPasswordShow(!isPasswordShow)}>
                {isPasswordShow ? 
            <Image
              source={require('../assets/eyeclosed.png')}
              style={styles.eyeclosed}
            /> : <Image
            source={require('../assets/eye.png')}
            style={styles.eye}
          /> }
          </Pressable>
          </View>
        </View>
        <View style={styles.flexRow}>
          {/* <Text style={styles.rememberMeTxt}>Remember Me</Text> */}
          <Text style={styles.forgetPaswdTxt}
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          >Forget Password?</Text>
        </View>

        <TouchableOpacity style={styles.SigninBtn}
        onPress={()=> navigation.navigate('HomeScreen') }  >
          <Text style={styles.SigninBtnTxt}
          >Sign In</Text>
        </TouchableOpacity>
        <View style={styles.flexRowSignUp}>
          <Text style={styles.SignUpNotTxt}>Don't have an account? </Text>
          <Text style={styles.SignUpBtn}
          onPress={() => navigation.navigate('RegisterScreen') }
          >Sign Up</Text>
        </View>
        <View style={styles.flexRowSignUp}>
          <Text style={styles.orBtn}>OR</Text>
        </View>
        <View style={styles.socialBtn}>
          <View style={styles.flexRow}>
            <View style={styles.socialBg}>
                <Image
              source={require('../assets/Fblogo.png')}
              style={styles.fblogo}
            />
            </View>
            
            <Text style={styles.fbTxt}>Connect with Facebook</Text>
          </View>
        </View>
        <View style={styles.socialBtnGoogle}>
          <View style={styles.flexRow}>
          <View style={styles.socialBg}>
                <Image
              source={require('../assets/Googlelogo.png')}
              style={styles.googlelogo}
            />
            </View>
            <Text style={styles.fbTxt}>Connect with Google </Text>
          </View>
        </View>
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
  flexRowSignin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 190,
    alignItems: 'center',
  },
  signinTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 20,
  },
  welcomeTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  welcomeNot: {
    color: 'black',
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  inputBox: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#E5E4E2',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  rememberMeTxt: {
    fontFamily: Fonts.POPPINS_REGULAR,
    marginLeft: 10,
    marginTop: 20,
  },
  forgetPaswdTxt: {
    color: 'green',
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 220,
    marginTop: 20,
  },
  SigninBtn: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#2e856e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  SigninBtnTxt: {
    color: 'white',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
  },
  SignUpNotTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  flexRowSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  SignUpBtn: {
    color: '#2e856e',
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  orBtn: {
    color: 'black',
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  socialBtn: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#28589c',
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialBg: {
    height: Display.setHeight(5),
    width: Display.setWidth(9),
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
    borderRadius: 3 
 },
  fblogo: {
    height: Display.setHeight(5),
    width: Display.setWidth(9),
    
  },
  fbTxt: {
    color: 'white',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 15,
    marginLeft: 30,
  },
  socialBtnGoogle: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#4285F4',
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  googlelogo: {
    height: Display.setHeight(4),
    width: Display.setWidth(7),
  },
  back: {
    height: Display.setHeight(4),
    width: Display.setWidth(8),
  },
  person: {
    height: Display.setHeight(2.7),
    width: Display.setWidth(4),
    margin: 10,
  },
  eye: {
    height: Display.setHeight(4),
    width: Display.setWidth(7),
    marginLeft: 210
  },
  eyeclosed: {
    height: Display.setHeight(2.2),
    width: Display.setWidth(7),
    marginLeft: 210
  }
  
});
