import React,{useState,useEffect} from 'react';
import { Button, TextField, FormControl } from "@material-ui/core";

const TwitterInput = (props) => {
    const[State,setState] = useState();
    var Twitter  =  require('twitter');
    require('dotenv/config');

    const apiKey = process.env.apiKey;
    const apisecretKey = process.env.apisecretKey;
    const accessToken = process.env.accessToken;
    const secretaccessToken = process.env.secretAccessToken;


    var T = new Twitter(
        {
            consumer_key:apiKey,
            consumer_secret:apisecretKey,
            access_token:accessToken,
            access_token_secret:secretaccessToken,


        }
    )
    const load = () => {
       
    }
    // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    // console.log(data)
    // })
    // T.get('search/tweets', { q: 'moderna since:2020-07-11', count: 100 }, function(err, data, response) {
    //     setState(data);
    // })

    useEffect(()=>{
        load();
    },[]);
    return(
        <div>
            {console.log(State)}
        </div>
    )
}

export default TwitterInput;