import React, {useEffect, useState} from 'react';
import {Button, TextField, FormControl} from '@material-ui/core';

const axios = require('axios').default;
const NewInputForm = (props) => {
    //api section
    const [token,setToken] = useState(null);
    const [document,setDocument] = useState(null);
    const [InputData, setInputData] = useState();
    const [resdata,setresData] = useState([]);
    console.log(resdata);


    const entries = Object.keys(resdata)
    console.log(entries);
    const DataArray = [];
    DataArray.push(resdata);
    console.log(DataArray);

    //For authentication
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

    //for posting the data
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

    const Stringify = JSON.stringify(document)
    const PostLoad =() =>{
        const dataBody = JSON.stringify({
            "document":{
                "text":Stringify
            }
        })
        axios.post(`https://nlapi.expert.ai/v2/analyze/standard/en`,
            dataBody,PostConfig()).then((res)=>{
            console.log(res.data);
            setresData(res.data);


        }).catch((err)=>{
            console.log(err.response)
        });
    }
    useEffect(()=>{
        load()
    },[])

    const onSubmit = (e) => {
        e.preventDefault();
        setDocument(InputData); //first this should be called and then PostLoad which will solve the problem
        PostLoad();

    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setDocument({ ...document, [e.target.name]: e.target.value });
        setInputData({ [e.target.name]: e.target.value });
    };

    const isObject = function (val){
        if(val === null){
            return false;
        }return (typeof val === 'object')
    }

    const renderData = (obj) => {
        for(let val in obj){
            if(isObject(obj[val])){
                renderData(obj[val]);
            }else {
                console.log(val,obj[val]);
            }
        }
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <FormControl>
                <TextField
                    render={props}
                    label="InputData"
                    name="text"
                    //   value={InputData}
                    defaultValue=""
                    onChange={(e) => onChange(e)}
                />
            </FormControl>

            <Button onClick={(e) => onSubmit(e)} variant="contained" color="primary">
                Primary
            </Button>
            <div>
                {
                    // DataArray.map((obj,idx)=>
                    //     <div key={idx}>{obj}</div>
                    // )
                    // data()
                    // <p> {console.log(resdata.data?.sentiment?.items[1])}</p>
                    // <p>{console.log(resdata.data)}</p>
                    renderData(
                       resdata.data?.sentiment
                    )
                }
            </div>
        </form>
    );


}

export default NewInputForm;
