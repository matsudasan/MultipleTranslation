import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loadding = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,.8);
  width:100%;
  height:100%
`
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position:'absolute',
            top:'30%',
            left:'45%',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

const Load: React.FC = () => {
    const classes = useStyles();
    return (
        <Loadding>
            <div className={classes.root}>
                <CircularProgress color="secondary" size={70}/>
            </div>
        </Loadding>
    )
}

export default Load