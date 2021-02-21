import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
// import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
// import useFetch from '../api/use-fetch.effect';

const axios = require("axios").default;
const authURL = "https://developer.expert.ai/oauth2/token";

const NewInputForm = (props) => {
  //api section
  const [token, setToken] = useState(null);
  const [document, setDocument] = useState(null);
  const [InputData, setInputData] = useState();

  //   console.log(document);
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
  };

  const load = () => {
    const body = JSON.stringify({
      username: "aksh.akash@gmail.com",
      password: "UhNk8fwbNYkvg!z",
    });
    axios
      .post(`https://developer.expert.ai/oauth2/token`, body, tokenConfig())
      .then((res) => {
        setToken(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
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
  };

  const Stringify = JSON.stringify(document);

  const PostLoad = () => {
    const dataBody = JSON.stringify({
      document: {
        text: Stringify,
      },
    });
    axios
      .post(
        `https://nlapi.expert.ai/v2/analyze/standard/en/entities`,
        dataBody,
        PostConfig()
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    load();
  }, []);

  //   const { handleSubmit, control } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log();
    setDocument(InputData); //first this should be called and then PostLoad which will solve the problem
    PostLoad();
    // return InputData;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDocument({ ...document, [e.target.name]: e.target.value });
    setInputData({ [e.target.name]: e.target.value });
  };

  // const Auth = useFetch('https://developer.expert.ai/oauth2/token');

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
      {/*{console.log(Auth)}*/}

      <Button onClick={(e) => onSubmit(e)} variant="contained" color="primary">
        Primary
      </Button>
    </form>
  );
};

export default NewInputForm;
