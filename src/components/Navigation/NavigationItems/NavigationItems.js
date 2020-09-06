import React from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Login from '../Login/login';

const navigationItems = (props) => {
    const navItems = [
        {link: '/', text: 'Strona główna'},
        {link: '/auth', text: 'Logowanie'},
        {link: '/bet', text: 'Obstawiaj wyniki'},
        {link: '/ranking', text: 'Klasyfikacja typerów'}
    ];
    let navigationItems = navItems.map( (item, i) => {
        return <NavigationItem 
                    text={item.text} 
                    onToolbar={props.onToolbar}
                    visible={props.visible}
                    delay={100 + i * 100}                     
                    key={item.text}
                    link={item.link}/>
    });
    
    let login = (<Login onToolbar={props.onToolbar} delay={100 + navItems.length * 100} visible={props.visible}/>);

    let navItemsComponent = <ul className={classes.navItems} >
                {navigationItems}
                {login}
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
                {show => show && (style => (
                    <animated.div className={classes['side-bar-items']} style={style}>
                    <ul>
                        {navigationItems}
                        {login}
                    </ul>
                </animated.div>
                    ))}
            </Transition>;
    }

    return navItemsComponent;
};

export default navigationItems;