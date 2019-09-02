import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import DeadChildInfo from 'components/DeadChildInfo.jsx';

import './DeadChildList.css';

export default class DeadChildList extends React.Component {
    static propTypes = {
        cars: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {deadChilds} = this.props;

        let children;
        if (deadChilds.length) {
            children = deadChilds.map(d => (
                <ListGroupItem key={d.id} action>
                    <DeadChildInfo {...d}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='car-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}
