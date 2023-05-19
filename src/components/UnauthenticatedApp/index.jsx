import './styles.css';
import { auth } from '../../services/firebase';
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import React from 'react';

function UnauthenticatedApp() {
    const [show,setShow]=React.useState(false);
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        setShow(true);
    };

    return (
        <>
            <h2>Log in to join a chat room!</h2>
            <div>
                <button onClick={login} className="login">
                    Login with Google
                </button>
            </div>
            {show && <div className="error">Wait for a while .....</div>}
        </>
    );
}

export { UnauthenticatedApp };