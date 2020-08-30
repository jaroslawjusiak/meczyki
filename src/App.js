import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import MainPage from './components/MainPage/MainPage';
import Layout from './hoc/Layout/Layout';
import classes from './App.module.css';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

function App(props) {

  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );

  return(
    <div className={classes.reset}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );

}

export default App;
