import React from 'react';
import Landing from './landingpage';//js file react nows 
import {Route, Switch} from "react-router-dom";
import Aboutme from './aboutme';
import Project from './projects';
import Contact from './contact'
import Resume  from './resume';

const Main= () => {
    return (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/aboutme" component={Aboutme}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/projects" component={Project}/>
    </Switch>
    );
}

export default Main;