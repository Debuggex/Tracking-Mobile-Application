import React, { useContext, useState, useEffect } from 'react';
import {Text}from 'react-native';
import Context from '../Context/CreateDataContext';
import AsyncStorage from '@react-native-community/async-storage';

const ResolveAuth=({navigation})=>{
    const{tryget}=useContext(Context);
    
    
    useEffect(()=>{
        tryget(()=>navigation.navigate('mainflow',{screen:'TrackList'}),()=>navigation.navigate('Signup'));
    },[])
    return null
}
export default ResolveAuth;