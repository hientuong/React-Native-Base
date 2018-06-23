import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';

import { globalStyle, defaultNavigator } from '../utils/style';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LinearGradient
				colors={['#3A1C71', '#D76D77', '#FFAF7B']}
				style={styles.homeContainer}
			>
				<StatusBar barStyle="light-content" />
				<Text style={styles.welcomeText}>
					Login
				</Text>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30
	},
	welcomeText: {
		// fontFamily: 'Norwester',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#fff',
		fontSize: 30,
		textAlign: 'center'
	},
});
function mapStateToProps(state, ownProps) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
