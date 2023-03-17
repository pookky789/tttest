//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './ToolMudules/TextReplaceTool.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TextReplaceTool from './ToolMudules/TextReplaceTool';
import TextLinesReplaceFollowTextTemplate from './ToolMudules/TextLinesReplaceFollowTextTemplate';
import RemoveLine from './ToolMudules/RemoveLine';
import KeepLine from './ToolMudules/KeepLine';
//import TextLinesReplaceFollowTextTemplate from './TextLinesReplaceFollowTextTemplate';
const Home = () => TextReplaceTool;
const App = () => {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handleLinkClick = (path) => {
    setRoute(path);
    window.history.pushState({}, '', path);
  };

  return (
    
    <>

        <Navbar bg="dark"  variant="dark" expand="lg" className="mb-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleLinkClick('/')} active={route === '/'}>Home</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/ToolMudules/TextReplaceTool')} active={route === '/ToolMudules/TextReplaceTool'}>About</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
      
     

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="sidebar">

            <h4>Replacement</h4>
              <Nav className="flex-column">
                <Nav.Link onClick={() => handleLinkClick('/TextReplaceTool')} className={route === '/TextReplaceTool' ? 'active' : ''}>Normal Text</Nav.Link>
                <Nav.Link onClick={() => handleLinkClick('/TextLinesReplaceFollowTextTemplate')} className={route === '/TextLinesReplaceFollowTextTemplate' ? 'active' : ''}>Replace Line in TextTemplate</Nav.Link>
              </Nav>

              <h4>Removement</h4>
              <Nav className="flex-column">
                <Nav.Link onClick={() => handleLinkClick('/RemoveLine')} className={route === '/RemoveLine' ? 'active' : ''}>Remove Text Lines</Nav.Link>
                <Nav.Link onClick={() => handleLinkClick('/KeepLine')} className={route === '/KeepLine' ? 'active' : ''}>Keep Text Lines</Nav.Link>
              </Nav>

            </div>
          </div>
          <div className="col-md-9">

          {route === '/TextReplaceTool' && <TextReplaceTool />}
          {route === '/TextLinesReplaceFollowTextTemplate' && <TextLinesReplaceFollowTextTemplate />}
          {route === '/RemoveLine' && <RemoveLine />}
          {route === '/KeepLine' && <KeepLine />}

          </div>
        </div>
      </div>

     
    
    </>
  );
};

export default App;
