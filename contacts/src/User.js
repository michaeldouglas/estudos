import React, { Component } from 'react'

class User extends Component {
    state = {
        username: 'Michael'
    }

    render() {
        return (
            <div>
                {this.state.username}
            </div>
        )
    }
}

export default User