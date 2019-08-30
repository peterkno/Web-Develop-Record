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

import './MotorInfo.css';


export default class MotorInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        licensePlate: PropTypes.string,
        value: PropTypes.number,
        OnLicense: PropTypes.func,
        OnValue: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputLicense = null;
        this.inputValue = null;

        this.handleLicenseChange = this.handleLicenseChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        牌照號碼 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputLicense = el}} 
                            value={this.props.licensePlate} onChange={this.handleLicenseChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        市值 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={this.props.value} onChange={this.handleValueChange} />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleLicenseChange(e) {
        const license = e.target.value;
        this.props.OnLicense(this.props.id, license);
    }

    handleValueChange(e) {
        const num = e.target.value;
        this.props.OnValue(this.props.id, num);
    }
}
