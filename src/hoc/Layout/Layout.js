import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
//import FunctionsTester from '../../containers/tmp/FirebaseFunctions/FunctionsTester';


class Layout extends Component{
    state = {
        showSideMenu: false
    };

    componentDidMount(){
        console.log('[Layout] - componentDidMount');
    };

    componentDidUpdate(){
        console.log('[Layout] - componentDidUpdate');
    };

    burgerClickedHandler = () => {
        this.setState(() => {
            return {showSideMenu: !this.state.showSideMenu};
        });
    };

    render(){
        return (
            <Aux>
                 <Toolbar burgerClicked={this.burgerClickedHandler} showSideMenu={this.state.showSideMenu}/>
                 {/* <FunctionsTester /> */}
            </Aux>
        );
    };

};

export default Layout;