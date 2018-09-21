import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
import EventDashboard from '../../features/event/eventdashboard/EventDashboard'
import NavBar from '../../features/nav/navBar/NavBar'
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/eventdetailed/EventDetailedPage'
import PeopleDashboardPage from '../../features/user/PeopleDashboard/PeopleDashboardPage'
import UserDetailedPage from '../../features/user/userdetailed/UserDetailedPage'
import TestComponent from '../../features/testarea/TestComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path = "/" component={HomePage} />
        </Switch>

        <Route path = "/(.+)" render={() => (
            <div>
            <NavBar/>     
            <Container className="main">   
              <Switch>
                <Route path = '/events' component = {EventDashboard} />
                <Route path = '/test' component = {TestComponent} />
                <Route path = '/event/:id' component = {EventDetailedPage} />
                <Route path = '/manage/:id' component = {EventForm} />
                <Route path = '/people' component = {PeopleDashboardPage} />
                <Route path = '/profile/:id' component = {UserDetailedPage} />
                <Route path = '/settings' component = {SettingsDashboard} />
                <Route path = '/createEvent' component = {EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>
      
    );
  }
}

export default App;

