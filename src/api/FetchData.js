import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const apiAccessUrl = 'https://developer.expert.ai/oauth2/token';

export const Api = async () => {

    const PostData  = useCallback(async () =>{
        axios.post(apiAccessUrl, {
            "username": "aksh.akash@gmail.com",
            "password": "UhNk8fwbNYkvg!z"
        },{
            headers:{
                'Content-Type':'application/json; charset=utf-8'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    })


}

