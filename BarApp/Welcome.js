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
	      isOpen: false
	    };
	 }

	   updateMenuState(isOpen) {
	    this.setState({ isOpen, });
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
					
	              }}
	              backgroundColor={"#3b3a30"} name={"menu"}>
            </Icon.Button>
        	} 
        	/>
        	<View style={styles.container}>
       			<Text>Este es el contenido</Text>
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
