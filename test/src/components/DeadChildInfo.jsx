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

import './DeadChildInfo.css';

export default class DeadChildInfo extends React.Component {
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

        this.handleHaveChildChecekd = this.handleHaveChildChecekd.bind(this);
        
    }

    render() {
        const {haveChild, orderDead} = this.props;
        return (
            <div>
                <FormGroup check inline>
                    第{orderDead}位已歿子女，底下是否有子女
                    <Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={haveChild} 
                    onChange={this.handleHaveChildChecekd} />
                </FormGroup>
            </div>
        );
    }

    handleHaveChildChecekd(e) {
        let newhaveChild = !this.props.haveChild;
        this.props.OnHaveChild(this.props.id, newhaveChild);
    }


}
