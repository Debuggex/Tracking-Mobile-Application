import React, { useContext } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Context1 from '../Context/LocationContext';
import MapView,{Polyline} from 'react-native-maps';

const TrackDetails=({route})=>{
    const {data1}=useContext(Context1);
    const id=route.params.id;
    const tracks=data1.find(t=>t._id===id);
    const initialcoords=tracks.locations[0].coords;

    return<> 
            <Text style={{fontSize:40}}>{tracks.name}</Text>
            <MapView
                style={{height:300}}
                initialRegion={{
                    longitudeDelta:0.01,
                    latitudeDelta:0.01,
                    ...initialcoords
                }}
            >
                <Polyline coordinates={tracks.locations.map(loc=>loc.coords)}/>
            </MapView>
        </>
};

export default TrackDetails;