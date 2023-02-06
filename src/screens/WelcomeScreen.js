import {StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import General from '../constants/General';
import {WelcomeCard} from '../components';
import Display from '../util/Display';
import Fonts from '../constants/Fonts';
import { useNavigation } from '@react-navigation/native';


const pageStyle = (isActive) =>
 isActive 
   ? styles.page
   : {...styles.page, backgroundColor: 'gray'}

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
      i === index ? (
        <View style={pageStyle(true)} key={i} />
      ) : (
        <View style={pageStyle(false)} key={i} />
      ),
      )}
    </View>
  );
};

const WelcomeScreen = () => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0)
  const welcomeList = useRef()
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index)
  })
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshhold: 50})

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex ,
    })
  }

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" /> 
      <View style={styles.welcomeListContainer}>
        <FlatList
        ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          // onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      {/* <Pagination index={welcomeListIndex}/> */}
      {welcomeListIndex === 2 ? (
        <TouchableOpacity></TouchableOpacity>
      ) : ( 
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('SigninScreen')}>
          <Text  style={styles.skipBtn}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nxtBtn}
        onPress={() => pageScroll()}>
          <Text  style={styles.nxtBtnTxt}>NEXT</Text> 
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txt: {
    color: 'black',
  },
  welcomeListContainer: {
    height: Display.setHeight(85),
    backgroundColor: 'white',
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: '#2e856e',
    borderRadius: 32,
    marginHorizontal: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(85),
    margin: 30,
    alignItems: 'center',
    // marginTop: 60
  },
  skipBtn: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 16
  },
  nxtBtnTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 16,
    },
    nxtBtn: {
    backgroundColor: '#bff4be',
    paddingHorizontal: 16,
    paddingVertical: 21,
    borderRadius: 180,
    justifyContent: 'center',
    alignItems: 'center',
    }
});
