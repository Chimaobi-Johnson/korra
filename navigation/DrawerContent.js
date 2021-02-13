import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image
  } from "react-native";
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MainContext } from '../mainContext';

const menuData = [
    { icon: faUser, name: "Profile", screenName: "UserProfile", key: "1" },
    { icon: faHome, name: "Home", screenName: "Feed", key: "2" },
];
  
const DrawerContent = props => {
    const userData = useContext(MainContext);
    if(!userData) {
       return <Text>Loading...</Text>
    }
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={userData.profilePhoto ? userData.profilePhoto : require('../assets/images/avatar-1577909_640.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>{userData.lastName + ' ' + userData.firstName}</Text>
            </View>
            <FlatList
                data={menuData}
                renderItem={({ item }) => (
                    <DrawerItem
                        navigation={props.navigation}
                        screenName={item.screenName}
                        icon={item.icon}
                        name={item.name}
                        key={item.key}
                    />
            )}
            />
        </View>
    )
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() =>
        navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
      }
    >
      <Text><FontAwesomeIcon style={styles.icon} icon={icon} /></Text>
      <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>
);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.43)",
      paddingTop: 70,
      paddingLeft: 20
    },
    menuItem: {
      flexDirection: "row"
    },
    menuItemText: {
      fontSize: 15,
      fontWeight: "300",
      margin: 15
    },
    menuItem: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 5
    },
    menuItemText: {
      fontSize: 15,
      fontWeight: "300",
      margin: 15
    },
    icon: {
        color: '#464646',
        marginTop: 3
    },
    profileContainer: {
        borderBottomColor: '#eaeaea',
        borderBottomWidth: 1
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 20,
        paddingBottom: 15
    }
});

  

export default DrawerContent;
