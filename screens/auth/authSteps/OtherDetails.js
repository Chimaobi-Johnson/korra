import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/UI/Header';
import CameraButton from '../../../components/UI/CameraButton';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Input from '../../../components/UI/Input';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';
import { APP_URL } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../../store/actions';

const loadingGif = require('../../../assets/images/gifs/Eclipse-1s-200px.gif');

const OtherDetails = props => {

    const [groups, setGroup] = useState([]);
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [interests, setInterests] = useState([]); 
    const [loading, setLoading] = useState(false);


    const addGroupHandler = (itemValue) => {
        const groupArr = [ ...groups];
        if(groupArr.includes(itemValue)) {
            return
        } else {
            groupArr.push(itemValue);
            setGroup(groupArr);
        }
    }

    const addInterestHandler = (itemValue) => {
        const interestArr = [ ...interests];
        if(interestArr.includes(itemValue)) {
            return
        } else {
            interestArr.push(itemValue);
            setInterests(interestArr);
        }
    }

    const removeInterestHandler = (itemName) => {
        const interestArr = [...interests];
        const filteredArr = interestArr.filter(item => item !== itemName);
        setInterests(filteredArr);
    }

    const removeGroupHandler = (itemName) => {
        const groupArr = [...groups];
        const filteredArr = groupArr.filter(item => item !== itemName);
        setGroup(filteredArr);
    }

    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const submitForm = () => {
        const formData = {
            phone,
            country,
            groups,
            interests,
            userId: authState.userId
        }
        setLoading(true);
        axios.post(`${APP_URL}/auth/register/details`, formData)
        .then(res => {
            setLoading(false)
            dispatch(loginSuccess(res));
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }



    return (
        <View style={styles.wrapper}>
            {loading ? <View style={styles.loadingContainer}>
                <Image style={styles.loadingGif} source={loadingGif} />
                <Text style={styles.loadingText}>Saving data....</Text>
                </View> 
            : null}
            <View style={styles.nextButtonContainer}>
               <Button title={loading ? "Saving..." : "Save"} onPress={submitForm} style={styles.nextButton} />
            </View>
            <View>
                <Input
                     id="phone" 
                     label="Enter Phone Number" 
                     keyboardType="default"  
                     returnKeyType="next"
                     returnKeyLabel="Next"
                     autoCapitalize="words"
                     value={phone}
                     onChangeText={(text) => setPhone(text)}
                     />
                <Input
                     id="country" 
                     label="Enter Country" 
                     keyboardType="default"  
                     returnKeyType="next"
                     returnKeyLabel="Next"
                     autoCapitalize="words"
                     value={country}
                     onChangeText={(text) => setCountry(text)}
                     />
                    <View style={styles.pickerContainer}>
                    <Text style={{ color: '#ccc', marginTop: 10, marginBottom: 5 }}>Add Group</Text>
                        <Picker
                            selectedValue=""
                            style={{ height: 20, width: 150, color: '#fff' }}
                            onValueChange={(itemValue, itemIndex) => addGroupHandler(itemValue)}
                        >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Group One" value="Group One" />
                            <Picker.Item label="Group Two" value="Group Two" />
                            <Picker.Item label="Group Three" value="Group Three" />
                        </Picker>
                    </View>
                    <View style={styles.itemsContainer}>
                        {groups.map(name => <TouchableOpacity key={name} onPress={() => removeGroupHandler(name)}><Text style={styles.itemName}>{name}</Text></TouchableOpacity>)}
                    </View>
                    <View style={styles.pickerContainer}>
                    <Text style={{ color: '#ccc', marginTop: 10, marginBottom: 5 }}>Add Interest</Text>
                        <Picker
                            selectedValue=""
                            style={{ height: 20, width: 150, color: '#fff' }}
                            onValueChange={(itemValue, itemIndex) => addInterestHandler(itemValue)}
                        >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Interest One" value="Interest One" />
                            <Picker.Item label="Interest Two" value="Interest Two" />
                            <Picker.Item label="Interest Three" value="Interest Three" />
                        </Picker>
                    </View>
                    <View style={styles.itemsContainer}>
                        {interests.map(name => <TouchableOpacity key={name} onPress={() => removeInterestHandler(name)}><Text style={styles.itemName}>{name}</Text></TouchableOpacity>)}
                    </View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
    nextButtonContainer: {
        width: 100,
        alignSelf: 'flex-end'
    },
    nextButton: {
        alignSelf: 'flex-end',
        width: 70,
        height: 70,
    },
    itemsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemName: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
        paddingRight: 7,
        margin: 3,
        fontSize: 10,
        borderWidth: 1,
        borderColor: '#eaeaea',
        color: '#eaeaea',
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        backgroundColor: '#000000ab',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        zIndex: 10
    },
    loadingGif: {
        width: 100,
        height: 100,
    },
    loadingText: {
        textAlign: 'center',
        padding: 20,
        color: '#fff'
    }
})

export default OtherDetails;