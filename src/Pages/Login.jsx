import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm'
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ baseUrl, issuer }) => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }} /> :
    <LoginForm baseUrl={baseUrl} issuer={issuer} />;
};

export default Login;