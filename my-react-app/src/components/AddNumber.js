import React, { Component } from 'react';

class AddNumber extends Component {
    state={
        number:0
    }

    changeNumber (e) {
        let value = Number(e.target.value)
        this.setState({number:value})
    }

    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={(e) => {
                    e.preventDefault()
                    this.props.clickUpdatedNum(this.state.number)
                }}/>
                <input type="text" value={this.state.number} onChange={this.changeNumber.bind(this)}/>
            </div>
        );
    }
}

export default AddNumber;