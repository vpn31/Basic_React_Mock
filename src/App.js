import './App.css';
import React,{useState} from 'react';
import Team from './Components/Team';
import Introduction from './Components/Introduction';
import About from './Components/About';
import User from './Components/User';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Routes>
            <Route exact path='/' element={< Introduction />}></Route>
            <Route exact path='/team' element={< Team />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/newUser' element={<User/>}></Route>
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
