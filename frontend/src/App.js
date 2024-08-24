import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login' 

function App() {
  const responseGoogleSuccess = (response) => {
    console.log('Login Success:', response);
  };

  const responseGoogleFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div className="App">
      <h1>Google Calendar API</h1>
      <GoogleLogin
        clientId='906172210322-1phsel45p4d1jb3odvsme0v0uajupn1n.apps.googleusercontent.com'
        buttonText='Sign in & Authorize Calendar'
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        responseType="code"
        cookiePolicy={'single_host_origin'}
        accessType='offline'
        scope=' openid email profile https://www.googleapis.com/auth/calendar'
      />
    </div>
  );
}

export default App;
