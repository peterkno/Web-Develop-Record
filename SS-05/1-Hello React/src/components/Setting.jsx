import React from 'react';

// import './Setting.css';

export default class Setting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "Please type"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='texe' value={this.state.inputValue}
                onChange={this.handleInputChange} />
                {/* <input type="submit" value="Submit"
                onSubmit={this.handleSubmit} /> */}
            </form>
        );
    }

    handleInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleSubmit(e) { 
        const v = this.state.inputValue;
        console.log(v);
        alert(v);

        // return false;
    }

}