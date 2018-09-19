import React, { Component } from 'react'
import { Segment, Form, Button} from 'semantic-ui-react'

const emptyEvent = {
  title: '',
  date:'',
  city:'',
  venue: '',
  hostedBy: ''
}

class EventForm extends Component {
  state = {
    event: {
      title: '',
      date:'',
      city:'',
      venue: '',
      hostedBy: ''
    }
  }
  onFormSubmit = (evt) => {
      evt.preventDefault();
      console.log(this.state.event.id);
      if (this.state.event.id){
        this.props.updateEvent(this.state.event);
      } else {
        this.props.createEvent(this.state.event);
      }

  }
  componentDidMount(){
    
    if(this.props.selectedEvent !== null){
      this.setState({event: this.props.selectedEvent});
    } 
  }

  componentWillReceiveProps(nextProps){
  
    if (nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({event: nextProps.selectedEvent || emptyEvent});

    }
  }
  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({event: newEvent});
  }
  render() {
    const {handleFormCancel} = this.props;
    const {event} = this.state;
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name='title' onChange={this.onInputChange} value = {event.title} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name='date' onChange={this.onInputChange} type="date" value = {event.date} placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name='city' onChange={this.onInputChange} value ={event.city} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={handleFormCancel} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default EventForm