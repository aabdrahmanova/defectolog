import React, { Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './components/header/header';
import { Wrapper } from './Wrapper';
import { Switch, Route } from 'react-router-dom';
import { About } from './components/about/aboutPage';


const App = () => {
  return (
  <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Wrapper} />
        <Route path="/about" component={About} />
      </Switch>
  </Fragment>
)};

export default App;
