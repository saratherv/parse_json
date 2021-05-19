import * as React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'


class App extends React.Component {
  render() {
    return (
      <Router>
       <br/>
       <Route path="/" exact component={HomePage} />
       
    </Router>
    );
  }
}

export default App;