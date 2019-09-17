// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focusBtn = () => {
        console.log('Good!');
    }
    blurBtn = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
                <button onFocus={this.focusBtn} onBlur={this.blurBtn}></button>
            </div>
        )
    }
}