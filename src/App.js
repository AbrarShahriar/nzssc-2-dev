import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Topic from './pages/Topic';
import About from './pages/About';
import React, { useEffect, useState } from 'react';
import PostContent from './pages/PostContent';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import HeaderMenu from './components/HeaderMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import { auth, db } from './firebase'
import { useStateValue } from './StateProvider';

function App() {
    const [{ user, news, articles, bookReviews }, dispatch] = useStateValue()
    useEffect(() => {
        auth.onAuthStateChanged(loggedInUser => {
            dispatch({
                type: 'SET_USER',
                user: loggedInUser
            })
        })

        //articles
        db.collection('article')
        .orderBy('timestamp', 'desc').limit(3).get()
        .then(docs => {
            let articlesArr = []
            docs.forEach(doc => articlesArr.push({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                type: 'SET_ARTICLES',
                articles: articlesArr
            })
        })
        //news
        db.collection('news')
        .orderBy('timestamp', 'desc').limit(3).get()
        .then(docs => {
            let newsArr = []
            docs.forEach(doc => newsArr.push({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                type: 'SET_NEWS',
                news: newsArr
            })
        })
        //bookreview
        db.collection('bookreview')
        .orderBy('timestamp', 'desc').limit(3).get()
        .then(docs => {
            let bookReviewArr = []
            docs.forEach(doc => bookReviewArr.push({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                type: 'SET_BOOKREVIEWS',
                bookReviews: bookReviewArr
            })
        })
    }, [])
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
                    <Post topic='news' />
                </Route>

                {/* TOPIC - article */}
                <Route exact path='/articles'>
                    <Topic topic='articles' />
                </Route>
                {/* TOPIC with POST */}
                <Route exact path='/articles/:id'>
                    <Post topic='article' />
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
