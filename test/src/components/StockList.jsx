import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import StockInfo from 'components/StockInfo.jsx';

import './StockList.css';

export default class AccountList extends React.Component {
    static propTypes = {
        stocks: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {stocks} = this.props;

        let children;
        if (stocks.length) {
            children = stocks.map(s => (
                <ListGroupItem key={s.id} action>
                    <StockInfo {...s}/>
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
