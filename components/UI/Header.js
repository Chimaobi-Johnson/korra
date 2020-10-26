import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = props => {
    const { size, color, text, style } = props;
return <Text style={{
    fontSize: size === 'lg' ? 18 : size === 'sm' ? 14 : 16,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: color ? color : '#000',
    ...style
    }}>{text}</Text>
}

// const styles = StyleSheet.create({
//     header: 
// })

export default Header