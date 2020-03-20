import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Header = () => {
    const { authState, authService } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const button = authState.isAuthenticated ?
        <button onClick={() => { authService.logout() }}>Logout</button> :
        <button onClick={() => { authService.login() }}>Login</button>;

    return (
        <div>
            <Link to='/'>Home</Link><br />
            <Link to='/Game'>New Game</Link><br />
            {button}
        </div>
    );
};
export default Header;