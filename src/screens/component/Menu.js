import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

const Menu=()=>{
    const navigation = useNavigation()
    return <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuContainer}
        onPress={() => navigation.navigate('Course')}>
         <Text>Course</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuContainer}
        onPress={() => navigation.navigate('User')}>
         <Text>User</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuContainer}
        onPress={() => navigation.navigate('About')}>
         <Text>About</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuContainer}
        onPress={() => navigation.navigate('Contact')}>
         <Text>Contact</Text>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({})
export default Menu