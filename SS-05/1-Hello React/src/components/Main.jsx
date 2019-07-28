import Component from 'components/Component.jsx';
import React from 'react';

import './Main.css';

export default class Main extends React.Component {
    static initCount = 5;
    
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
        this.countdownId = null;

        this.handleReset = this.handleReset.bind(this);
        this.tick = this.tick.bind(this);
    }

    render() {
        return (
          <div className='main'>
              <h1>Hello React</h1>
              <Component count={this.state.count}
              onRest={this.handleReset}/>
          </div>  
        );
    }

    tick() {
        console.log('tick');
        if(this.state.count > 0) {
            /*
             * State updates
             */
            this.setState((prevState, props) => ({
                count: prevState.count - 1
            }))
        } else {
            clearInterval(this.countdownId);
        }
    }

    componentWillMount() {
        console.log('will');
        
    }

    // lifecycle Method
    componentDidMount() {
        console.log('did');
        
        this.countdownId = setInterval(() => this.tick(), 1000);
    }

    handleReset() {
        clearInterval(this.countdownId);
        this.setState({
            count: 5
        }, () => { // called back after the state has been set
            this.countdownId = setInterval(() => this.tick(), 1000);
        });
    }

}