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

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.subContainer}>
        <View style={styles.flexRowForget}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <Text style={styles.forgetTxt}> Forget Password </Text>
        </View>
        <Text style={styles.welcomeTxt}> Forget Password </Text>
        <Text style={styles.welcomeNot}>
          Please enter your Email So we can help you
        </Text>
        <Text style={styles.welcomeNot}>Recover your Password</Text>
        <View style={styles.inputBox}>
          <View style={styles.flexRow}>
            <Image
              source={require('../assets/email.png')}
              style={styles.person}
            />
            <TextInput placeholder="Email" />
          </View>
        </View>

        <TouchableOpacity style={styles.resetBtn}>
          <Text style={styles.resetBtnTxt}>Reset Password</Text>
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
  flexRowForget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 290,
    alignItems: 'center',
  },
  forgetTxt: {
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
    marginTop: 70,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetBtn: {
    height: Display.setHeight(8),
    width: Display.setWidth(92),
    backgroundColor: '#2e856e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  resetBtnTxt: {
    color: 'white',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
  },
  SignUpNotTxt: {
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
});
