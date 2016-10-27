/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

class Menu extends Component {
  render(){
    const window = Dimensions.get('window');
    console.log(this.props.navigator)
    return (
        <View style={styles.menu}>
          <Text style={styles.fontStyle}>Item1</Text>
          
           <Text style={styles.fontStyle}>Item2</Text>
          
           <Text style={styles.fontStyle}>Item3</Text>
          
           <Text style={styles.fontStyle}>Item4</Text>
          
           <Text style={styles.fontStyle}>Item5</Text>
          
        </View>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#3b3a30',
    padding: 20,
  },
  fontStyle: {
    color : '#FFFFFF',
    padding: 15
  }
});

export default Menu;