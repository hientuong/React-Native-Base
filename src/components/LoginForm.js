
// import React, { Component } from 'react'
// import styled from 'styled-components'

// const LoginContainer = styled.KeyboardAvoidingView`
//     paddingHorizontal: 20
// `

// const LoginInput = styled.TextInput`
//     height: 40
//     backgroundColor: 'rgba(255,255,255,0.2)'
//     marginBottom: 10
//     color: #fff
//     paddingHorizontal: 10
// `

// const LoginButtonContainer = styled.TouchableOpacity`
//     backgroundColor: #2980b9
//     paddingVertical: 15
//     marginBottom: 20
// `

// const LoginButton = styled.Text`
//     textAlign: center
//     color: #fff
//     fontWeight: 700
// `

// export default class LoginForm extends Component {
//     constructor(props) {
//         super(props)
//         this.onSetEmail = this.onSetEmail.bind(this)
//         this.onSetPassword = this.onSetPassword.bind(this)
//         this.onLogginTapped = this.onSetPassword.bind(this)
//     }

//     state = ({
//         email: null,
//         password: null,
//     })

//     onSetEmail = (email) => {
//         this.setState({
//             email: email
//         })
//     }

//     onSetPassword = (password) => {
//         this.setState({
//             password: password
//         })
//     }

//     onLogginTapped = () => {
//         console.log('login tapped')
//         this.props.login(this.state.email, this.state.password)
//     }

//     render() {
//         const login = this.props.login

//         return (
//             <LoginContainer behavior='padding'>
//                 <LoginInput
//                     placeholder='username or email'
//                     placeholderTextColor='rgba(255,255,255,0.7)'
//                     returnKeyType='next'
//                     keyboardType='email-address'
//                     autoCapitalize='none'
//                     autoCorrect={false}
//                     onChangeText={this.onSetEmail}
//                 // onSubmitEditing={(event) => {this.refs.passwordInput.focus()}}
//                 />
//                 <LoginInput
//                     placeholder='password'
//                     placeholderTextColor='rgba(255,255,255,0.7)'
//                     returnKeyType='go'
//                     secureTextEntry
//                     onChangeText={this.onSetPassword}
//                 // ref={'passwordInput'}
//                 />

//                 <LoginButtonContainer onPress={this.onLogginTapped}>
//                     <LoginButton>LOGIN</LoginButton>
//                 </LoginButtonContainer>
//             </LoginContainer>
//         )
//     }
// }