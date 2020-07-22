import React from 'react';
import classes from './Burger.module.css';

const burger = (props) => {
    return (
        <div className={classes.burger}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
        </div>
    );
};

export default burger;