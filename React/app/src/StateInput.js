import React, { Component } from 'react'

class StateInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: ''
        }

        setTimeout(() => {
            // this.state.name = 'MICHAEL';
            this.setState({
                name: 'Michael Douglas',
                email: 'BLA'
            })
        }, 1000)
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <input type="text" value={this.state.name}/>
                <input type="text" value={this.state.email}/>
            </div>
        )
    }
}

export default StateInput