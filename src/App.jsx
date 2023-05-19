import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebase';
import './App.css';

function App() {
    const [user ] = useAuthState(auth);

    return (
        <div className="container">
            <h1>💬 Chat Room</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default App;
