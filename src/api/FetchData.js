import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const apiAccessUrl = 'https://developer.expert.ai/oauth2/token';
const accessToken = 'eyJraWQiOiJlZXEzSnB5WWxzeTJ4eTFuQnd4eDVZaEo3YWEwWWdMXC9DaUYyalJGMkxScz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxZnR2YTQ5MjJ2MWlibzQ3M2JxZDRwM3VjcyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBpXC9jb250ZXh0cy5yZWFkIiwiYXV0aF90aW1lIjoxNTkzNzc5NTc4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9BVUhnUTA4Q0IiLCJleHAiOjE1OTM3ODMxNzgsImlhdCI6MTU5Mzc3OTU3OCwidmVyc2lvbiI6MiwianRpIjoiM2EwODA0MDEtZGVmMC00NDNmLWI2OWItNGJhNTc5ZGJhOWY1IiwiY2xpZW50X2lkIjoiMWZ0dmE0OTIydjFpYm80NzNicWQ0cDN1Y3MifQ.LLjeg4su7X-ftlC5ReXoCPkQe-Mw2EZmBbG9tex_NZOaDY4tnBJZEgneboI0CcJHXZcZZJZ8U19dG9OcClEpEEytRJFWZ3hGXhSMXYpScn21oSmiyNwNi2f3Tv9t-nRv3ksmlsx7IZZoxTnc0ECXF10bdR55OMF1Z7DZ3k2fyWF2ClD8hAwJQEYKAZq4UfMVDjbYSOA7Hm7SChc3mx5XmLzPFtVSJ4MONjDBZiM5bOUj22dqWnf90-8i9mY5T40HI2JhD99tQI8HCXQWpNxax_dH_5W9AC3MHmNZA_d6xBEna8H8QbjpQdNyhvxN1M1JsJaEvRP7zhRuCqJmhj2sLA'
const authAxios = axios.create({
    baseUrl:apiAccessUrl,
    headers:{
        Authorization:`Bearer ${accessToken}`
    }
})

function App(){
    const [User, setUser] =useState([]);
    const [requestError, setRequestError] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const result =  await authAxios.get(`/analyze/standard/en/disambiguation`);
            setUser(result.data);
        }catch (e) {
           setRequestError(e.message);
        }
    })
}

