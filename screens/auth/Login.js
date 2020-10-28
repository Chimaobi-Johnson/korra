import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from 'react-redux';
import { ScrollView, View, Text, KeyboardAvoidingView, StyleSheet, Image, Button, ImageBackground, Alert } from "react-native";
import { Picker } from '@react-native-community/picker';
import Header from "../../components/UI/Header";
import Input from "../../components/UI/Input";
import colors from "../../theme/colors";
import * as authActions from '../../store/actions'

const backImage = require('../../assets/images/priscilla-du-preez-iprSslEBheg-unsplash.jpg')
const backImage2 = require('../../assets/images/smiling-4654734_1280.jpg');
const backImage3 = require('../../assets/images/pexels-luis-quintero-1408196.jpg');
const logo = require('../../assets/images/korralogomain2.png')
const loadingGif = require('../../assets/images/gifs/Eclipse-1s-200px.gif');

const pictureStack = [backImage, backImage2, backImage3];


const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.inputIdentifier]: {
            ...state[action.inputIdentifier],
            value: action.value,
            isValid: action.isValid,
            errorMessage: action.errorMessage
        }
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};


const AuthPage = props => {
    
    const [currentPicture, setNewPicture] = useState(backImage);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
    const [gender, setGender] = useState("");

    const [inputState, dispatchAction] = useReducer(inputReducer, {
        firstName: {
            value: '',
            isValid: false,
            touched: false
        },
        lastName: {
            value: '',
            isValid: false,
            touched: false
        },
        email: {
            value: '',
            isValid: false,
            touched: false
        },
        password: {
            value: '',
            isValid: false,
            touched: false
        },
        confirmPassword: {
            value: '',
            isValid: false,
            touched: false
        },
      });

      console.log(inputState)
    
      const textChangeHandler = (text, inputIdentifier) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        let errorMessage = ''
        if (text.trim().length === 0) {
          isValid = false;
          errorMessage = 'field cannot be empty'
        }
        if (inputIdentifier === 'email' && !emailRegex.test(text.toLowerCase())) {
          isValid = false;
          errorMessage = 'email format is incorrect'
        }
        if (text.trim().length < 3) {
          isValid = false;
          errorMessage = 'text is too short'
        }
        if (text.trim().length > 200) {
          isValid = false;
          errorMessage = 'text is too long'
        }
        dispatchAction({ type: INPUT_CHANGE, value: text, inputIdentifier: inputIdentifier, errorMessage: errorMessage, isValid: isValid });
      };
    
      const lostFocusHandler = () => {
        dispatchAction({ type: INPUT_BLUR });
      };


    const [ regLoading, setRegLoading ] = useState(false);
    const [ loginLoading, setLoginLoading ] = useState(false);


    const dispatch = useDispatch();

    const loginUser = () => {
        setLoginLoading(true);
        const formData = {
            email: email,
            password: password
        }
        dispatch(authActions.login(formData))
    }

    const registerUser = () => {
        const result = Object.keys(inputState).map(input => (
            inputState[input].isValid === false ? false : true
        ))
        if(result.includes(false)) {
            console.log("error")
            Alert.alert("One of the fields is not correct")
        } else {
            if(inputState.password.value !== inputState.confirmPassword.value) {
                Alert.alert("Passwords do not match!")
                return
            }
            if(gender === "") {
                Alert.alert("Please select gender")
            } else {
                setRegLoading(true)
                const formData = {
                    firstName: inputState.firstName.value,
                    lastName: inputState.lastName.value,
                    gender: gender,
                    email: inputState.email.value,
                    password: inputState.password.value
                }
                console.log(formData)
                dispatch(authActions.signUp(formData))
            }
        }

    }

   const renderAuthComponent = () => {
    if(isLogin) {
        return (
            <ImageBackground source={backImage} style={styles.backgroundImage}>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.formContainer}>
                    {loginLoading ? <View style={styles.loadingContainer}>
                        <Image style={styles.loadingGif} source={loadingGif} />
                        <Text style={styles.loadingText}>Checking credentials...</Text>
                        </View> 
                    : null}
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
                            autoCapitaliza="none"
                            initialValue="" 
                            onChangeText={(text) => setEmail(text)}
                        /> 
                        <Input 
                            id="password" 
                            label="Password" 
                            keyboardType="password-address" 
                            required 
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            autoCapitaliza="none"
                            initialValue=""
                            onChangeText={(text) => setPassword(text)} 
                        />
                        </KeyboardAvoidingView> 
                        <Button title="Login" onPress={loginUser} />
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
                {regLoading ? <View style={styles.loadingContainer}>
                    <Image style={styles.loadingGif} source={loadingGif} />
                    <Text style={styles.loadingText}>Signing you up...just a moment :)</Text>
                    </View> 
                : null}
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
                            autoCapitalize="words"
                            value={inputState.firstName.value}
                            onChangeText={(text) => textChangeHandler(text, 'firstName')}
                            onBlur={lostFocusHandler}
                            error={inputState.firstName.errorMessage}
                        /> 
                        <Input 
                            id="lastName" 
                            label="Last Name" 
                            keyboardType="default" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            autoCapitalize="words"
                            value={inputState.lastName.value}
                            onChangeText={(text) => textChangeHandler(text, 'lastName')}
                            initialValue="" 
                            error={inputState.lastName.errorMessage}
                        /> 
                        <Input 
                            id="email" 
                            label="Email" 
                            keyboardType="email-address" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            autoCapitalize="none"
                            errorText="Please enter a valid email"
                            onChangeText={(text) => textChangeHandler(text, 'email')}
                            initialValue="" 
                            value={inputState.email.value}
                            error={inputState.email.errorMessage}
                        /> 
                        <View style={styles.pickerContainer}>
                        <Text style={{ color: '#ccc', marginTop: 10, marginBottom: 5 }} >Gender</Text>
                        <Picker
                            selectedValue={gender}
                            style={{ height: 20, width: 150, color: '#fff' }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        </View>
                        <Input 
                            id="password" 
                            label="Password" 
                            required 
                            password
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            returnKeyType="next"
                            returnKeyLabel="next"
                            autoCapitalize="none"
                            value={inputState.password.value}
                            error={inputState.password.errorMessage}
                            onChangeText={(text) => textChangeHandler(text, 'password')}
                            initialValue="" 
                        />
                        <Input 
                            id="confirmPassword" 
                            label="Confirm Password" 
                            required 
                            returnKeyType="next"
                            returnKeyLabel="next"
                            password
                            minLength={5}
                            keyboardType="default"
                            secureTextEntry
                            autoCapitalize="none"
                            value={inputState.confirmPassword.value}
                            error={inputState.confirmPassword.errorMessage}
                            onChangeText={(text) => textChangeHandler(text, 'confirmPassword')}
                            initialValue="" 
                        />
                        </KeyboardAvoidingView> 
                        <Button title='Register' onPress={registerUser} />
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

export default AuthPage;