import { StyleSheet } from 'react-native'

export const defaultNavigator = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarTransparent: true,
    navBarTextColor: '#FFFFFF', // change the text color of the title ( recommend across pushes)
    navBarButtonColor: '#fff', // change color of nav bar buttons (eg. the back button) (recommend across pushes)
    navBarHiddent: false, // make the nav bar hidden
    statusBarTextColorScheme: 'light'
}

export const defaultsTabs = {
    tabBarButtonColor: 'white',
    tabBarSelectedButtonColor: 'rgb(171, 171, 171)',
    tabBarBackgroundColor: 'black'
}

export const globalStyle = StyleSheet.create({
    btn: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 2,
        borderColor: '#FFF',
        padding: 10
    },

    btnText: {
        textAlign: 'center',
        fontSize: 14
    }
})