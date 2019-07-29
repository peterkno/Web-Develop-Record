import React from 'react';

import './Classmate.css';

export default class Classmate extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>name: {this.props.name}</h2>
        )
    }
}