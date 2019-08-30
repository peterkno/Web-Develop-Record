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

import './InsuranceInfo.css';


export default class InsuranceInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        company: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.number,
        date: PropTypes.string,
        OnCompany: PropTypes.func,
        OnType: PropTypes.func,
        OnValue: PropTypes.func,
        OnDate: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputCompany = null;
        this.inputType = null;
        this.inputValue = null;
        this.inputDate = null;

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        
    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        保險公司 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputCompany = el}} 
                            value={this.props.company} onChange={this.handleCompanyChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        保單種類 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputType = el}} 
                            value={this.props.type} onChange={this.handleTypeChange} />
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        保險金額 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputValue = el}} 
                            value={this.props.value} onChange={this.handleValueChange} />元
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        保單生效日期 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputDate = el}} 
                            value={this.props.date} onChange={this.handleDateChange} />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleCompanyChange(e) {
        const company = e.target.value;
        this.props.OnCompany(this.props.id, company);
    }
    handleTypeChange(e) {
        const type = e.target.value;
        this.props.OnType(this.props.id, type);
    }
    handleValueChange(e) {
        const num = e.target.value;
        this.props.OnValue(this.props.id, num);
    }
    handleDateChange(e) {
        const date = e.target.value;
        this.props.OnDate(this.props.id, date);
    }
}
