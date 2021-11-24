import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import { Location } from 'react-native-get-location';

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

let counter=0;
setInterval(()=>{
    
    location=getlocation(counter);
    
    
counter++;
}, 1000)