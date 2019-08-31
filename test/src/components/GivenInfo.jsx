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

import './HeirInfo.css';


export default class HeirInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.number,
        OnType: PropTypes.func,
        OnValue: PropTypes.func,
        heirID: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputType = null;
        this.inputValue = null;

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    render() {
        const {type, value, heirID} = this.props;
        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        贈與種類 : 
                        <Input className='license ml-sm-2' type="select" bsSize="sm" innerRef={el => {this.inputType = el}} 
                            value={type} onChange={this.handleTypeChange}>
                            <option>結婚</option>
                            <option>分居</option>
                            <option>營業</option>
                        </Input>
                        {/* <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputType = el}} 
                            value={type} onChange={this.handleTypeChange}/> */}
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        贈與金額 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={value} onChange={this.handleValueChange} />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleTypeChange(e) {
        const type = e.target.value;
        this.props.OnType(this.props.heirID, this.props.id, type);
    }

    handleValueChange(e) {
        const num = e.target.value;
        this.props.OnValue(this.props.heirID, this.props.id, num);
    }
}
