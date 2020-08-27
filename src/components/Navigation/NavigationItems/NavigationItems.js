import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let attachedClasses = [classes.navItems];
  
    const navItems = ["Strona główna", "Logowanie", "Typuj wyniki", "Klasyfikacja typerów"];
    const navigationItems = navItems.map( (item) =>{
        return <NavigationItem 
                    text={item} 
                    
                    itemsCount={navItems.length} 
                    key={item}/>
    });


    return (
        <ul className={attachedClasses.join(' ')} >
            {navigationItems}
        </ul>
    );
};

export default navigationItems;