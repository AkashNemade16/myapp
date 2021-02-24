import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background:"lightgray"
    },
}))

const Entities = props => {
        const classes = useStyles();
        const data = props.receiveData;
        console.log(data);
        return (
            <div className={classes.root}>
                {data.data ?<div>
                    <h1>Entities</h1>
                        <Grid container spacing={3} justify="center"
                              alignItems="flex-start" direction="row">
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <div>
                                        <h3>Lemmas</h3>
                                        {data.data.entities.map((item, id) =>
                                            (<div key={id}>{item.lemma}</div>))}
                                    </div>

                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <div>
                                        <h3>Relevance</h3>
                                        {data.data.entities.map((item, id) =>
                                            (<div key={id}>{item.relevance}</div>))}
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <div>
                                        <h3>Type</h3>
                                        {data.data.entities.map((item, id) =>
                                            (<div key={id}>{item.type}</div>))}
                                    </div>
                                </Paper>
                            </Grid>


                        </Grid>
                    </div>
                     : null}
            </div>
        );
    }
;


export default Entities;