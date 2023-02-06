import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Display from '../util/Display';
import Fonts from '../constants/Fonts';
import General from '../constants/General';
import Images from '../constants/Images';

const Hotels = ({title, image, distance, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hotalCard}>
        <Image source={Images[image]} style={styles.hotalImage}></Image>
        <Text style={styles.hotalName}>{title}</Text>
        <View style={styles.hotalflex}>
          <Text style={styles.hotalCategory}>Burger</Text>
          <Text style={styles.hotalCategory}>American Food</Text>
          <Text style={styles.hotalCategory}>Deshi Food</Text>
        </View>
        <View style={styles.hotalflex}>
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}></Image>
          <Text style={styles.ratingTxt}>4.9</Text>
          <Text style={styles.ratingSubTxt}>(150)</Text>
          <View style={styles.distanceView}>
            <Image
              source={require('../assets/locationtwo.png')}
              style={styles.locationIcon}></Image>
            <Text style={styles.distanceTxt}>{distance}</Text>
          </View>
          <View style={styles.distanceView}>
            <Image
              source={require('../assets/clock.png')}
              style={styles.locationIcon}></Image>
            <Text style={styles.distanceTxt}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  hotalCard: {
    height: Display.setHeight(29),
    width: Display.setWidth(70),
    // backgroundColor: 'red',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    elevation: 5,
    marginRight: 20,
  },
  hotalImage: {
    height: Display.setHeight(18),
    width: Display.setWidth(67),
    borderRadius: 20,
    margin: 6,
  },
  hotalName: {
    fontFamily: Fonts.POPPINS_BOLD,
    marginLeft: 10,
    fontSize: 14,
    color: 'black'
  },
  hotalflex: {
    flexDirection: 'row',
  },
  hotalCategory: {
    fontSize: 11,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginLeft: 10,
  },
  starIcon: {
    height: Display.setHeight(2),
    width: Display.setWidth(4),
    marginLeft: 10,
  },
  ratingTxt: {
    fontSize: 11,
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'black',
    marginLeft: 5,
    marginBottom: 5,
  },
  ratingSubTxt: {
    fontSize: 11,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 60,
  },
  distanceView: {
    backgroundColor: '#F3E5AB',
    height: Display.setHeight(2.5),
    width: Display.setWidth(13),
    borderRadius: 20,
    marginRight: 15,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationIcon: {
    height: Display.setHeight(1.5),
    width: Display.setWidth(3),
    marginTop: 4,
  },
  distanceTxt: {
    fontSize: 10,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginTop: 2,
    marginLeft: 2,
  },
});
