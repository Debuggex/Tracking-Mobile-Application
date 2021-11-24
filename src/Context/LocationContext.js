import AsyncStorage from '@react-native-community/async-storage';
import React, { Children, useState,Component } from 'react';
import { State } from 'react-native-gesture-handler';
import {Location} from 'react-native-get-location';
import trackerapi from '../Axios/Tracker';




const LocalContext=React.createContext();


export const LocationProvider=({children})=>{
    const[recording,setrecording]=useState(false);
    let locates=[];
    const [data1,setdata]=useState([]);
    const[newlocate,setlocate]=useState([]);
    const addLocation=(locate)=>{
       // console.log(locate.coords);
        if(recording){
                //console.log(locates.length);
                locates.push(locate);
                //console.log(location.latitude);
                
        }else{
            locates=null;
        } 
        
    };
    const fetchtrack=async()=>{
        const response =await trackerapi.get('/tracks');
        setdata(response.data);

    };
    const startrecording=(locate)=>{
        
        setrecording(true);
    };
    const stoprecording=()=>{
        setlocate(locates);
        locates=null;
        setrecording(false);
       
    };
     
    const save=async(name)=>{
        const token=await AsyncStorage.getItem('token');
        
        savetoApi(name,token);

    };
    const savetoApi=async(name,token)=>{
        
       trackerapi.post('/tracks',{name,locations:newlocate})
    }
        
        
    return(
        <LocalContext.Provider value={{addLocation,startrecording,stoprecording,recording,locates,newlocate,save,fetchtrack,data1}}>
            {children}
        </LocalContext.Provider>
    )
};

export default LocalContext;