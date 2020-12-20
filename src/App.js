import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import stockkarte from './components/bienencomp/stockkarte';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import createBH from './components/bienencomp/CreateBH';
import Map from './components/map/map';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* Die Pfade hier müssen mit den NavLinks in SignedInLinks übereinstimmen */}
            <Route exact path='/' component={Dashboard} />
            <Route path='/stockkarte/:id' component={stockkarte} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/createbh' component={createBH} />
            <Route path='/map' component={Map} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }    
}

export default App;
