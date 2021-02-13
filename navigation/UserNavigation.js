import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import UserProfileScreen from "../screens/user/UserProfile";
import colors from "../theme/colors";
import FeedScreen from '../screens/Feed';
import QuestionScreen from '../screens/QuestionFeed';
import QuestionFeed from '../screens/QuestionFeed';
import QuestionMainFeed from '../screens/QuestionMainFeed';
import DrawerContent from './DrawerContent';



const FeedNavigator = createStackNavigator({
    Feed: FeedScreen,
    Question: QuestionFeed,
    QuestionFeed: QuestionMainFeed,
    UserProfile: UserProfileScreen,
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: colors.themeColor.background,
            // headerTintColor: 'white'
            backgroundColor: 'white'
        }
    }
})

const MainNavigator = createDrawerNavigator({
    FeedNav: FeedNavigator
},
{
    initialRouteName: 'FeedNav',
    contentComponent: DrawerContent
})

export default createAppContainer(MainNavigator)