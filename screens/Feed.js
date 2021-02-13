import React, { useState, useContext } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreatePost from "../components/Post/CreatePost/CreatePost";
import { MainContext } from '../mainContext';


const Feed = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const userData = useContext(MainContext);


    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

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
                <CreatePost modalVisible={modalVisible} toggleModal={toggleModal} />
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
                <Text><FontAwesomeIcon style={styles.icon} icon={faPlus} /></Text>
            </TouchableOpacity>
            <View>
               <FooterMenu />
            </View>
        </View>
    )
}

Feed.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: colors.headingColor1,
        },
        headerLeft: () => (
            <TouchableOpacity
              onPress={() => {navData.navigation.toggleDrawer()}}
              style={styles.headerPictureContainer}
            >
            <Image style={styles.headerPicture} source={require('../assets/images/priscilla-du-preez-iprSslEBheg-unsplash.jpg')} />
            </TouchableOpacity>
          ),
        // headerTintColor: 'blanchedalmond'
        headerTintColor: '#fff'
    }
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
    },
    headerPictureContainer: {
        backgroundColor: 'pink',
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 15
    },
    headerPicture: {
        width: 40,
        height: 40,
        borderRadius: 100
    }
})

export default Feed;
