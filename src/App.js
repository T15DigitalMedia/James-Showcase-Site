import './css/App.css';
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
