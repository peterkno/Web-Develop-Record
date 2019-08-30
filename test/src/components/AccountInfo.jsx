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

import './AccountInfo.css';


export default class AccountInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        type: PropTypes.string,
        ID: PropTypes.string,
        value: PropTypes.number,
        OnType: PropTypes.func,
        OnID: PropTypes.func,
        OnValue: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputType = null;
        this.inputID = null
        this.inputValue = null;

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleIDChange = this.handleIDChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        存款種類 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputType = el}} 
                            value={this.props.type} onChange={this.handleTypeChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        存款帳號 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputID = el}} 
                            value={this.props.ID} onChange={this.handleIDChange} />
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        存款金額 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
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
    handleIDChange(e) {
        const ID = e.target.value;
        this.props.OnID(this.props.id, ID);
    }
    handleValueChange(e) {
        const num = e.target.value;
        this.props.OnValue(this.props.id, num);
    }
}
