import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const navItems = ["Strona główna", "Logowanie", "Typuj wyniki", "Klasyfikacja typerów"];
    let navigationItems = navItems.map( (item, i) => {
        return <NavigationItem 
                    text={item} 
                    onToolbar={props.onToolbar}
                    visible={props.visible}
                    delay={300 + i * 100}                     
                    key={item}/>
    });
    
    let navItemsComponent = <ul className={classes.navItems} >
                {navigationItems}
            </ul>;
    
    if(!props.onToolbar){
        navItemsComponent = <Transition
                native
                items={props.visible}
                from={{ right: `${props.visible ? -500 : 0}px`}}
                enter={{ right: `${props.visible ? 0 : -500}px` }}
                leave={{ right: `${props.visible ? 0 : -500}px` }}
                config={{ duration:300 }}
            >
                {show => show && (props => (
                    <animated.div className={classes['side-bar-items']} style={props}>
                    <ul>
                        {navigationItems}
                    </ul>
                </animated.div>
                    ))}
            </Transition>;
    }

    return navItemsComponent;
};

export default navigationItems;