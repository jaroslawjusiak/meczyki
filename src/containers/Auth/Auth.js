import React, {Component} from 'react';
import firebase from '../../firebase';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import classes from './Auth.module.css';

class Auth extends Component{
    state = {
        isSignedIn: false,
        
    };

    googleProvider = new firebase.auth.GoogleAuthProvider();

    // uiConfig = {
    //     signInFlow: "popup",
    //     signInOptions: [
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID
    //     ],
    //     callbacks: {
    //         signInSuccessWithAuthResult: (authResult, redirectUrl) => {
    //             console.log('authResult: ', authResult);
    //             return false;
    //         }
    //     }
    // };

    // logout = () => {
    //     firebase.auth().signOut()
    //     .then((res) => {
    //         console.log('[Auth]: signOut - response', res);
    //     })
    //     .catch((err) => {
    //         console.log('[Auth]: signOut - Error', err);
    //     })
        
    // };

    onSubmit = () => {
        console.log('signIN');
        firebase.auth().signInWithPopup(this.googleProvider)
        .then(user => {
            console.log('user', user);
            this.setState({ isSignedIn: !!user });
        })
        .catch(error => {
            console.log('error', error);
        });
    };

    onLogout = () => {
        firebase.auth().signOut()
        .then((res) => {
            console.log('signOut');
        })
        .catch((err) => {
            console.log('signOut - Error', err);
        });
    };

    componentDidMount(){

        firebase.auth().onAuthStateChanged(res => {
            console.log('[Auth]: onAuthStateChanged - res', res);
            console.log('app', firebase.auth().app);
            this.setState({isSignedIn: !!res});
        });
    };

    componentDidUpdate(){

    };

    render(){
        return (
            <div>
                <div>Logowanie</div>
                {/* {
                    this.state.isSignedIn
                    ? (
                        <div>
                            <div>Signed in!</div>
                            <div>
                                <button onClick={this.logout}>Logout</button>
                            </div>
                        </div>
                        
                      )
                    : (<StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />)
                } */}
                {
                    this.state.isSignedIn
                    ? (
                        <div>
                            <div>Signed in!</div>
                            <div>
                                <button onClick={this.onLogout}>Logout</button>
                            </div>
                        </div>
                        
                      )
                    : (
                        <div>
                            <div>Please sign in...</div>
                            <div>
                                <button onClick={this.onSubmit}>Sign in</button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    };

};

export default Auth;