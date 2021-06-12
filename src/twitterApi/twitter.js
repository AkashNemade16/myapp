import React,{useState,useEffect} from 'react';
//import axios from 'axios';

export default function Twitter(){
    const[state,setState] = useState();
    var Twit  =  require('twit');
    const apiKey = "JDPkzQnyd7w7Qx5UaN7RTZBSW";
    const apisecretKey = "W9VAzxvfImMaev92CIpqETqj89hhqmCOrleytsMrucbWatLa6I";
    const accessToken = "1365421072087019521-qVpOkEATWp1RMghfSiBwSgN7tV5pxP";
    const secretaccessToken = "X4lVMiZ04qtfFG8aBsouWT61PUUvFu861ll2wWbw6SKRm";

    var T = new Twit(
    {
        consumer_key:apiKey,
        consumer_secret:apisecretKey,
        access_token:accessToken,
        access_token_secret:secretaccessToken
    }
    )

    var params = {
        q:'pfizer',
        count:100
    }
    T.post('statuses/update', { status: 'hello world!' });
    T.get('search/tweets',params,tweets);
    function tweets(err, data, response) {
        setState(data);
    }
    return(
        <div>
            <h1>{console.log(state)}</h1>
        </div>
    )
    }
// var Twit  =  require('twit');
//
// const apiKey = "JDPkzQnyd7w7Qx5UaN7RTZBSW";
// const apisecretKey = "W9VAzxvfImMaev92CIpqETqj89hhqmCOrleytsMrucbWatLa6I";
// const accessToken = "1365421072087019521-qVpOkEATWp1RMghfSiBwSgN7tV5pxP";
// const secretaccessToken = "X4lVMiZ04qtfFG8aBsouWT61PUUvFu861ll2wWbw6SKRm";
//
// var T = new Twit(
//     {
//         consumer_key:apiKey,
//         consumer_secret:apisecretKey,
//         access_token:accessToken,
//         access_token_secret:secretaccessToken
//     }
// )
//
// var params = {
//     q:'pfizer',
//     count:100
// }
//
// T.get('search/tweets',params,twitter);
// function twitter(){
//
//}
