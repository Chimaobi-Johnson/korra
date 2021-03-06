import React, { useState, useContext, useEffect, useCallback } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import FooterMenu from "../components/Footer/Footer";
import Post from "../components/Post/Post";
import colors from "../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreatePost from "../components/Post/CreatePost/CreatePost";
import { MainContext } from '../mainContext';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
  

const Feed = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

        
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const userData = useContext(MainContext);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchQuestions());
    }, [])

    const questionsData = useSelector(state => state.app.questions.data);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    console.log(questionsData)

    // useEffect(() => {
    //     // if user doesnt load within 30secs log user out
    //     setTimeout(() => {
    //         dispatch(actions.logout());
    //     }, 30000);
    // }, [])

    if(!userData) {
        return <Text>Loading user...</Text>
    }

    if(!questionsData) {
        return <Text>Loading data...</Text>
    }

    if(questionsData.length === 0) {
        return <Text>No questions available</Text>
    }


    const renderPosts = ({ item }) => {
        return (
            <Post userId={userData._id} question={item} gotoQuestion={() => props.navigation.navigate({routeName: 'Question', params : {
                questionId: item._id,
                question: item.title
            }})} />
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.wrapper} refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <View style={styles.wrapper}>
                <FlatList keyExtractor={(item, index) => item._id} data={questionsData} renderItem={renderPosts} />
                <CreatePost modalVisible={modalVisible} userId={userData._id} toggleModal={toggleModal} />
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
                <Text><FontAwesomeIcon style={styles.icon} icon={faPlus} /></Text>
            </TouchableOpacity>
            <View>
               <FooterMenu />
            </View>
        </ScrollView>
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
            <Image style={styles.headerPicture} source={require('../assets/images/avatar-1577909_640.png')} />
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
