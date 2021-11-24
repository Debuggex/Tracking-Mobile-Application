import React, { useContext } from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import Context from '../Context/CreateDataContext';

const AccountScreen=({navigation})=>{
    const{signout}=useContext(Context);
    return (<View>
            <Text style={{fontSize:40}}>AccountScreen</Text>
            <Button title="Signout" onPress={()=>signout(()=>{navigation.navigate('Signup')})}/>
        </View>)
};

export default AccountScreen;