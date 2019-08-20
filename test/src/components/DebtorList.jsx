import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import DebtorInfo from 'components/DebtorInfo.jsx';

import './DebtorList.css';

export default class DebtorList extends React.Component {
    static propTypes = {
        debtors: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {debtors} = this.props;

        let children;
        if (debtors.length) {
            children = debtors.map(d => (
                <ListGroupItem key={d.id} action>
                    <DebtorInfo {...d}/>
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
