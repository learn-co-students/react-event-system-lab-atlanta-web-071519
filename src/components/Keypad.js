// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{
    constructor(props){
        super(props)
    }
    
    button = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <input type="password" onKeyUp={this.button}></input>
        )
    }
}