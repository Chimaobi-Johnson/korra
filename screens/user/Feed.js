import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from "react-native";
import FooterMenu from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import colors from "../../theme/colors";

const Feed = props => {

    return (
        <View>
        <ScrollView style={styles.wrapper}>
           <Post />
           <Post />
           <Post />
        </ScrollView>
        <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Feed;
