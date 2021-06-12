import React,{useState,useEffect} from 'react';
import { Button, TextField, FormControl } from "@material-ui/core";

const TwitterInput = (props) => {
    const[State,setState] = useState();
    var Twit  =  require('twitter');

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
    const load = () => {
        T.get('search/tweets', { q: 'moderna since:2020-07-11', count: 100 }, function(err, data, response) {
            setState(data);
        })
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