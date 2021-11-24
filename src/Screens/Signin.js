import React, { useState, useContext,useEffect } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Context from '../Context/CreateDataContext';

const Signin=({navigation})=>{
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const{signin,errorsignin,clearerror}=useContext(Context);
    const nav=()=>{
        clearerror();
        navigation.navigate('Signup')
    };
    return (
        
        <View style={{borderColor:'#001ef4',flex:1,justifyContent:"center",marginTop:200,marginBottom:300}}>
            
            
            
            {errorsignin?<Text style={{margin:15,color:'red'}}>Something Went Wrong With Signup</Text>:<Text></Text>} 
            <Text style={{fontSize:23,color:'#001ef4',margin:15}}>Signin to Track your Locations</Text>
            <View style={{margin:15,borderRadius:40,shadowColor:'#000000',shadowOffset:{width:4,height:4},shadowOpacity:10.0,shadowRadius:100,elevation:1,backgroundColor:'#FFFFFF',flexDirection:"row",height:50}}>
                <TextInput style={{marginHorizontal:20,fontSize:14}} autoCorrect={false} placeholder="Username or Email" value={email} onChangeText={(newvalue)=>setemail(newvalue)}/>
            </View>
            <View style={{margin:15,borderRadius:40,shadowColor:'#000000',shadowOffset:{width:4,height:4},shadowOpacity:10.0,shadowRadius:100,elevation:1,backgroundColor:'#FFFFFF',flexDirection:"row",height:50}}>
                <TextInput style={{marginHorizontal:20,fontSize:14}} secureTextEntry={true} autoCorrect={false} placeholder="Password" value={password} onChangeText={(newvalue)=>setpassword(newvalue)}/>
            </View>
            <View style={{marginVertical:15,height:50,width:300,backgroundColor:'#001ef4',justifyContent:"center",marginHorizontal:45,borderRadius:40}}>
                <TouchableOpacity style={{justifyContent:"center",flexDirection:"row",width:300}} onPress={()=>{signin(email,password,()=>navigation.navigate('mainflow',{screen:'TrackList'}))}}>
                    <Text style={{color:"#FFFFFF",fontSize:18}}>Signup</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={()=>nav()}>
                <Text style={{margin:20,color:'blue'}}>Don't have a Account ? Signup</Text>
            </TouchableOpacity>
        </View>
        )
};

export default Signin;