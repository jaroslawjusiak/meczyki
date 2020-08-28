import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './SideBarItems.module.css';

const SideBarItems = (props) => {
    const sideBarItems = ["Strona główna", "Logowanie", "Typuj wyniki", "Klasyfikacja typerów"];
    const items = sideBarItems.map( (item) =>{
        return <NavigationItem 
                    text={item} 
                    
                    itemsCount={sideBarItems.length} 
                    key={item}/>
    });

    return (
        <ul className={classes['side-bar-items']} >
            {items}
        </ul>
    );
};

export default SideBarItems;