import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    container: {
        position: 'absolute',
        width: 600,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 25%)'
    }
});

export default function LoadingSkeleton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
        </div>
    );
}
