import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const newLocal = 'https://tracks002.herokuapp.com';
const insatnce= axios.create({
    baseURL : newLocal
});
insatnce.interceptors.request.use(
    async(config)=>{
        const token=await AsyncStorage.getItem('token');
        if(token){
            
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }

);
export default insatnce;