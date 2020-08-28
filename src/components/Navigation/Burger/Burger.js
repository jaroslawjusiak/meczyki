import React from 'react';
import { animated, Spring} from 'react-spring/renderprops';
import classes from './Burger.module.css';

const burger = (props) => {
    return (
        <div className={classes.burger} onClick={props.clicked}>
            <Spring 
                from={{  }}
                to={{ transform: `rotate(${props.closeBurger ? -45 : 0}deg) translate(${props.closeBurger ? -10 : 0}px, ${props.closeBurger ? 9 : 0}px)` }}
                config={{ duration:300 }}
            >
                {style => <animated.div style={style}></animated.div>}
            </Spring>
            
            <Spring 
                from={{  }}
                to={{ opacity: `${props.closeBurger ? 0 : 1}`, transform: `translate(0px, 0px)` }}
                config={{ duration:300 }}
            >
                {style => <animated.div style={style}></animated.div>}
            </Spring>
            
            <Spring 
                from={{  }}
                to={{ transform: `rotate(${props.closeBurger ? 45 : 0}deg) translate(${props.closeBurger ? -10 : 0}px, ${props.closeBurger ? -9 : 0}px)` }}
                config={{ duration:300 }}
            >
                {style => <animated.div style={style}></animated.div>}
            </Spring>
        </div>
        
    );
};

export default burger;