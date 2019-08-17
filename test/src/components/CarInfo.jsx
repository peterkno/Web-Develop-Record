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

import './CarInfo.css';


export default class CarInfo extends React.Component {
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
                        牌照號碼:<Input className='license ml-sm-2' type="text" innerRef={el => {this.inputLicense = el}} 
                            value={this.state.licensePlate} onChange={this.handleLicenseChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        市值:<Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={this.state.value} onChange={this.handleValueChange} />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleLicenseChange(e) {
        const license = e.target.value;
        console.log(license);
        // this.setState({
        //     licensePlate: license
        // }, () => {
        //     console.log('car license: '+this.props.licensePlate);
        //     this.props.OnLicense(this.props.id, this.state.licensePlate);
        // });
        this.props.OnLicense(this.props.id, license);
    }

    handleValueChange(e) {
        const num = e.target.value;
        // console.log(license);
        // this.setState({
        //     value: num
        // }, () => {
        //     console.log('car value: '+this.state.value);
        //     this.props.OnValue(this.state.id, this.state.value);
        // });
        this.props.OnValue(this.props.id, num);
    }
}
