import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    
    const navLink = (
        <NavLink 
            to={props.link} exact                                
        >
            {props.text}
        </NavLink>
    );

    let navItemComponent = 
        <li className={classes.navItem} >
           {navLink}
       </li>;

    console.log(props.link);

    if(!props.onToolbar){
        navItemComponent = 
                <Transition
                    native
                    items={props.visible}
                    from={{ right: `${props.visible ? -200 : 0}%`}}
                    enter={{ right: `${props.visible ? 0 : -200}%` }}
                    leave={{ right: `${props.visible ? -200 : 0}%`}}
                    config={{ duration:300, delay: props.delay }}
                >
                    {show => show && (style => (
                        <animated.li style={style} className={classes.navItem}>                            
                            {navLink}        
                        </animated.li>
                        ))}
                </Transition>
    }
    
    return navItemComponent;
};

export default navigationItem;