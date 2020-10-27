import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, KeyboardAvoidingView, StyleSheet, Image, Button, ImageBackground } from "react-native";
import { Picker } from '@react-native-community/picker';
import Header from "../../components/UI/Header";
import Input from "../../components/UI/Input";
import colors from "../../theme/colors";

const backImage = require('../../assets/images/priscilla-du-preez-iprSslEBheg-unsplash.jpg')
const backImage2 = require('../../assets/images/smiling-4654734_1280.jpg');
const backImage3 = require('../../assets/images/pexels-luis-quintero-1408196.jpg');
const logo = require('../../assets/images/korralogomain2.png')

const pictureStack = [backImage, backImage2, backImage3];

const AuthPage = props => {
    
    const [currentPicture, setNewPicture] = useState(backImage);
    const [password, setPassword] = useState("");

    useEffect(() => {
        // imageSlider();
    }, [pictureStack])

    const imageSlider = () => {
        setInterval(() => {
           const cp = pictureStack.pop()
           pictureStack.unshift(cp)
           setNewPicture(cp) 
        }, 15000);
    }
    const [isLogin, setLogin] = useState(true);
    const [gender, setGender] = useState("Male");

    console.log(password)

   const renderAuthComponent = () => {
    if(isLogin) {
        return (
            <ImageBackground source={backImage} style={styles.backgroundImage}>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.loginWithContainer}>
                        <Header color="#ffffffc7" size="lg" text="LOGIN" />
                        <Text style={styles.altLoginText}>Login using email</Text>
                        <Text style={styles.altLoginText}>Login using facebook</Text>
                    </View>
                    <View>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.formContent}>
                        <Input 
                            id="email" 
                            label="Email" 
                            keyboardType="email-address" 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            required 
                            email
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid email"
                            onInputChange={() => {}}
                            initialValue="" 
                        /> 
                        <Input 
                            id="password" 
                            label="Password" 
                            keyboardType="password-address" 
                            required 
                            password
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid password"
                            onInputChange={() => {}}
                            initialValue="" 
                        />
                        </KeyboardAvoidingView> 
                        <Button title="Login" onPress={() => {}} />
                        <Button onPress={() => setLogin(!isLogin)} title="Switch to Sign Up" color="transparent" />
                    </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
    } else {
        return (
            <ImageBackground source={backImage3} style={styles.backgroundImage}>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <KeyboardAvoidingView style={styles.formContainer}>
                <ScrollView>
                    <View style={styles.loginWithContainer}>
                        <Header color="#ffffffc7" size="lg" text="REGISTER" />
                        <Text style={styles.altLoginText}>All fields are compulsory</Text>
                    </View>
                    <View>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.formContent}>
                        <Input 
                            id="firstName" 
                            label="First Name" 
                            keyboardType="default" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            text
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid text"
                            onInputChange={() => {}}
                            initialValue="" 
                        /> 
                        <Input 
                            id="lastName" 
                            label="Last Name" 
                            keyboardType="default" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            text
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid text"
                            onInputChange={() => {}}
                            initialValue="" 
                        /> 
                        <Input 
                            id="email" 
                            label="Email" 
                            keyboardType="email-address" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            email
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid email"
                            onInputChange={() => {}}
                            initialValue="" 
                        /> 
                        <View style={styles.pickerContainer}>
                        <Text style={{ color: '#ccc', marginTop: 10, marginBottom: 5 }} >Gender</Text>
                        <Picker
                            selectedValue={gender}
                            style={{ height: 20, width: 150, color: '#fff' }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        </View>
                        <Input 
                            id="password" 
                            label="Password" 
                            keyboardType="password-address" 
                            required 
                            password
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            returnKeyType="next"
                            returnKeyLabel="next"
                            autoCapitaliza="none"
                            errorMessage="Please enter a valid password"
                            onInputChange={() => {}}
                            initialValue="" 
                        />
                        <Input 
                            id="confirmPassword" 
                            label="Confirm Password" 
                            keyboardType="password-address" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            password
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            autoCapitaliza="none"
                            errorMessage="The two passwords does not match"
                            onInputChange={() => {}}
                            initialValue="" 
                        />
                        </KeyboardAvoidingView> 
                        <Button title="Register" onPress={() => {}} />
                        <Button onPress={() => setLogin(!isLogin)} title="Switch to Sign In" color="transparent" />
                    </ScrollView>
                    </View>

                </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
   }
    
    return (
    <View style={styles.wrapper} keyboardVerticalOffset={50} behavior="padding">
        {renderAuthComponent()}
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        height: '100%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        // alignContent: 'flex-end',
        justifyContent: 'space-between'
    },
    formContainer: {
        margin: 10,
        marginBottom: 50,
        backgroundColor: '#0000007a',
        height: 550,
        padding: 20,
        justifyContent: 'space-between',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    formContent: {
        marginBottom: 10,
        color: '#fff'
    },
    loginWithContainer: {
        // marginBottom: 70,
        textAlign: 'center',
        alignItems: 'center'
    },
    altLoginText: {
        color: '#989898'
    },
    imageContainer: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 20
    },
    logo: {
        width: '100%',
        height: '100%',
    }
})

export default AuthPage;