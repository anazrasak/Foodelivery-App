import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Display from '../util/Display';
import Fonts from '../constants/Fonts';
import {Searchbar} from 'react-native-paper';
import Mock from '../constants/Mock';
import {CategoryMenuItem, HotelsWithLogo} from '../components';
import {useNavigation} from '@react-navigation/native';
import Api from './Api';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Hotels from '../components/Hotels';
import General from '../constants/General';

const sortStyle = isActive =>
  isActive
    ? styles.userCategoryView
    : {...styles.userCategoryView, borderBottomColor: 'white'};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeSortItem, setActiveSortItem] = useState('recent');
  const [activeCategory, setActiveCategory] = useState();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#2e856e" />
      <View style={styles.alignContainer}>
        <View style={styles.headerContainer} />
      </View>
      <View style={styles.locationContainer}>
        <Image
          source={require('../assets/location.png')}
          style={styles.location}
        />
        <Text style={styles.deliverTxt}>Deliverd to</Text>
        <Text style={styles.homeTxt} onPress={() => navigation.navigate(Api)}>
          HOME
        </Text>
        <Image
          source={require('../assets/dropBtnWhite.png')}
          style={styles.dropDown}
        />
        <View style={styles.notificationView}>
          <Text style={styles.notificationTxt}>2</Text>
        </View>
        <Image source={require('../assets/bell.png')} style={styles.bell} />
      </View>

      <View style={styles.searchView}>
        {/* <Searchbar
          placeholder="Search..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        /> */}
        <Image source={require('../assets/search.png')} style={styles.search} />
        <Text style={styles.searchTxt}>Search...</Text>
        <Image source={require('../assets/slider.png')} style={styles.slider} />
      </View>
      <View style={styles.categoryView}>
        {Mock.CATEGORIES.map(({name, logo}) => (
          <CategoryMenuItem
            name={name}
            logo={logo}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </View>

      <View style={styles.flexFavourite}>
        <Text style={styles.favouriteTxt}>Favourite</Text>
        <Text style={styles.seeAllTxt}>See all</Text>
      </View>
      
      <FlatList
        data={General.HOTEL_CONTENTS}
        keyExtractor={item => item.title}
        renderItem={({item}) => <Hotels {...item} />}
        horizontal={true}
        style={styles.hotelContainer}></FlatList>


        

        <View style={styles.userCategory}>
          <TouchableOpacity
            style={sortStyle(activeSortItem === 'recent')}
            onPress={() => setActiveSortItem('recent')}>
            <Text style={styles.userCategoryTxt}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === 'favourite')}
            onPress={() => setActiveSortItem('favourite')}>
            <Text style={styles.userCategoryTxt}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === 'rating')}
            onPress={() => setActiveSortItem('rating')}>
            <Text style={styles.userCategoryTxt}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === 'popular')}
            onPress={() => setActiveSortItem('popular')}>
            <Text style={styles.userCategoryTxt}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sortStyle(activeSortItem === 'trending')}
            onPress={() => setActiveSortItem('trending')}>
            <Text style={styles.userCategoryTxt}>Trending</Text>
          </TouchableOpacity>
        </View>
      


      <View  style={styles.LogoCategoryView}>
      <FlatList 
      data={General.HOTEL_CONTENTS_LOGO}
      keyExtractor={item => item.title}
      renderItem={({item}) => <HotelsWithLogo {...item} />}
      style={styles.LogoCategoryViewFlatlist}
      />
      </View>
      
      {/* <View  style={styles.LogoCategoryView}>
      <HotelsWithLogo/>
      </View> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginTop: 60,
  },
  alignContainer: {
    alignItems: 'center',
    marginTop: 60
  },
  headerContainer: {
    height: 2000,
    width: 2000,
    backgroundColor: '#2e856e',
    position: 'absolute',
    borderRadius: 2000,
    top: -1800,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 1,
    margin: 10,
    alignItems: 'center',
  },
  location: {
    height: Display.setHeight(2),
    width: Display.setWidth(4),
    marginRight: 10,
  },
  deliverTxt: {
    color: 'white',
    fontFamily: Fonts.POPPINS_REGULAR,
    marginTop: 3,
    marginRight: 10,
  },
  homeTxt: {
    color: '#FCC419',
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 3,
    marginRight: 2,
  },
  dropDown: {
    height: Display.setHeight(3),
    width: Display.setWidth(5),
    marginTop: -2,
  },
  notificationView: {
    height: Display.setHeight(2.2),
    width: Display.setWidth(4),
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    position: 'absolute',
    marginLeft: 350,
  },
  notificationTxt: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  bell: {
    height: Display.setHeight(4),
    width: Display.setWidth(6),
    marginLeft: 160,
  },
  searchView: {
    height: Display.setHeight(7),
    width: Display.setWidth(92),
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    height: Display.setHeight(3.5),
    width: Display.setWidth(5),
    marginLeft: 15,
  },
  searchTxt: {
    fontFamily: Fonts.POPPINS_REGULAR,
    marginTop: 3,
    marginLeft: 10,
  },
  slider: {
    marginLeft: 215,
  },
  searchBar: {
    height: Display.setHeight(7),
    width: Display.setWidth(80),
    backgroundColor: 'white',
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 18,
  },
  flexFavourite: {
    flexDirection: 'row',
    marginTop: 30,
    margin: 20,
    alignItems: 'center',
  },
  favouriteTxt: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: 'black',
  },
  seeAllTxt: {
    left: 240,
    fontSize: 13,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: '#FCC419',
  },
  hotelContainer: {
    marginLeft: 20,
    top: -9,
    // height: Display.setHeight(22),
  },
  userCategory: {
    flexDirection: 'row',
    height: Display.setHeight(7),
    top: 17,

  },
  userCategoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FCC419',
    marginLeft: 11,
    marginRight: 11,
    marginTop: 1,
    // height: Display.setHeight(7),
  },
  userCategoryTxt: {
    color: 'black',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  LogoCategoryView: {
    top: -150,
    marginLeft: 15,
    marginTop:-17,
    marginRight: 15,
  },
  LogoCategoryViewFlatlist: {
    top: 200
  }
});
