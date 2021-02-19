import React from 'react';
import {Button, TextField , Typography} from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import useFetch from '../api/use-fetch.effect'

const NewInputForm = () => {
    const { handleSubmit, control } = useForm();
    const PostData = useFetch('https://developer.expert.ai/oauth2/token');
    const onSubmit = ({data}) =>{

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Controller
                render={(props) => <TextField{...props} label="InputForm"

                /> }
                name="location"
                defaultValue=""
                control={control }
            />
            <Typography>
                {console.log(PostData)}
            </Typography>
            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                Primary
            </Button>
        </form>
    )
}

export default NewInputForm;
