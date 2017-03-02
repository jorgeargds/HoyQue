import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight,
  BackAndroid
} from 'react-native';



import LoginAndroid from './LoginAndroid';
import Welcome from './app/views/Welcome';
import BarsView from './app/views/BarsView';
import BarView from './app/views/BarView';

export default class BarApp extends Component {
  render() {
    const routes = [
    {title: 'LoginAndroid', index: 0}

  ];

    return (
     <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={
        this.navigatorRenderScene
      }
      configureScene={() => ({
         ...Navigator.SceneConfigs.FadeAndroid,
        gestures: {}, // or null
      })
    }
    />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.title){
      case 'LoginAndroid' :
        return(<LoginAndroid navigator={navigator}/>);
      case 'Welcome' :
        return(<Welcome navigator={navigator} route={route} {...route.passProps}/>);
         case 'Bares' :
        return(<BarsView navigator={navigator} route={route}/>);
         case 'Bar' :
        return(<BarView navigator={navigator} route={route}/>);
    }
  }
}

AppRegistry.registerComponent('BarApp', () => BarApp);