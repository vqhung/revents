import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementCounter, decrementCounter} from './testActions'

const mapState = (state) => ({
    data: state.test.data
})

const actions ={
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>This is test area</h1>
        <h1>Data: {this.props.data}</h1>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent);