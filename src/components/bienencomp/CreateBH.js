import React, { Component } from 'react'

class createBH extends Component {
    state = {
        name: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Um ein Pagereload zu verhindern
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Neues Bienenhaus anlegen</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name Bienenhaus</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="location">Standort des Bienenhauses</label>
                        <input type="text" id="location" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0">Anlegen</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default createBH
