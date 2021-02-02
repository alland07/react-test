import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Card from '../components/Card';
import Height from '../components/Height';

const Routeur = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route path="/yo" component={Height}/>
      </Switch>                    
    </Router>
  ); 
export default Router