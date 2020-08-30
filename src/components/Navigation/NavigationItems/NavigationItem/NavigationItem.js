import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    
    let navItemComponent = 
        <li className={classes.navItem} >
           {/* NavLinks to be added here! */}
            <a href="#">{props.text}</a>
       </li>;

    if(!props.onToolbar){
        navItemComponent = 
            <li className={classes.navItem} >
                <Transition
                    native
                    items={props.visible}
                    from={{ right: `${props.visible ? -200 : 0}%`}}
                    enter={{ right: `${props.visible ? 0 : -200}%` }}
                    leave={{ right: `${props.visible ? -200 : 0}%`}}
                    config={{ duration:300, delay: props.delay }}
                >
                    {show => show && (style => (
                        <animated.a href="#" style={style}>
                                {/* NavLinks to be added here! */}
                                    {props.text}
                    </animated.a>
                        ))}
                </Transition>
            </li>
    }
    
    return navItemComponent;
};

export default navigationItem;