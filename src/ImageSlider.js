import React, { Component } from 'react';

class ImageSlider extends Component {

    state = {
        currentSlideIndex: 0
    }

    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}

export default ImageSlider