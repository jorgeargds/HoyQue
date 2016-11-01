import React, { Component } from 'react';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  BackAndroid,
  Navigator
} from 'react-native';
import FBLoginView from './FBLoginView';

class LoginAndroid extends Component {
 constructor(props) {
    super(props);
    this.state = {
      userName: 'Username',
      pass: 'Password'
    };
  }
  _handlePress(){
    this.props.navigator.push({
      title: 'Welcome',
      passProps: {
        userName: 'Jorge'
      }  
    });
  }

  render() {
    var navigator = this.props.navigator;
    var content = null;
    content = <FBLoginView />

    BackAndroid.addEventListener('hardwareBackPress', function() {
       if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;  
    });

    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>BarApp!</Text>
        <View style ={styles.body}>
         <TextInput
          onChangeText={(userName) => this.setState({userName})}
          value={this.state.userName}
        />
        <TextInput
        
          onChangeText={(pass) => this.setState({pass})}
          value={this.state.pass}
        />
    
      <Button
        style={{ marginBottom: 15, marginTop: 10}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        LOG IN
      </Button>
    
      <FBLogin
        buttonView={content}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        permissions={["email","user_friends"]}
        onLogin={function(e){console.log(e)}}
        onLoginFound={function(e){console.log(e)}}
        onLoginNotFound={function(e){console.log(e)}}
        onLogout={function(e){console.log(e)}}
        onCancel={function(e){console.log(e)}}
        onPermissionsMissing={function(e){console.log(e)}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  body: {

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   backdrop: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default LoginAndroid;
