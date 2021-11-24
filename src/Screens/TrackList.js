import React, { useContext, useEffect, useState } from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Context1 from '../Context/LocationContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
//import {ListItem}from 'react-native-elements';
//import firebase from '@react-native-firebase/app';


const TrackList=({navigation})=>{
    const {fetchtrack,data1}=useContext(Context1);
    const[newdata,setnew]=useState([]);
    useEffect(()=>{
        const subscribe=navigation.addListener('focus',()=>{
            fetchtrack();
            
        })
        return subscribe;
    },[navigation]);
    
    
    return (
        <View>
            
            <FlatList
                data={data1}
                keyExtractor={item=>item._id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity style={{margin:10}} onPress={()=>navigation.navigate('TrackDetails',{id:item._id})}>
                            <Text style={{fontSize:20,color:"#0a0a0a",fontWeight:"bold"}}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            
        </View>
    )
};

TrackList.navigationOptions={
    title:"Tracks"
}

export default TrackList;