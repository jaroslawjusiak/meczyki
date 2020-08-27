import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Burger from '../Burger/Burger';

const toolbar = (props) => {
    return (
        <nav className={classes.toolbar}>
            <Logo/>
            <NavigationItems />
            
            <Burger closeBurger={props.showSideMenu} clicked={props.burgerClicked}/>
        </nav>
    );
};

export default toolbar;