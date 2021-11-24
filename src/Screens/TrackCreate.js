import '../_mocklocation';
import React, { useEffect, useState, useContext, Component } from 'react';
import {View,Text,StyleSheet,Button, PermissionsAndroid, ActivityIndicator, SafeAreaView} from 'react-native';
import {Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { configure } from 'react-native-location';
import MapView,{Circle} from 'react-native-maps';
import { set } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import GetLocation,{ getCurrentPosition,Location } from 'react-native-get-location';
import Context1 from '../Context/LocationContext';
import { TextInput } from 'react-native-gesture-handler';
import PolylineDirection from '@react-native-maps/polyline-direction';







const TrackCreate=({navigation})=>{
    const isFocused=useIsFocused();
    const [tex,settext]=useState("");
    const {addLocation,startrecording,stoprecording,recording,locates,newlocate,save}=useContext(Context1);
    const[counter,setcounter]=useState(0);
    
    const [no,setno]=useState("");
        useEffect(()=>{

            if(isFocused){
            
                const interval= setInterval(()=>{
                    setcounter(count=>count+1);
                    location=getlocation(counter);
                    //console.log(counter);
                
                    
                },1000) 
            
                return ()=>{clearInterval(interval)};
            }

        })
    
        
        
    
    
    
    
   
    
        
        
      

const tenmeters=0.0001;
const getlocation=increment=>{
    return{
        timestamp:10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude:-122.0312186+increment*tenmeters,
            latitude:37.33233141+increment*tenmeters
        }
    }
};







Geolocation.watchPosition(addLocation(location));
    
    
    const locate=async()=>{
        try{
            const granted2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Location Permission',
                    message:'Get your location to post request',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title:"App wants to know your location",
                        buttonPositive:"OK"
                    }
                );
                   
               
                
                setno("");
                
                
                    
                    if(granted===PermissionsAndroid.RESULTS.GRANTED){
                       
                        setno("");
                        
                    }else{
                        setno(e);
                        
                    }
               
        }catch(e){
            setno(e);
            console.log("Denied")
        }
    }
    locate();

        
    
    const reset=async()=>{
        await save(tex);
        settext("");
        navigation.navigate('TrackList');

    }
    
    
    
    
    return(
        
        
        <SafeAreaView>
            
            <MapView 
            style={{height:300}}
            initialRegion={{
                ...location.coords,
                longitudeDelta:0.01,
                latitudeDelta:0.01
            }}
            
            >
            <Circle
                center={location.coords}
                radius={30}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />  
            
            {recording?<Polyline coordinates={locates.map(loc=>loc.coords)} strokeColor="#000" strokeWidth={1}/>:null}
            </MapView>

            
            {no?<View><Text >Please enable Location</Text><Button title="Allow Location" onPress={()=>locate()}/></View>:null}
            <TextInput placeholder="Enter Your Name" value={tex} onChangeText={(newtext)=>{settext(newtext) }}/>
            {recording?<Button title="Stop Recording" onPress={()=>stoprecording()}/>:<Button title="Start Recording" onPress={()=>startrecording(location)}/>}
            {recording===false&&newlocate.length?<Button title="Save Track" onPress={()=>reset()} />:null}
        </SafeAreaView>
    ) 
};

export default TrackCreate;