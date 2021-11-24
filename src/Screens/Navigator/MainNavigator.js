import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../AccountScreen';
import Signin from '../Signin';
import Signup from '../Signup';
import TrackCreate from '../TrackCreate';
import TrackDetails from '../TrackDetails';
import TrackList from '../TrackList';
import {TrackProvider} from '../../Context/CreateDataContext';
import ResolveAuth from '../ResolveAuth';
import LocalContext, {LocationProvider} from '../../Context/LocationContext';

import context from '../../Context/CreateDataContext';
import AsyncStorage from '@react-native-community/async-storage';

const stack1=createStackNavigator();
const stack2=createStackNavigator();
function stack11(){
    return(
        <stack2.Navigator initialRouteName='TrackDetails'>
                        <stack1.Screen name="TrackList" component={TrackList} options={{title:"TrackList",headerShown:false}}/>
                        <stack1.Screen name="TrackDetails" component={TrackDetails} options={{title:"TrackDetails"}}/>
        </stack2.Navigator>
    )  
};
const bootom=createBottomTabNavigator();
function mainflow(){
    return(
        <bootom.Navigator initialRouteName='TrackCreate' >
                <bootom.Screen name='TrackList' component={TrackList}/>
                
                <bootom.Screen name="TrackCreate" component={TrackCreate} options={{title:"TrackCreate"}}/>
                <bootom.Screen name="Account" component={Account} options={{title:"Account"}}/>
        </bootom.Navigator>
        
    )
};

function MainStackNavigator(){
    
        
        return(
            <NavigationContainer>
                
                <stack1.Navigator initialRouteName='ResolveAuth'>
                    
                    <stack1.Screen name="ResolveAuth" component={ResolveAuth} options={{headerShown:false}}/>
                    <stack1.Screen name="Signin" component={Signin} options={{title:"Signin",headerShown:false}}/>
                    <stack1.Screen name="Signup" component={Signup} options={{title:"Signup",headerShown:false}}/>
                    <stack1.Screen name="mainflow" component={mainflow} options={{headerShown:true,title:'Tracks'}}/>
                    <stack1.Screen name="TrackDetails" component={TrackDetails}/>
                    
                </stack1.Navigator>
                
            </NavigationContainer>
    
        )
    

}

const final=()=>{
    return(
        <TrackProvider>
            <LocationProvider>
                <MainStackNavigator/>
            </LocationProvider> 
        </TrackProvider>
    )
};


export default final;