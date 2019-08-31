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

import './DebtorInfo.css';


export default class WarrantInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.number,
        OnName: PropTypes.func,
        OnValue: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputName = null;
        this.inputValue = null;

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        本人替
                        <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputName = el}} 
                            value={this.props.name} onChange={this.handleNameChange}/>
                        做保證人，擔保
                    </FormGroup>
                    
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={this.props.value} onChange={this.handleValueChange} />
                        元債務
                    </FormGroup>
                    
                </Form>
            </div>
        );
    }

    handleNameChange(e) {
        const name = e.target.value;
        this.props.OnName(this.props.id, name);
    }
    handleValueChange(e) {
        const value = e.target.value;
        this.props.OnValue(this.props.id, value);
    }
}
