import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
       <li className={classes.navItem} >
           {/* NavLinks to be added here! */}
            <a href="#">{props.text}</a>
       </li>
    );
};

export default navigationItem;