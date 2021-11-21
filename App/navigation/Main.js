import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Post } from '../screens/Post';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Lista de posts" component={List} />
    <MainStack.Screen name="Post" component={Post} />
  </MainStack.Navigator>
);
