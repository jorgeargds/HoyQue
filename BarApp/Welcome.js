import React, { Component } from 'react';
import {
	Text,
	View,
	Navigator,
	StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from 'react-native-side-menu'
import NavigationBar from 'react-native-navbar'
import Menu from './Menu' 



class Welcome extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: false,
	      barName: ''
	    };
	 }
	   updateMenuState(isOpen) {
	    this.setState({ isOpen, });
	  }
	  callApi(){
	  	//IP ADDRESS MARIA 192.168.1.5
		 return fetch('http://192.168.86.97:8080/api/bar',{
		 	 method: "GET",
			 headers: {
			 	'Accept': 'application/json',
    			'Content-Type': 'application/json',
			 }
		 })
      .then((response) => response.json())
      .then((responseJson) => {
      		this.setState({
				barName: responseJson[0].name,
			});
        	console.log(responseJson[0].name);
      })
      .catch((error) => {
        console.error(error);
      });
	  }
		 
	render(){
	  

	
//Se puede utilizar para hacer un menu y hacer un logout
		// const rightButtonConfig = {
  		//   title: 'Logout',
  		//   handler: () => alert('hello!'),
 		// 	};

		const titleConfig = {
   		 title: 'BarApp',
  		};

		const menu = <Menu navigator={this.props.navigator}/>;

		return(
		<SideMenu 
		ref ="rootSidebarMenu"
		 menu={<View style={{flex : 1}}>{menu}</View>}
		 isOpen={this.state.isOpen}
		 onChange={(isOpen) => this.updateMenuState(isOpen)}
		 bounceBackOnOverdraw={false}
		 disableGestures={true}
		>
		<NavigationBar
        	title={titleConfig}
        	leftButton={
        	<Icon.Button
	            onPress={() => {
	               this.setState({
				      isOpen: !this.state.isOpen,
				    });
					this.callApi();
	              }}
	              backgroundColor={"#0074D9"} name={"menu"}>
            </Icon.Button>
        	} 
        	/>
        	<View style={styles.container}>
       			<Text>Bienvenidos a la {this.state.barName}</Text>
            </View>


        </SideMenu>
		);
	}

	
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  }
 });
export default Welcome;
