import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    FlatList
} from "react-native";
import FooterMenu from "../components/Footer/Footer";
import Post from "../components/Post/Post";
import colors from "../theme/colors";

import questions from "../data/questions";
import Question from "../models/Question";


const Feed = props => {

    const renderPosts = ({ item }) => {
        return (
            <Post />
        )
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                <FlatList data={questions} renderItem={renderPosts} />
            </View>
            <View>
               <FooterMenu />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})

export default Feed;
