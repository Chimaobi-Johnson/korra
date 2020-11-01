import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => (
    AsyncStorage.getItem('fall')
    .then(token => {
        console.log(token)
        if(token !== null || token !== undefined) {
            return token
        } else {
            return null
        }
    })
    .catch(err => {
        console.log("error fetching token")
    })
)