import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './login.module.css';
import loginSVG from '../../../assets/images/login.svg';
import logoutSVG from '../../../assets/images/logout.svg';

const login = (props) => {
    
    let src = (<img src={loginSVG} alt="Login"/>);
    

    let loginLogout = (
        <li className={classes.svg}>
            {src}
        </li>
    );

    if(!props.onToolbar){
        loginLogout = 
                <Transition
                    native
                    items={props.visible}
                    from={{ right: `${props.visible ? -200 : 0}%`}}
                    enter={{ right: `${props.visible ? 0 : -200}%` }}
                    leave={{ right: `${props.visible ? -200 : 0}%`}}
                    config={{ duration:300, delay: props.delay }}
                >
                    {show => show && (style => (
                        <animated.li style={style} className={classes.svg}>                            
                            {src}
                        </animated.li>
                        ))}
                </Transition>
    }

    return loginLogout;
};

export default login;