import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { List } from '../screens/List';
import { Post } from '../screens/Post';

const Stack = createNativeStackNavigator();

export const Main = () => (



  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Curriculo" component={List}/>
    <Stack.Screen name="Projetos" component={Post} />
  </Stack.Navigator>

);
