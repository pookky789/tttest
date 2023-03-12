import logo from './logo.svg';
import './App.css';
import './TextReplaceTool.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TextReplaceTool from './TextReplaceTool';
import TextLinesReplaceFollowTextTemplate from './TextLinesReplaceFollowTextTemplate';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/TextReplaceTool">About</Link></li>
          <li><Link to="/TextReplaceTool">Contact</Link></li>
        </ul>
      </nav>
      <Route path='/TextReplaceTool' component={TextReplaceTool} />

  </Router>

    
  );
}

export default App;
