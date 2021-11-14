import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home';
import Event1 from './events/Event1';
import Event2 from './events/Event2';
import Event3 from './events/Event3';
import Event4 from './events/Event4';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event1" component={Event1} />
          <Route path="/event2" component={Event2} />
          <Route path="/event3" component={Event3} />
          <Route path="/event4" component={Event4} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
