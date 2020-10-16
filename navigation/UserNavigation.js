import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "@react-navigation/compat";

// import { createStackNavigator, createSwitchNavigator } from '@react-navigation/stack';
import UserProfileScreen from "../screens/user/UserProfile";
import AuthScreen from "../screens/auth/Login";
import colors from "../theme/colors";
import FeedScreen from '../screens/Feed';
import QuestionScreen from '../screens/QuestionFeed';
import QuestionFeed from '../screens/QuestionFeed';
import QuestionMainFeed from '../screens/QuestionMainFeed';


const UserNavigator = createStackNavigator({
    // UserProfile: UserProfileScreen,
    // Feed: FeedScreen,
    // Question: QuestionFeed,
    QuestionFeed: QuestionMainFeed
}, {
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: colors.themeColor.background,
            // headerTintColor: 'white'
            backgroundColor: 'white'
        }
    }
})

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen
// })

// const MainNavigator = createSwitchNavigator({
//     Auth: AuthNavigator,
//     User: UserNavigator
// })

export default createAppContainer(UserNavigator)