// your ImageSlider code here!

// ## Image slider

// Let's pretend we're making an awesome slider for our new portfolio site.
//     Naturally, we'll use React to do so! We have to start somewhere, so in this lab
// we'll just focus on setting up the initial state of the slider.

// 1.  Its initial state should have a property called`currentSlideIndex` that
// starts at`0`.
// 2.  It should only render out the text`'I am on slide <CURRENT_SLIDE>'`, where
//     `<CURRENT_SLIDE>` is the value of`this.state.currentSlideIndex`.

import React, { Component } from 'react';
export default class ImageSlider extends Component {
    constructor(props){
        super(props)
        this.state={
            currentSlideIndex: 0
        }
    }
    render() {
        return (
            <div>{`I am on slide ${this.state.currentSlideIndex}`}</div>
        )
    }
}