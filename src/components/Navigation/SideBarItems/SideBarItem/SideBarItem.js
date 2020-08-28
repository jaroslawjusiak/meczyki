import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './SideBarItem.module.css';

const sideBarItem = (props) => {
    return (
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
    );
};

export default sideBarItem;