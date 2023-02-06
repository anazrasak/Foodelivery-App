import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';

const CategoryMenuItem = ({name, logo, activeCategory, setActiveCategory}) => {
  return (
    <TouchableOpacity
      key={name}
      onPress={() => setActiveCategory(name)}
      style={styles.category()}>
      <Image
        source={Images[logo]}
        style={styles.categoryIcon(activeCategory === name)}
      />
      <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryMenuItem;

const styles = StyleSheet.create({
  category: (marginTop = 0) => ({
    alignItems: 'center',
    marginTop,
  }),
  categoryIcon: isActive => ({
    opacity: isActive ? 1: 0.5,
    height: 40,
    width: 40
  }),
  categoryText: isActive => ({
    fontSize:  11,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: 'white',
    marginTop: 5,
    opacity: isActive ? 1: 0.5
  }),
});
