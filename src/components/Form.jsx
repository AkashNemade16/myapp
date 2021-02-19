import React from 'react';
import {Button, TextField } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../api/api";

const NewInputForm = () => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) =>{

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

            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                Primary
            </Button>
        </form>
    )
}

export default NewInputForm;
