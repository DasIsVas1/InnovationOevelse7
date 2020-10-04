import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import PlatformScreen from './components/PlatformScreen';
import {createAppContainer} from "react-navigation";


const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Profile: {
            screen: ProfileScreen
        },
        Platform: {
            screen: PlatformScreen
        }
    });

const AppContainer = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});