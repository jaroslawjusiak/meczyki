import React from 'react';
import MediaQuery from 'react-responsive'
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideBarItems from '../SideBarItems/SideBarItems';
import Burger from '../Burger/Burger';

const handleBurgerMediaQueryChange = (matches) => {
    matches 
    ? console.log('Show Burger') 
    : console.log('Hide Burger');
};

const handleNavMediaQueryChange = (matches) => {
    matches 
    ? console.log('Show Nav') 
    : console.log('Hide Nav');
};

const toolbar = (props) => {
    return (
        <nav className={classes.toolbar}>
            <Logo/>
            <MediaQuery maxWidth={1000} onChange={handleNavMediaQueryChange}>
                    {(matches) =>
                        matches
                        ? <SideBarItems />
                        : <NavigationItems />
                    }
            </MediaQuery>
            
            <MediaQuery maxWidth={1000} onChange={handleBurgerMediaQueryChange}>
                    {(matches) =>
                        matches
                        ? <Burger closeBurger={props.showSideMenu} clicked={props.burgerClicked}/>
                        : null
                    }
            </MediaQuery>
            
        </nav>
    );
};

export default toolbar;