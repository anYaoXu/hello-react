import React, {Component}from 'react';

export default class Header extends Component{
    render(){
        return (
            <div>
            <h1>Header</h1>
            <h2>{this.props.name}</h2>
            </div>
        )
    }
}