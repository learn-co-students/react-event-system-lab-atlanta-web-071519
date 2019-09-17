import React, { Component } from 'react'

export class EyesOnMe extends Component {
    handleOnFocus = (e) => {
        console.log("Good!")
    }

    handleOnBlur = (e) => {
        console.log("Hey! Eyes on me!")
    }




    render() {
        return (
            <div>
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />
            </div>
        )
    }
}

export default EyesOnMe
