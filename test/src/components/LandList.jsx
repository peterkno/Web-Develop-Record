import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import LandInfo from 'components/LandInfo.jsx';

import './LandList.css';

export default class LandList extends React.Component {
    static propTypes = {
        lands: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {lands} = this.props;

        let children;
        if (lands.length) {
            children = lands.map(l => (
                <ListGroupItem key={l.id} action>
                    <LandInfo {...l}/>
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
