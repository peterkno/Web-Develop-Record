import Component from 'components/Component.jsx';
import Setting from 'components/Setting.jsx';
import React from 'react';

import './Main.css';

export default class Main extends React.Component {
    static initCount = 5;
    
    constructor(props) {
        super(props);
        // console.log("initCount : " + initCount);
        this.state = {
            count: Main.initCount
        };
        this.countdownId = null;

        this.handleReset = this.handleReset.bind(this);
        this.tick = this.tick.bind(this);
    }

    render() {
        return (
          <div className='main'>
              <h1>Hello React</h1>
              <Component count={this.state.count} onReset={this.handleReset}/>
              <Setting />
          </div> 
        );
    }

    tick() {
        // console.log('tick');
        if(this.state.count > 0) {
            this.setState((prevState, props) => ({
                count: prevState.count - 1
            }));
            // this.setState({ // triggrt re-rendering
            //     count: this.state.count - 1
            // }); // obj merged to this.state
        } else {
            clearInterval(this.countdownId);

            this.setState({
                count: Main.initCount
            }, () => { // called back after the state has been set
                this.countdownId = setInterval(() => this.tick(), 1000)
            });
    
        }
    }

    // componentWillMount() {
    //     console.log('will');
        
    // }

    // lifecycle Method
    componentDidMount() {
        // console.log('did');
        
        this.countdownId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdownId);
    }

    handleReset() {
        console.log('reset');
        clearInterval(this.countdownId);

        this.setState({
            count: Main.initCount
        }, () => { // called back after the state has been set
            this.countdownId = setInterval(() => this.tick(), 1000)
        });
    }

}