import * as React from 'react';

import Navigator from './src/Screens/Navigator/MainNavigator';
navigator.geolocation=require('./node_modules/@react-native-community/geolocation');
const App=()=>{
  return (
    <Navigator/>
  );
}
export default App;