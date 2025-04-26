import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    );
}

export default App;