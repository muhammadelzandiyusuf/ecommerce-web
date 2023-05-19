import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import * as actions from '../../store/actions/index';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import '../../assets/sass/auth.sass';

const Auth = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const inputTypes = [
        {type: 'text', name: 'username', placeholder: 'Username'},
        {type: 'password', name: 'password', placeholder: 'Password'},
    ] 

    const submitHandler = event => {
        event.preventDefault();
        props.onAuth(enteredUsername, enteredPassword);
    }

    const signHandler = (event, name) => {
        const value = event.target.value;
        if (name === 'username') {
            setEnteredUsername(value);
        }
        else {
            setEnteredPassword(value);
        }
    }

    const responseFacebook = (response) => {
        props.onAuth('elzandi', 'yusuf');
    }

    const responseGoogle = (response) => {
        props.onAuth('elzandi', 'yusuf');
    }

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p className="text-center">{props.error}</p>
        );
    }

    let authRedirect = null;
    if ( props.isAuthenticated ) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    return (
        <div className="auth w-90">
            <p className="bold text-center fs-18 mb-8">Login</p>
            {errorMessage}
            {authRedirect}
            <form onSubmit={submitHandler}>
                {inputTypes.map((item, key) => {
                    return(
                        <Input 
                            key={key} 
                            type={item.type} 
                            placeholder={item.placeholder} 
                            formControl="form-control mb-2 fs-14"
                            onEnteredType={(event) => signHandler(event, item.name)} />
                    );
                })}
                <input type="checkbox" className="checkbox" />
                <label> Remember Me</label>
                <Button icon={null} btnClass="btn btn-signin w-25 float-right" name="Sign In" />
            </form>
            <div className="mt-10 mb-5 text-center">
                <FacebookLogin appId="599664213947304" fields="name,email,picture" callback={responseFacebook} />
            </div>
            <div className="mb-5 text-center">
                <GoogleLogin clientId="1074119109671-r2tae4evf0diqgb139bvkeg6dbi4m0nq.apps.googleusercontent.com" buttonText="LOGIN WITH GOOGLE" onSuccess={responseGoogle} onFailure={responseGoogle} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( username, password ) => dispatch( actions.auth( username, password ) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/home' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );