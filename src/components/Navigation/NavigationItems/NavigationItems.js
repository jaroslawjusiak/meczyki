import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const navItems = ["Strona główna", "Logowanie", "Typuj wyniki", "Klasyfikacja typerów"];
    const navigationItems = navItems.map( (item) =>{
        return <NavigationItem 
                    text={item} 
                    
                    itemsCount={navItems.length} 
                    key={item}/>
    });

    return (
        <ul className={classes.navItems} >
            {navigationItems}
        </ul>
    );
};

export default navigationItems;