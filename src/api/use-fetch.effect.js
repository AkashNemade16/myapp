import {useState, useEffect} from 'react';

const useFetch = url =>{
    const [data,setData] = useState(null);
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
               })
           });
           const authData = await res;
           setData(authData);
       };
       fetchData()
     },[])
    return data;
}
export default useFetch;
