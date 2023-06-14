import './App.css';
import React,{useState} from 'react';
import Team from './Components/Team';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/' element={< Introduction />}></Route>
            <Route exact path='/team' element={< Team />}></Route>
            <Route exact path='/about' element={< About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
