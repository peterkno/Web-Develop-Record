import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import InsuranceInfo from 'components/InsuranceInfo.jsx';

import './InsuranceList.css';

export default class InsuranceList extends React.Component {
    static propTypes = {
        insurances: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {insurances} = this.props;

        let children;
        if (insurances.length) {
            children = insurances.map(i => (
                <ListGroupItem key={i.id} action>
                    <InsuranceInfo {...i}/>
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
