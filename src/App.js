import './css/App.css';
import { Router } from '@reach/router';
import Home from './views/public/Home';

function App() {
  return (
    <>
      <Router basepath="/personal-site">
        <Home path="/" />
      </Router>
    </>
  );
}

export default App;
