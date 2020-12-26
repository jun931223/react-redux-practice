import React, { Component } from 'react';
import DisplayNumber from '../containers/DisplayNumber'

class DisplayNumberRoot extends Component {
    // constructor (props) {
    //     super(props)
    // }

    clickHandle () {
        alert('hello')
    }


    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber  unit='kg' clickHandle={this.clickHandle.bind(this)}/>
            </div>
        );
    }
}

export default DisplayNumberRoot;