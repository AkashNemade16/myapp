import React from 'react';
import {Typography,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper:{
        flexWrap: 'wrap',
        elevation: 3,
        width: 1000,
        padding: theme.spacing(2),
        textAlign: 'center',
        background:"lightgray"
    },
}));

const Summarizer = (props) => {
    const classes = useStyles();
    const data = props.receiveData
    console.log(data.data);
    return (
        <div>
            {data.data ?
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        {data.data.mainSentences.map((item, id) => (<div key={id}>
                            {item.value}
                        </div>))}
                    </Paper>
                </div>
                     : null
            }
        </div>
    );
};

export default Summarizer;