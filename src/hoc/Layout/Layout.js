import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import FunctionsTester from '../../containers/tmp/FirebaseFunctions/FunctionsTester';

class Layout extends Component{
    state = {
    
    };

    componentDidMount(){

    };

    componentDidUpdate(){

    };

    render(){
        return (
            <Aux>
                 <Toolbar />
                 <FunctionsTester />
            </Aux>
        );
    };

};

export default Layout;