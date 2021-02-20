import {useState, useEffect} from 'react';
import NewInputForm from '../components/Form'

const useFetch = url =>{

    const [token,setToken] = useState(null);
     useEffect(()=>{
       const fetchData = async () => {
           const res = await fetch(url,{
               method: 'POST',
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                   "username": "aksh.akash@gmail.com",
                   "password": "UhNk8fwbNYkvg!z"
               }),

           },);
           const authData = await res;
           setToken(authData);
       };
       fetchData()
     },[])
    return token;
}
export default useFetch;
