import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Display from '../util/Display';
import Fonts from '../constants/Fonts';
import { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Images from '../constants/Images';

const HotelsWithLogo = ({image, title, category,distance,rating,time}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.flexRow}>
        <Image
          source={Images[image]}
          style={styles.logo}/>
          <View style={styles.hotelNameView}>
          <Text style={styles.hotelName}>{title}</Text>
          </View>
          <Pressable onPress={() => setIsPasswordShow(!isPasswordShow)}>
              {isPasswordShow ? (
                <Image
                  source={require('../assets/bookmarked.png')}
                  style={styles.bookmark}
                />
              ) : (
                <Image
                  source={require('../assets/bookmark.png')}
                  style={styles.bookmark}
                />
              )}
            </Pressable>
          </View>



          <View style={styles.flexRowtwo}>
          <Image
          source={require('../assets/foodcategory.png')}
          style={styles.categoryImg}/>
          <Text style={styles.categoryTxt}>{category} </Text>
          <Image
          source={require('../assets/locationtwo.png')}
          style={styles.distanceImage}/>
          <Text style={styles.categoryTxt}>{distance}</Text>
          </View>

          
          <View style={styles.flexRowtwo}>
          <Image
          source={require('../assets/star.png')}
          style={styles.starImg}/>
          <Text style={styles.ratingTxt}>{rating}</Text>
          <Image
          source={require('../assets/clock.png')}
          style={styles.clockImg}/>
          <Text style={styles.timeTxt}> {time}</Text>
          <Image
          source={require('../assets/contact.png')}
          style={styles.starImg}/>
          <Text style={styles.timeTxt}>Contact </Text>
          </View>
      </View>
    </View>
  );
};

export default HotelsWithLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    backgroundColor: '#F9F9F9',
    height: Display.setHeight(15),
    borderRadius: 10,
    elevation: 5,
    marginBottom: 7
  },
  logo: {
    height: Display.setHeight(12),
    width: Display.setWidth(20),
    borderRadius: 10,
    margin: 10
  },
  flexRow: {
    flexDirection: 'row'
  },
  hotelName: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16
  },
  bookmark: {
    height: Display.setHeight(4),
    width: Display.setWidth(6),
    marginLeft: 70,
    marginTop: 10
  },
  flexRowtwo: {
    flexDirection: 'row',
    bottom: 80,
    marginLeft: 95,
    marginTop: 3

  },
  categoryImg: {
    height: Display.setHeight(2),
    width: Display.setWidth(4),
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  categoryTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 12,

  },
  distanceImage: {
    height: Display.setHeight(2),
    width: Display.setWidth(4),
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  starImg: {
    height: Display.setHeight(3),
    width: Display.setWidth(5),
    marginTop: 4,
    marginLeft: 6,
    marginRight: 7
  },
  ratingTxt: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: 'black',
    marginTop: 4,
    marginRight: 30
  },
  timeTxt: {
    fontFamily:Fonts.POPPINS_MEDIUM,
    marginTop: 5,
    fontSize: 14,
    marginRight: 10
  },
  clockImg: {
    height: Display.setHeight(2.5),
    width: Display.setWidth(4),
    marginTop: 6,
    marginRight: 3,
    marginLeft: -3
  },
  hotelNameView: {
    width: Display.setWidth(40),
  }

});
