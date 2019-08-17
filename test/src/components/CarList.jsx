import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import CarInfo from 'components/CarInfo.jsx';

import './CarList.css';

export default class CarList extends React.Component {
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
        const {cars} = this.props;

        let children;
        if (cars.length) {
            children = cars.map(c => (
                <ListGroupItem key={c.id} action>
                    <CarInfo {...c}/>
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
