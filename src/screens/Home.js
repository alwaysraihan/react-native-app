import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react'
import Menu from './component/Menu';

const Home = (props) => {
  const description= 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
    
        <Image
         style={styles.headerImage}
         resizeMode="contain"
        source={require("../../assets/computer.jpg")}
        />
        <Text style={styles.headerTitle}>Welcome To</Text>
        <Text 
        style={[
          styles.headerTitle,
          {
            fontSize:33,
            color: "#4c5dab",
            marginTop: 0,
            },
            ]}>
             {props.tutorialName}
          </Text>
          <Text style={styles.paraStyle}>
            {description}
            
          </Text>
      </View>
      <View>
      <Menu/>
      </View>
    </View>
      );
    }
    
    const styles = StyleSheet.create({
      maincontainer: {
       height:'100%',
       display:'flex',
       justifyContent:'space-between',
       paddingHorizontal:20,
       backgroundColor:'#fff',
       textAlign:'center',
       
      },
      homeTop:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:10,
      },
      headerTitle:{
        fontSize:30,
        color:'#344055',
        textTransform:'uppercase',
      },
      paraStyle:{
        textAlign:'left',
        fontSize:19,
        color:'#7d7d7d',
        marginTop:30,
        paddingBottom:50,
        lineHeight:26,
      },
    
      headerImage: {
    height:undefined,
    width:'100%',
    aspectRatio:1,
    display:'flex',
    alignItems:'stretch',
    marginTop:50,
    borderRadius:20
      },
    
    });
    
export default Home
