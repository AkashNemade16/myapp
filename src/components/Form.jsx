import React, {useEffect, useState} from 'react';
import {Button, TextField, FormControl, Grid, makeStyles,Box} from '@material-ui/core';
import Sentiment from './sentiment';
import Entities from './entities';

const useStyles = makeStyles((theme) => ({
    textfield: {
        width:1000
    },
}));
const axios = require('axios').default;
const NewInputForm = (props) => {
    //api section
    const [token, setToken] = useState(null);
    const [document, setDocument] = useState(null);
    const [InputData, setInputData] = useState();
    const [resdata, setresData] = useState([]);


    //For authentication
    const newToken = token;

    const tokenConfig = () => {

        //headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (token) {
            config.headers["Authorization"] = `Bearer ${newToken}`;
        }
        return config;
    }

    const load = () => {
        const body = JSON.stringify({

            "username": "aksh.akash@gmail.com",
            "password": "UhNk8fwbNYkvg!z"

        })
        axios.post(`https://developer.expert.ai/oauth2/token`,
            body, tokenConfig())
            .then((res) => {
                setToken(res.data);
            })
            .catch((err) => {
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
    const PostLoad = () => {
        const dataBody = JSON.stringify({
            "document": {
                "text": Stringify
            }
        })
        axios.post(`https://nlapi.expert.ai/v2/analyze/standard/en`,
            dataBody, PostConfig()).then((res) => {
            console.log(res.data);
            setresData(res.data);


        }).catch((err) => {
            console.log(err.response)
        });
    }
    useEffect(() => {
        load()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        setDocument(InputData); //first this should be called and then PostLoad which will solve the problem
        PostLoad();

    };

    const onChange = (e) => {
        const {name, value} = e.target;
        setDocument({...document, [e.target.name]: e.target.value});
        setInputData({[e.target.name]: e.target.value});
    };

    const classes = useStyles();
    return (
        <div>
            <form  onSubmit={(e) => onSubmit(e)}>
                <Grid spacing={3} container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Box width='75%'>
                        <FormControl>

                                <TextField
                                    className={classes.textfield}
                                    render={props}
                                    name="text"
                                    //   value={InputData}
                                    multiline
                                    type='text'
                                    variant="outlined"
                                    defaultValue=""
                                    onChange={(e) => onChange(e)}
                                />


                        </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs>
                        <Button onClick={(e) => onSubmit(e)} variant="contained" color="primary">
                            Analyze
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <div>
                            <Entities receiveData={resdata}/>
                            <Sentiment receiveData={resdata}/>

                            {/*{resdata.data ?(resdata.data.entities.map((item) => item.lemma)):null}*/}
                        </div>
                    </Grid>

                </Grid>
            </form>
        </div>
    );
}

export default NewInputForm;
