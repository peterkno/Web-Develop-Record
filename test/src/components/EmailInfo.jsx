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

import './EmailInfo.css';


export default class EmailInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        addr: PropTypes.string,
        OnName: PropTypes.func,
        OnAddr: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputName = null;
        this.inputAddr = null;

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddrChange = this.handleAddrChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        姓名 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputName = el}} 
                            value={this.props.name} onChange={this.handleNameChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        E-mail : <Input className='addr ml-sm-2' type="text" innerRef={el => {this.inputAddr = el}} 
                            value={this.props.addr} onChange={this.handleAddrChange} />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleNameChange(e) {
        const name = e.target.value;
        this.props.OnName(this.props.id, name);
    }
    handleAddrChange(e) {
        const addr = e.target.value;
        this.props.OnAddr(this.props.id, addr);
    }
}
