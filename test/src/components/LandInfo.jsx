import React from 'react';
import {
    Alert,
    Input,
    Form,
    FormGroup,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupAddonProps,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './LandInfo.css';


export default class LandInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        number: PropTypes.string,
        nowValue: PropTypes.number,
        finalValue: PropTypes.number,
        OnNumber: PropTypes.func,
        OnNowValue: PropTypes.func,
        OnFinalValue: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputNumber = null;
        this.inputNowValue = null;
        this.inputFinalValue = null;

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleNowValueChange = this.handleNowValueChange.bind(this);
        this.handleFinalValueChange = this.handleFinalValueChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        地號 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputNumber = el}} 
                            value={this.props.number} onChange={this.handleNumberChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        公告土地現值 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputNowValue = el}} 
                            value={this.props.nowValue} onChange={this.handleNowValueChange} />
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        市值(成交價) : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputFinalValue = el}} 
                            value={this.props.finalValue} onChange={this.handleFinalValueChange} />元(此欄必填)
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleNumberChange(e) {
        const number = e.target.value;
        this.props.OnNumber(this.props.id, number);
    }
    handleNowValueChange(e) {
        const nowValue = e.target.value;
        this.props.OnNowValue(this.props.id, nowValue);
    }
    handleFinalValueChange(e) {
        const finalValue = e.target.value;
        this.props.OnFinalValue(this.props.id, finalValue);
    }
}
