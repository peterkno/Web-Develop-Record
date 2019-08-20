import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import CreditorInfo from 'components/CreditorInfo.jsx';

import './CreditorList.css';

export default class CreditorList extends React.Component {
    static propTypes = {
        creditors: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {creditors} = this.props;

        let children;
        if (creditors.length) {
            children = creditors.map(c => (
                <ListGroupItem key={c.id} action>
                    <CreditorInfo {...c}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='account-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}
