  import React from 'react';
  import './App.css';
  import Homepage from './components/Homepage';
  import ContactUs from './components/ContactUs';
  import {Route , Link, BrowserRouter, Switch} from 'react-router-dom';
  import Thankyou from './components/Thankyou';


  function App() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/ContactUS" component={ContactUs} />
          <Route exact={true} path="/Thankyou" component={Thankyou} />
        </Switch>
      </BrowserRouter>
  );
  }

  export default App;