import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Card from '../components/Card';
import Hello from '../components/Hello';

const Router =() => {
    return (
        <Router>
                <Switch>
                    <Route exact path ="/" component={Card}/>
                    <Route exact path ="/yo" component={Hello}/>
                </Switch>
        </Router>
    )
}
export default Router