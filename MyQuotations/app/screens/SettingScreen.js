import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';

function SettingScreen() {
    const handleVersionPress = ()=>{console.log("Saving")};
  return (
    <ImageBackground style={styles.background} source={require("../assets/bg.png")}>  
        <ScrollView style = {styles.scroll}>
            <View style={styles.centerText}><Text style={styles.title}>Settings</Text></View>
            <View style={styles.centerText}><Text style={styles.des}>Setup backend service details</Text></View>
            <View><Text style={styles.srvdes}>Server Details</Text></View>
            <View><TextInput placeholder='Host/IP' underlineColorAndroid='transparent' style={styles.TextInput}></TextInput></View>
            <View><TextInput placeholder='Client' underlineColorAndroid='transparent' style={styles.TextInput}></TextInput></View>
            <View><Text style={styles.srvdes}>User Details</Text></View>
            <View><TextInput placeholder='Username' underlineColorAndroid='transparent' style={styles.TextInput}></TextInput></View>
            <View><TextInput secureTextEntry={true} placeholder='Password' underlineColorAndroid='transparent' style={styles.TextInput}></TextInput></View>
        </ScrollView>

        <TouchableOpacity onPress={()=>{console.log("Saving")}} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <Text onPress={handleVersionPress} style={styles.version} >version 1.0</Text>
        <StatusBar style="auto" />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:"center"
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    abs:{
      position:'absolute'
    },
    scroll:{
      width:"100%",
      centerContent :true,
      padding:20,
    },
    title:{
      paddingTop:50,
      color: "#333",
      fontSize:35,
      alignItems:'center',
      fontWeight: 'bold'
    },
    des:{
      color: "#555",
      fontSize:13,
      color:'#06A186'
    },
    srvdes:{
        color: "#555",
        fontSize:13,
        fontWeight:"bold",
        padding:10,
        marginTop:50,
    },
    version:{
      color:'#999',
      paddingTop:20
    },
    button: {
      backgroundColor: "#06A186",
      padding: 15,
      borderRadius: 5,
      width:"80%",
      alignItems: 'center',
      
    },
    buttonText: {
      color: "white",
      fontSize:20
    },
    circle1: {
      width: 300,
      height: 300,
      borderRadius: 300 / 2,
      backgroundColor: "#06A186",
      opacity:.5,
      marginTop:-200,
      marginLeft:-260
    },
    circle2: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: "#06A186",
      opacity:.7,
      marginTop:-30,
      marginLeft:-310
    },
    image:{
      width:200,
      height: 200,
      marginTop:100,
      resizeMode: 'contain',
    },
    centerText:{
      alignItems:'center'
    }
    ,
    TextInput:{
        height: 42,
        borderWidth: 1,
        borderColor: '#06A186',
        borderRadius: 20 ,
        backgroundColor : "#FFFFFF",
        padding:10,
        marginTop:3,
    }
  });
  
export default SettingScreen;
