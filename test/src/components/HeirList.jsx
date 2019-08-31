import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import HeirInfo from 'components/HeirInfo.jsx';

import './HeirList.css';

export default class HeirList extends React.Component {
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
        const {heirs} = this.props;

        let children;
        if (heirs.length) {
            children = heirs.map(h => (
                <ListGroupItem key={h.id} action>
                    <HeirInfo {...h}/>
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
