import React,{useState, useContext, useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import Context from '../Context/CreateDataContext';
import { NavigationEvents } from 'react-navigation';
import { set } from 'react-native-reanimated';

const Signup=({navigation})=>{
    
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const{signup,errorsignup,clearerror,tryget}=useContext(Context);
    const nav=()=>{
        clearerror();
        navigation.navigate('Signin')
    };
    
    
    
    return (
        
        <SafeAreaView style={{flex:1,justifyContent:"center",marginBottom:300,marginTop:200}}>
            
             
            
            {errorsignup?<Text style={{margin:15,color:'red'}}>Something Went Wrong With Signup</Text>:<Text></Text>} 
            <Text style={{fontSize:23,color:'#001ef4',margin:15}}>Signup to Track your Locations</Text>
            <View style={{margin:15,borderRadius:40,shadowColor:'#000000',shadowOffset:{width:4,height:4},shadowOpacity:10.0,shadowRadius:100,elevation:1,backgroundColor:'#FFFFFF',flexDirection:"row",height:50}}>
                <TextInput style={{marginHorizontal:20,fontSize:14}} autoCorrect={false} placeholder="Username or Email" value={email} onChangeText={(newvalue)=>setemail(newvalue)}/>
            </View>
            <View style={{margin:15,borderRadius:40,shadowColor:'#000000',shadowOffset:{width:4,height:4},shadowOpacity:10.0,shadowRadius:100,elevation:1,backgroundColor:'#FFFFFF',flexDirection:"row",height:50}}>
                <TextInput style={{marginHorizontal:20,fontSize:14}} secureTextEntry={true} autoCorrect={false} placeholder="Password" value={password} onChangeText={(newvalue)=>setpassword(newvalue)}/>
            </View>
            <View style={{marginVertical:15,height:50,width:300,backgroundColor:'#001ef4',justifyContent:"center",marginHorizontal:45,borderRadius:40}}>
                <TouchableOpacity style={{justifyContent:"center",flexDirection:"row",width:300}} onPress={()=>{signup(email,password,()=>navigation.navigate('mainflow',{screen:'TrackList'}))}}>
                    <Text style={{color:"#FFFFFF",fontSize:18}}>Signup</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={()=>nav()}>
                <Text style={{margin:20,color:'blue'}}>Already have a Account ? Signin instead!</Text>
            </TouchableOpacity>
        </SafeAreaView>
        )
};

export default Signup;