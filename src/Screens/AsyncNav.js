import React, { useContext } from 'react';
import Context from '../Context/CreateDataContext';

const AsyncNav=({navigation})=>{
    const {tryget}=useContext(Context);
    const token =tryget();
    const Nav=()=>{
        if(token){
            navigation.navigate('TrackList');
        }else{
            navigation.navigate('Signup');
        }
    }
    return(
        Nav()    
    )
};

export default AsyncNav;