import React, {useEffect, useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
// import useFetch from '../api/use-fetch.effect';

const axios = require('axios').default;
const authURL = 'https://developer.expert.ai/oauth2/token'


const NewInputForm = () => {
    //api section
    const [token,setToken] = useState(null);

    const newToken = token;
    const tokenConfig = () => {

        //headers
        const config = {
            headers: {
                "Content-Type":"application/json",
            },
        };

        if(token){
            config.headers["Authorization"] =`Bearer ${newToken}`;
        }
        return config;
    }

    const load = () => {
        const body = JSON.stringify({

                                "username": "aksh.akash@gmail.com",
                                "password": "UhNk8fwbNYkvg!z"

        })
        axios.post(`https://developer.expert.ai/oauth2/token`,
            body,tokenConfig())
            .then((res)=>{
                setToken(res.data);
            })
            .catch((err)=>{
                console.log(err.response)
            });
    }

    const PostConfig = () => {

       const config1 = {
           headers: {
               "Content-Type": "application/json",
           },
       };

           if (token) {
               config1.headers["Authorization"] = `Bearer ${newToken}`;
           }
            return config1;

       }

    const PostLoad =() =>{
        const dataBody = JSON.stringify({
            "document":{
                "text":"Michael Jordan was one of the best basketball players of all time. Scoring was Jordan stand-out skill, but he still holds a defensive NBA record, with eight steals in a half."
            }
        })
        axios.post(`https://nlapi.expert.ai/v2/analyze/standard/en/entities`,
            dataBody,PostConfig()).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err.response)
        });
    }
    useEffect(()=>{
        load()
    },[])

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const res = await fetch(authURL,{
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 "username": "aksh.akash@gmail.com",
    //                 "password": "UhNk8fwbNYkvg!z"
    //             }),
    //
    //         },);
    //         const authData = await res;
    //         setToken(authData);
    //     };
    //     fetchData()
    // },[])

    const { handleSubmit, control } = useForm();
    const onSubmit = (data) =>{
     console.log(data);
     PostLoad();
    }
    // const Auth = useFetch('https://developer.expert.ai/oauth2/token');

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Controller
                render={(props) => <TextField{...props} label="InputForm"

                /> }
                name="location"
                defaultValue=""
                control={control }
            />
            {/*{console.log(Auth)}*/}

            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                Primary
            </Button>
        </form>
    )
}

export default NewInputForm;
