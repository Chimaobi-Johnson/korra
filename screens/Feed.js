import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity
} from "react-native";
import FooterMenu from "../components/Footer/Footer";
import Post from "../components/Post/Post";
import colors from "../theme/colors";

import questions from "../data/questions";
import Question from "../models/Question";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Feed = props => {

    const renderPosts = ({ item }) => {
        return (
            <Post gotoQuestion={() => props.navigation.navigate({routeName: 'Question', params : {
                questionId: '1234567895'
            }})} />
        )
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                <FlatList data={questions} renderItem={renderPosts} />
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text><FontAwesomeIcon style={styles.icon} icon={faPlus} /></Text>
            </TouchableOpacity>
            <View>
               <FooterMenu />
            </View>
        </View>
    )
}

Feed.navigationOptions = {
    headerTitle: 'Feed',
    headerStyle: {
        backgroundColor: colors.headingColor1,
    },
    // headerTintColor: 'blanchedalmond'
    headerTintColor: '#fff'
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        bottom: 60,
        right: 10,
        backgroundColor: colors.headingColor2,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 10,
        color: '#fff',
        alignSelf: 'center'
    }
})

export default Feed;
