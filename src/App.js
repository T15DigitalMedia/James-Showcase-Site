import './css/App.css';
import { useContext } from 'react';
import { Router } from '@reach/router';
import { UserContext } from "./providers/UserProvider";
import Home from './views/public/Home';
import Admin from './views/private/Admin';
import SignIn from './components/signIn/SignIn';

function App() {
  const user = useContext(UserContext);
  return (
    <>
      <Router>
        <Home path="/" />
        {user ?
          <Admin path="/admin/*"/>
        : 
          <SignIn path="/admin" />
        } 
      </Router>
    </>
  );
}

export default App;
