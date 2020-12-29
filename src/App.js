import './css/App.css';
import { useContext } from 'react';
import { Router } from '@reach/router';
import Home from './views/public/Home';

function App() {
  return (
    <>
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}

export default App;
