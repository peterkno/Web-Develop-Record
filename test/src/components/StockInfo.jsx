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

import './StockInfo.css';


export default class AccountInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.number,
        value: PropTypes.number,
        OnType: PropTypes.func,
        OnAmount: PropTypes.func,
        OnValue: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputType = null;
        this.inputAmount = null;
        this.inputValue = null;

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        股號/股名 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputType = el}} 
                            value={this.props.type} onChange={this.handleTypeChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        股數 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputAmount = el}} 
                            value={this.props.amount} onChange={this.handleAmountChange} />
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        每股金額 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={this.props.value} onChange={this.handleValueChange} />元
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleTypeChange(e) {
        const type = e.target.value;
        this.props.OnType(this.props.id, type);
    }
    handleAmountChange(e) {
        const amount = e.target.value;
        this.props.OnAmount(this.props.id, amount);
    }
    handleValueChange(e) {
        const num = e.target.value;
        this.props.OnValue(this.props.id, num);
    }
}
