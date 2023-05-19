
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import './App.css';
import {auth} from './services/firebase';
  
function App() {
    const [user] = useAuthState(auth); 
    console.log(user)

    return (
        <div className="container">
            <h1>💬 Chat Room</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default App;
