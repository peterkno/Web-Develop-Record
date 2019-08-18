import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import MotorInfo from 'components/MotorInfo.jsx';

import './MotorList.css';

export default class MotorList extends React.Component {
    static propTypes = {
        motors: PropTypes.array,
        // filter: PropTypes.string,
        // onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {motors} = this.props;

        let children;
        if (motors.length) {
            children = motors.map(m => (
                <ListGroupItem key={m.id} action>
                    <MotorInfo {...m}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='motor-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}
