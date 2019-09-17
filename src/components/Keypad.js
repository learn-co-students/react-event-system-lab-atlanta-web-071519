import React, { Component } from 'react';

class Keypad extends Component {
    handleKeyUp = (e) => {
        console.log('Entering password...')
    }


    render() {
        return (
            <div>
                <input placeholder="password" onKeyUp={this.handleKeyUp} type="password" />
            </div>
        );
    }
}

export default Keypad;