import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import { login } from '../actions/auth/auth.service';

const Container = styled.View`
	flex: 1
	backgroundColor: #3498db
`

const LogoContainer = styled.View`
	alignItems: center
	flexGrow: 1
	justifyContent: center
`

const Logo = styled.Image`
	width: 100
	height: 100
`

const Title = styled.Text`
	color: #FFF
	marginTop: 10
	width: 160
	textAlign: center
	opacity: 0.9
`

const LoginContainer = styled.KeyboardAvoidingView`
    paddingHorizontal: 20
`

const LoginInput = styled.TextInput`
    height: 40
    backgroundColor: 'rgba(255,255,255,0.2)'
    marginBottom: 10
    color: #fff
    paddingHorizontal: 10
`

const LoginButtonContainer = styled.TouchableOpacity`
    backgroundColor: #2980b9
    paddingVertical: 15
    marginBottom: 20
`

const LoginButton = styled.Text`
    textAlign: center
    color: #fff
    fontWeight: 700
`

class Login extends Component {
	constructor(props) {
		super(props);
		this.onSetEmail = this.onSetEmail.bind(this)
		this.onSetPassword = this.onSetPassword.bind(this)
		this.onLoginTapped = this.onLoginTapped.bind(this)
	}

	state = {
		email: null,
		password: null
	}

	onSetEmail = (email) => {
		this.setState({email: email})
	}

	onSetPassword = (password) => {
		this.setState({password: password})
	}

	onLoginTapped = () => {
		this.props.login(this.state.email, this.state.password)
	}

	render() {
		return (
			<Container>
				<LogoContainer>
					<Logo source={require('../assets/images/Octocat.png')} />
					<Title>An app made for github using React Native</Title>
				</LogoContainer>
				// Login from

				        <LoginContainer behavior='padding'>
                <LoginInput
                    placeholder='username or email'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={this.onSetEmail}
                // onSubmitEditing={(event) => {this.refs.passwordInput.focus()}}
                />
                <LoginInput
                    placeholder='password'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType='go'
                    secureTextEntry
                    onChangeText={this.onSetPassword}
                // ref={'passwordInput'}
                />
				
                <LoginButtonContainer onPress={this.onLoginTapped}>
                    <LoginButton>LOGIN</LoginButton>
                </LoginButtonContainer>
            </LoginContainer>
			</Container>
		);
	}

}

function mapStateToProps(store, ownProps) {
	return {
		error: store.error,
		auth: store.auth
	};
}

function mapDispatchToProps(dispatch) {
	return { 
		login: (email, password) => {
			dispatch(login(email, password))
		}
	 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
