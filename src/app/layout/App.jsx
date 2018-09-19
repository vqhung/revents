import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/navBar/NavBar'
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/eventdetailed/EventDetailedPage'
import PeopleDashboardPage from '../../features/user/PeopleDashboard/PeopleDashboardPage'
import UserDetailedPage from '../../features/user/userdetailed/UserDetailedPage'

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
                <Route path = '/events' component= {EventDashboard}/>
                <Route path = '/events/:id' component = {EventDetailedPage} />
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

