import React, { Component } from 'react'

import './Home.scss'

class Home extends Component 
{

    constructor(props) 
    {
        super (props)
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
      

    render()
    {
        return (
            <div>
                <nav id="navbar-center" className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-targe="#navbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="" className="navbar-brand">
                                <img src="/images/tilst.png" alt="" className="img-responsive" />
                            </a>
                        </div>
                        <div className="navbar-collapse collapse" id="">
                            <ul className="nav navbar-nav">
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1>Kanban Board React.js Redux</h1>
                <h2> {this.formatName({firstName: 'Michael', lastName: 'Araujo'})} </h2>
            </div>
        )
    }
}

export default Home