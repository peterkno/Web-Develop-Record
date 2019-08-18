import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import AccountInfo from 'components/AccountInfo.jsx';

import './AccountList.css';

export default class AccountList extends React.Component {
    static propTypes = {
        accounts: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {accounts} = this.props;

        let children;
        if (accounts.length) {
            children = accounts.map(a => (
                <ListGroupItem key={a.id} action>
                    <AccountInfo {...a}/>
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
