import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import axios from 'axios'

const StartPage = () => {

  const navigation = useNavigation()

  const [ userDetails, setUserDetails] = useState({
    name:"",
    phoneNumber:"",
    email: "",
    pwd: "",
    confirmpwd:""
  })

  
  const handleChange = (value, fieldName) => {
    setUserDetails((prev) => ({ ...prev, [fieldName]: value }));
  };

  console.log('details',userDetails)


  const validateForm = async() =>{
   
  }


  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/; // Assumes a 10-digit phone number

    if (
      !userDetails.name ||
      !userDetails.phoneNumber ||
      !userDetails.email ||
      !userDetails.pwd ||
      !userDetails.confirmpwd
    ) {
      Alert.alert('Please fill all fields', 'All fields are required');
    } else if (userDetails.pwd !== userDetails.confirmpwd) {
      Alert.alert('Password mismatch', 'Please make sure the passwords match');
    } else if (!emailRegex.test(userDetails.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    } else if (!phoneNumberRegex.test(userDetails.phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number');
    } else if(userDetails.pwd.length < 6){
      Alert.alert('Invalid Password', 'Password must be more than 5 digits');
    }else{
      const response = await axios.post("http://192.168.1.131:5051/start", userDetails);
        if (response.data.errno === 1062) {
          Alert.alert("User already exists");
        } else {
          console.log('Response to our API request:', response.data);
          navigation.navigate("Otp");
        }
    }}

  
  
  

  


  
 



 


  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"white",justifyContent:"space-between",alignItems:"center"}}>
      {/* <View style={{width:"100%",height:200}}>
        <Image
        source={require('./Assets/rapido-banner.png')}
        style={{width:"100%",height:200}}/>

        

      </View> */}
    
      <View style={{width:"100%",height:200,paddingLeft:20,gap:20, marginTop:150}}>
      <Text style={{fontSize:19,color:"black",fontWeight:"700"}}>Sign Up</Text>
        {/* <Text style={{fontSize:15,color:"gray"}}>Verify your account using OTP</Text> */}


        <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
     
     <TextInput
      placeholder='Enter name'
      style={{width:"80%",fontSize:16, color:'black'}}
      placeholderTextColor='grey'
      onChangeText={(text) => handleChange(text, "name")}
      // value={name}
      // onChangeText={(text) => {
      //   setName(text);
      //   setNameerror('');
      // }}
     />
     </View>
     {/* {Nameerror ? <Text style={{ color: 'red' }}>{Nameerror}</Text> : null} */}
    

     <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
     <Text style={{width:50,fontSize:19,color:"black",fontWeight:"700"}} >+91</Text>
     
     <TextInput
      placeholder='Enter your phone number'
      style={{width:"80%",fontSize:16, color:'black'}}
      placeholderTextColor='grey'
      onChangeText={(text)=>handleChange(text, "phoneNumber")}
      // value={phoneNumber}
      // onChangeText={(text)=>{
      //   setPhonenumber(text);
      //   setPhonenumberError('');
      // }}
      
     />
     </View>
     {/* {phoneNumberError ?(
      <Text style={{color:"red"}}>{phoneNumberError}</Text>
     ):null} */}
      <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>     
     <TextInput
      placeholder='Enter your Email'
      style={{width:"80%",fontSize:16,color:'black'}}
      placeholderTextColor='grey'
      onChangeText={(text)=>handleChange(text, "email")}

     
     />
     </View>
     
     <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>     
     <TextInput
      placeholder='Enter Password'
      style={{width:"80%",fontSize:16,color:'black'}}
      placeholderTextColor='grey'
      onChangeText={(text)=>handleChange(text,"pwd")}

     
     />
     </View>

     <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>     
     <TextInput
      placeholder='Confirm Password'
      style={{width:"80%",fontSize:16,color:'black'}}
      placeholderTextColor='grey'
      onChangeText={(text)=>handleChange(text, "confirmpwd")}


     />
     </View>
     <TouchableOpacity
       style={{width:"90%",height:50,backgroundColor:'gold',
       alignItems:"center",justifyContent:"center",borderRadius:7, marginTop:50}}
      //  onPress={()=>navigation.navigate('Otp')} 
      onPress={handleClick}
      
      >
        <Text style={{fontSize:16,
          fontWeight:"600", color:'red'}}>Proceed</Text>
     </TouchableOpacity>

     {/* <TouchableOpacity
      // onPress={()=>navigation.navigate("Otp")}
      onPress={handleClick}

     >
     <Text style={{color:'grey'}}>Already have an Account?. Login</Text>
     </TouchableOpacity> */}

     {/* <Text>privecy policy</Text> */}
      </View>

     
     
      
    </KeyboardAvoidingView>
  )}

export default StartPage

const styles = StyleSheet.create({})