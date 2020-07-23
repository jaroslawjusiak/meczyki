import React from 'react';
import classes from './Logo.module.css';
import UCL from '../../../assets/images/UCL.svg';

const logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={UCL} alt="Champions League" />
            <div className={classes.title}>
                <h4>Meczyki</h4>
            </div>            
        </div>
    );
};

export default logo;