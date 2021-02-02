import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Card from '../components/Card';
import Height from '../components/Height';

const Rounter = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route path="/yo" component={Height}/>
      </Switch>                    
    </Router>
  ); 
export default Rounter