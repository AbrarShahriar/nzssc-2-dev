import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Topic from './pages/Topic';
import About from './pages/About';
import React from 'react';
import PostContent from './pages/PostContent';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
            <Switch>
              <div className="app">

                {/* SIDEBAR */}
                <Sidebar />

                {/* HEADER */}
                <HeaderMenu />

                {/* HOME */}
                <Route exact path='/'>
                    <Home />
                </Route>

                {/* TOPIC - news&notices */}
                <Route exact path='/news&notices'>
                    <Topic topic='news&notices' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/news&notices/:id'>
                    <Post topic='news&notices' />
                </Route>

                {/* TOPIC - article */}
                <Route exact path='/articles'>
                    <Topic topic='articles' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/articles/:id'>
                    <Post topic='articles' />
                </Route>

                {/* TOPIC - bookreview */}
                <Route exact path='/bookreview'>
                    <Topic topic='bookreview' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/bookreview/:id'>
                    <Post topic='bookreview' />    
                </Route>

                {/* ABOUT */}
                <Route exact path='/about'>
                    <About />
                </Route>
                
                {/* NEW */}
                <Route exact path='/new'>
                    <PostContent />
                </Route>

                {/* ADMIN */}
                <Route exact path='/dashboard'>
                    <Dashboard />
                </Route>

                {/* LOGIN */}
                <Route exact path='/login'>
                    <Login />
                </Route>

                {/* REGISTER */}
                <Route exact path='/register'>
                    <Register />
                </Route>

                </div>
            </Switch>
    </Router>
  );
}

export default App;
