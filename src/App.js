import React from "react";

import NewInputForm from "./components/Form";
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import TwitterInput from './components/twitter';
import {GridList,Grid} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function App() {
    const classes = useStyles();
  return (
   <div className={classes.root}>
       <GridList >
           <Grid item>
               <Header/>
           </Grid>
           <Grid item>
               <NewInputForm/>
           </Grid>
           <Grid>
              <TwitterInput />
           </Grid>

       </GridList>


       {/*<Api/>*/}
   </div>
  );
}

export default App;
