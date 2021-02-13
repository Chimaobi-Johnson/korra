import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
  } from "react-native";
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

  const menuData = [
    { icon: faUser, name: "Profile", screenName: "UserProfile", key: "1" },
    { icon: faHome, name: "Home", screenName: "Feed", key: "2" },
  ];
  
const DrawerContent = props => (
    <View style={styles.container}>
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
);

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
      paddingTop: 70
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
        color: '#fff5b1',
        marginTop: 3
    }
});

  

export default DrawerContent;
