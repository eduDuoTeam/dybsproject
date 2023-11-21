
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FogotPass = () => {
  
    const navigation = useNavigation();

  return (
    <View style={{flex:1,backgroundColor:"orange"}}>
    <View style={{width:"100%",height:150,backgroundColor:"orange",}}>

    </View>
    <View style={{width:"100%",height:500,paddingTop:100,gap:10,paddingLeft:20,borderRadius:20,elevation:10,backgroundColor:"white",position:"relative"}}>
    
    <View>
    <Text style={{fontSize:19,color:"black",fontWeight:"700"}}>Forgot Password</Text>
      {/* <Text style={{fontSize:15,color:"gray"}}>we have sent an OTP to {mobileNumber}</Text> */}
    </View>
{/* 
    <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
   <TextInput
    placeholder='Enter OTP'
    style={{width:"80%",fontSize:16,textAlign:"center"}}
    
   />
   </View> */}

   <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>     
   <TextInput
    placeholder='Reset Password by mail'
    style={{width:"80%",fontSize:16}}
   />
   </View>
   


   <TouchableOpacity
     style={{width:"90%",height:50,
     backgroundColor: "lightgray",
     marginTop:10,
     alignItems:"center",justifyContent:"center",borderRadius:7}}
     onPress={()=> navigation.navigate('Otp')}
    >
      <Text style={{fontSize:16,
        color:"gray",
        fontWeight:"600",}}>Send</Text>
   </TouchableOpacity>

    </View>

    <Image
     source={require('./Assets/phone.png')}
      style={{width:60,height:60,position:"absolute",top:120,left:40,borderWidth:2,borderColor:"orange",borderRadius:100}}
     />
    
  </View>
  )
}

export default FogotPass

const styles = StyleSheet.create({})