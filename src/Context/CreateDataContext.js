import React, { useState } from 'react';
import TrackCreate from '../Screens/TrackCreate';
import trackerapi from '../Axios/Tracker';
import AsyncStorage from '@react-native-community/async-storage';


const TrackContext=React.createContext();

export const TrackProvider=({children,navigation})=>{
    const [track,settrack]=useState([]);
    const [token,settoken]=useState("");
    const[errorsignin,signinerror]=useState("");
    const[errorsignup,signuperror]=useState("");
    
    const signup=async(email,password,callback)=>{
        const data={email,password};
        
        try{
            const response=await trackerapi.post('/signup',data,{headers:{'Content-Type':'application/json'}})
            await AsyncStorage.setItem('token',response.data.token);
            settoken(response.data.token);
            
            
            signuperror("");
            callback();

        }catch (err){
            
            signuperror(err.response.data)}    
    }

    const signin=async(email,password,callback)=>{
        
        try{
            const response=await trackerapi.post('/signin',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            settoken(response.data.token);
            signinerror("");
            callback();
        }catch(err){
            signinerror(err.response.data)
        }        
    };
    const signout=async(callback)=>{
        await AsyncStorage.removeItem('token');
        settoken("");
        callback();
    }
    const tryget=async(callback1,callback2)=>{
        const token=await AsyncStorage.getItem('token');
       
        if(token){
            callback1();
        }else{
            callback2()
        }
    }
    const clearerror=(path)=>{
        signinerror("");
        signuperror("");
        
    };
    return (
        <TrackContext.Provider value={{data:track,signup,errorsignin,errorsignup,token,signin,clearerror,tryget,signout}}>
            {children}
        </TrackContext.Provider>
    )
};

export default TrackContext;