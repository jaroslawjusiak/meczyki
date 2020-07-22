import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.navItems} >
            <NavigationItem text="Strona główna"/>
            <NavigationItem text="Logowanie"/>
            <NavigationItem text="Typuj wyniki"/>
            <NavigationItem text="Klasyfikacja typerów"/>
        </ul>
    );
};

export default navigationItems;