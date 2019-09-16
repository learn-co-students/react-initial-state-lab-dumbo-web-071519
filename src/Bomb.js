// your Bomb code here!
// ## A bomb timer

// Take a moment to think about what a bomb does and how it works.Don't get all
// into the nitty gritty — what we're going to focus on right now is the _timer_.

// Let's create a component that represents a bomb timer that counts down until it
// reaches`0`.However, the only thing we're going to focus on right now is
// setting the initial state of the bomb: the amount of seconds left on the timer.
// Since bomb timers can differ, we'll pass in a prop to our `Bomb` component to
// determine what the starting count should be.

// 1.  Its initial state should have a property called`secondsLeft`.
// 2.  The initial value of`secondsLeft` is set by passing in an`initialCount`
// prop to the`Bomb` component.Don't forget to pass the argument props into
// the constructor(i.e., `constructor(props)`).
// 3.  It should render the text`'<SECONDS_LEFT> seconds left before I go boom!'`,
//     where`<SECONDS_LEFT>` is the value of`secondsLeft`.
// 4. ** If`secondsLeft` equals`0`, it should render`'Boom!'` instead.**

import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state={
            secondsLeft: this.props.initialCount
        }
    }
    render(){
        return(
            <div>{this.state.secondsLeft === 0? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</div>
        )
    }
}