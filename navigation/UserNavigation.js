import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../screens/user/UserProfile";
import colors from "../theme/colors";
import FeedScreen from '../screens/Feed';
import QuestionScreen from '../screens/QuestionFeed';
import QuestionFeed from '../screens/QuestionFeed';
import QuestionMainFeed from '../screens/QuestionMainFeed';



const FeedNavigator = createStackNavigator({
    UserProfile: UserProfileScreen,
    Feed: FeedScreen,
    Question: QuestionFeed,
    QuestionFeed: QuestionMainFeed,
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: colors.themeColor.background,
            // headerTintColor: 'white'
            backgroundColor: 'white'
        }
    }
})

export default createAppContainer(FeedNavigator)