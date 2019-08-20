import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import EmailInfo from 'components/EmailInfo.jsx';

import './EmailList.css';

export default class EmailList extends React.Component {
    static propTypes = {
        emails: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {emails} = this.props;

        let children;
        if (emails.length) {
            children = emails.map(e => (
                <ListGroupItem key={e.id} action>
                    <EmailInfo {...e}/>
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
