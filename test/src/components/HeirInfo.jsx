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
import GivenList from 'components/GivenList.jsx';

export default class HeirInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        relatives: PropTypes.string,
        seniority: PropTypes.string,
        givenNum: PropTypes.number,
        givenArr: PropTypes.array,
        order: PropTypes.number,
        OnSeniority: PropTypes.func,
        OnGivenNum: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.inputSeniority = null;
        this.inputGiven = null;

        this.handleSeniorityChange = this.handleSeniorityChange.bind(this);
        this.handleGivenChange = this.handleGivenChange.bind(this);
        
    }

    render() {
        const {id, relatives, seniority, givenNum, givenArr, order} = this.props;
        return (
            <div>
                <Form inline>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        {
                            relatives === "配偶" 
                            ? `${relatives}`
                            : `第${order}名${relatives}`
                        }
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        關係 : <Input className='license ml-sm-2' type="text" innerRef={el => {this.inputSeniority = el}} 
                            value={seniority} onChange={this.handleSeniorityChange}/>
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                        贈與數量 : <Input className='value ml-sm-2' type="text" innerRef={el => {this.inputGiven = el}} 
                            value={givenNum} onChange={this.handleGivenChange} />
                    </FormGroup>
                </Form>
                <GivenList givens={givenArr} heirID={id}/>
            </div>
        );
    }

    handleSeniorityChange(e) {
        const seniority = e.target.value;
        this.props.OnSeniority(this.props.id, seniority);
    }

    handleGivenChange(e) {
        const num = e.target.value;
        this.props.OnGivenNum(this.props.id, num);
    }
}
