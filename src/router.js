import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
// import { ConnectedRouter } from 'react-router-redux'
import history from './history'
import samplePage1 from './Pages/samplePage1'
import samplePage2 from './Pages/samplePage2'
import Home from './Pages/homePage'

export default class AppRouter extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/samplePage1' exact component={samplePage1} />
          <Route path='/samplePage2' exact component={samplePage2} />
        </Switch>
      </Router>
    )
  }
}
