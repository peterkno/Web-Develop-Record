import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import BuildingInfo from 'components/BuildingInfo.jsx';

import './BuildingList.css';

export default class BuildingList extends React.Component {
    static propTypes = {
        buildings: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {buildings} = this.props;

        let children;
        if (buildings.length) {
            children = buildings.map(b => (
                <ListGroupItem key={b.id} action>
                    <BuildingInfo {...b}/>
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
