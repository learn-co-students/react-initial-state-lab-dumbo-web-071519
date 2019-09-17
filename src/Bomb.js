import React from 'react';

export default class Bomb extends React.Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // state = {
    //     secondsLeft: this.props.initialCount
    // }
    
    // iife = () => {
    //     this.setState({secondsLeft: this.props.intialCount})
    // }

    render() { 
       
    let message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
        <div>{message}</div>
        )
    }
    // {/* <div>{ {this.iife()}</div> } */}

}
