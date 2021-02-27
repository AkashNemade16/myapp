import React from "react";

import NewInputForm from "./components/Form";
import Header from './components/Header'
import {Grid} from '@material-ui/core'
function App() {
  return (
   <div className='App'>
       <Grid container alignContent='stretch' direction='column' spacing={1}>
           <Grid item>
               <Header/>
           </Grid>
           <Grid item>
               <NewInputForm/>
           </Grid>

       </Grid>


       {/*<Api/>*/}
   </div>
  );
}

export default App;
