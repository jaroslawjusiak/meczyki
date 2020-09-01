import React, {Component} from 'react';
import firebase from '../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import classes from './Auth.module.css';

class Auth extends Component{
    state = {
        isSignedIn: false
    };

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                console.log('signInSuccess');
                return false;
            }
        }
    };

    logout = () => {
        firebase.auth().signOut()
        .then((res) => {
            console.log('[Auth]: signOut - response', res);
        })
        .catch((err) => {
            console.log('[Auth]: signOut - Error', err);
        })
        
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(res => {
            console.log('[Auth]: onAuthStateChanged - res', res);
            this.setState({isSignedIn: !!res});
        });
    };

    componentDidUpdate(){

    };

    render(){
        return (
            <div>
                <div>Logowanie</div>
                {
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
                }
                
            </div>
        );
    };

};

export default Auth;