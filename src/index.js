import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Images from './commons/Images';
import Home from './pages/Home';
import EditAccount from './pages/EditAccount';
import AddAccount from './pages/AddAccount';
import Header from './components/Header';

const Index = () => {
  return(
    <React.StrictMode>
      <Helmet>
        <title>Login App</title>
        <link rel='icon' type='image/x-icon' href={Images.favicon} />
      </Helmet>

      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/edit/:id' component={EditAccount} />
          <Route path='/add' component={AddAccount} />
        </Switch>  
      </BrowserRouter>

    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));


