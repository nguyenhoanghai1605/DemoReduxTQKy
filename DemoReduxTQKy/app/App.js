import React, {Component} from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './Home/HomeScreen';
import DetailScreen from './Detail/DetailScreen';

import store from './Store';

/** React Navigation */
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
const RootStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    DetailScreen: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
const AppContainer = createAppContainer(RootStack);


class App extends Component {
  render () {  
    return (
      <Provider store={store}>
        {/* <HomeScreen /> */}
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;