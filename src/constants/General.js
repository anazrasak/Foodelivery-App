import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const WELCOME_CONTENTS = [
  {
    image: 'DISCOVER',
    title: 'Discover places near you',
    content:
      'we make it simple to find your favourite food, Enter your address let us do the rest',
  },
  // {
  //     image : 'ORDER',
  //     title: 'Order your favorite',
  //     content: 'We will store your favrite foods based on your search and order'
  // },
  {
    image: 'FAST',
    title: 'Fastest delivery',
    content:
      'We make food ordering fast,easy and free.  no matter you poad online or cash',
  },
];

const HOTEL_CONTENTS = [
  {
    image: 'PIZZAHUT',
    title: 'Pizza Hut ',
    distance: '250m',
    time: '25min',
  },
  {
    image: 'BURGERKING',
    title: 'Burger King',
    distance: '150m',
    time: '20min',
  },
  {
    image: 'KFC',
    title: 'KFC ',
    distance: '150m',
    time: '20min',
  },
  {
    image: 'DOMINOS',
    title: 'DOMINOS ',
    distance: '450m',
    time: '40min',
  },
  {
    image: 'MCDONALDS',
    title: 'McDonalds',
    distance: '150m',
    time: '20min',
  },
  {
    image: 'ARABIAN',
    title: 'Arabian ',
    distance: '100m',
    time: '10min',
  },
];

const HOTEL_CONTENTS_LOGO = [
  {
    image: 'MCDONALDSLOGO',
    title: "Mc Donald's",
    category: 'Burger',
    distance: '2.1KM',
    rating: '5.0',
    time: '10min',
  },
  {
    image: 'PIZZAHUTLOGO',
    title: 'Pizza Hut',
    category: 'Pizza',
    distance: '2.5KM',
    rating: '4.7',
    time: '15min',
  },
  {
    image: 'KFCLOGO',
    title: 'KFC',
    category: 'Fried Chicken',
    distance: '2.5KM',
    rating: '4.7',
    time: '15min',
  },
  {
    image: 'BURGERKINGLOGO',
    title: 'Burger King',
    category: 'Burger',
    distance: '2.5KM',
    rating: '4.7',
    time: '15min',
  },
  {
    image: 'DOMINOSLOGO',
    title: 'Dominos',
    category: 'Pizza',
    distance: '2.5KM',
    rating: '4.7',
    time: '15min',
  },
  {
    image: 'ARABIANLOGO',
    title: 'Arabian',
    category: 'Grilled Chicken',
    distance: '2.5KM',
    rating: '4.7',
    time: '15min',
  },
];

export default {WELCOME_CONTENTS, HOTEL_CONTENTS, HOTEL_CONTENTS_LOGO};
