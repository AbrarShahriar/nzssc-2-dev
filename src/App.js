import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Topic from './pages/Topic';
import ExploreBtn from './components/ExploreBtn';
import About from './pages/About';
import React from 'react';
import PostContent from './pages/PostContent';

function App() {
  return (
    <Router>
            <Switch>
              <div className="app">

                {/* SIDEBAR */}
                <Sidebar />

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
                    <ExploreBtn />
                </Route>

                {/* TOPIC - article */}
                <Route exact path='/articles'>
                    <Topic topic='articles' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/articles/:id'>
                    <ExploreBtn />
                </Route>

                {/* TOPIC - bookreview */}
                <Route path='/bookreview'>
                    <Topic topic='bookreview' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/bookreview/:id'>
                    <ExploreBtn />
                </Route>

                {/* ABOUT */}
                <Route exact path='/about'>
                    <About />
                </Route>
                
                {/* NEW */}
                <Route exact path='/new'>
                    <PostContent />
                </Route>

                </div>
            </Switch>
    </Router>
  );
}

export default App;
