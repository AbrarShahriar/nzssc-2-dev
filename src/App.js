import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
            <Switch>
              <div className="app">

                {/* SIDEBAR */}
                <Sidebar />

                <Route exact path='/'>
                    {/* HOME */}
                    <Home />
                </Route>
                
                </div>
            </Switch>
    </Router>
  );
}

export default App;
