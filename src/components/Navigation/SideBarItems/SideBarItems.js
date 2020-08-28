import React from 'react';
import SideBarItem from '../SideBarItems/SideBarItem/SideBarItem';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './SideBarItems.module.css';

const SideBarItems = (props) => {
    const sideBarItems = ["Strona główna", "Logowanie", "Typuj wyniki", "Klasyfikacja typerów"];
    const navItems = sideBarItems.map( (item, i) =>{
        return <SideBarItem 
                    text={item} 
                    delay={300 + i * 100} 
                    visible={props.visible}
                    key={item}/>
    });

    return (
        <Transition
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
                       {navItems}
                   </ul>
               </animated.div>
                ))}
        </Transition>




        // <Spring 
        //     native
        //     items={props.visible}
        //     from={{ 
        //         right: `${props.visible ? 500 : 0}px` 
        //     }}
        //     to={{ right: `${props.visible ? 0 : 500}px` }}
        //     config={{ duration:500 }}
        // >
        //     {style => <animated.div className={classes['side-bar-items']} style={style}>
        //         <ul>
        //             {items}
        //         </ul>
        //     </animated.div>}
        // </Spring>
    );
};

export default SideBarItems;