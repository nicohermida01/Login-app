import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Images from './commons/Images';
import Home from './pages/Home';
import EditAccount from './pages/EditAccount';
import AddAccount from './pages/AddAccount';
import Header from './components/Header';
import AppProvider from './context/AppProvider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';

const Index = () => {
  return(
    <Fragment>

      <Helmet>
        <title>Login App</title>
        <link rel='icon' type='image/x-icon' href={Images.favicon} />
      </Helmet>

  

      <BrowserRouter>
        <AppProvider>
          <Header />
          <div className='appContainer'>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='/edit-account/:id' component={EditAccount} />
              <Route path='/add-account' component={AddAccount} />
              <Route path='/user-profile' component={UserProfile} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/sign-up' component={SignUp} />
            </Switch>  
          </div>
        </AppProvider>
      </BrowserRouter>

    </Fragment>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));


