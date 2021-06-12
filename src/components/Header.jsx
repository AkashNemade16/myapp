import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, AppBar, Toolbar, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor:'lightgray',
        color:"inherit",
             
    }
}));


const Header = props => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" justify="center"
                   className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" >
                       Text Analyzer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;