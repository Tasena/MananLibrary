import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchTransactionScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class App extends Component {
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  search : {screen : SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)