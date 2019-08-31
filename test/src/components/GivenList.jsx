import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import GivenInfo from 'components/GivenInfo.jsx';

import './GivenList.css';

export default class GivenList extends React.Component {
    static propTypes = {
        givens: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {givens, heirID} = this.props;

        let children;
        if (givens.length) {
            children = givens.map(g => (
                <ListGroupItem key={g.id} action>
                    <GivenInfo {...g} heirID={heirID}/>
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
