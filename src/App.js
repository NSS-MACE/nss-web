import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home';
import Event1 from './events/Event1';
import Event2 from './events/Event2';
import Event3 from './events/Event3';
import Event4 from './events/Event4';
import Event5 from './events/Event5';
import Event6 from './events/Event6';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/event1" component={Event1} />
          <Route exact path="/event2" component={Event2} />
          <Route exact path="/event3" component={Event3} />
          <Route exact path="/event4" component={Event4} />
          <Route exact path="/event5" component={Event5} />
          <Route exact path="/event6" component={Event6} />
        </Switch>
    </Router>
  );
}

export default App;
