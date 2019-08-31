import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import WarrantInfo from 'components/WarrantInfo.jsx';

import './WarrantList.css';

export default class WarrantList extends React.Component {
    static propTypes = {
        warrants: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {warrants} = this.props;

        let children;
        if (warrants.length) {
            children = warrants.map(w => (
                <ListGroupItem key={w.id} action>
                    <WarrantInfo {...w}/>
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
