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



class AppMenu extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: false,
	      barName: ''
	    };
	 }
	 updateMenuState(isOpen) {
	    this.setState({ isOpen});
	 }
	 //  callApi(){
	 //  	//IP ADDRESS MARIA 192.168.1.5
		//  return fetch('http://192.168.86.108:8080/api/bar',{
		//  	 method: "GET",
		// 	 headers: {
		// 	 	'Accept': 'application/json',
  //   			'Content-Type': 'application/json',
		// 	 }
		//  })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //     		this.setState({
		// 		barName: responseJson[0].name,
		// 	});
  //       	console.log(responseJson[0].name);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
	 //   }

	onMenuItemSelected = (item) => {
		this.setState({ isOpen: false})
    	this.props.navigator.push({
       		title: item
     	});
  	} 

	render(){
		const titleConfig = {
   		 title: 'BarApp',
  		};

		const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;

		return(
		<SideMenu 
		 menu={<View style={{flex : 1}}>{menu}</View>}
		 isOpen={this.state.isOpen}
		 onChange={(isOpen) => this.updateMenuState(isOpen)}	
		>
		<NavigationBar
        	title={titleConfig}
        	leftButton={
        	<Icon.Button
	            onPress={() => {
	               this.setState({
				      isOpen: !this.state.isOpen,
				    });
	              }}
	              backgroundColor={"#0074D9"} name={"menu"}>
            </Icon.Button>
        	} 
        	/>
        	<View style={styles.container}>
        		 {this.props.children}
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
export default AppMenu;
