import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Alert,
    Input,
    Form,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import './FourthPage.css';

export default class FourthPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            // postLoading: false,
            // posts: []
        };

        // this.handleCreatePost = this.handleCreatePost.bind(this);
        // this.handleCreateVote = this.handleCreateVote.bind(this);
    }

    componentDidMount() {
        this.props.OpenNavbar();
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        // if (this.state.weatherLoading) {
        //     cancelWeather();
        // }
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.searchText !== this.props.searchText) {
        //     this.listPosts(nextProps.searchText);
        // }
    }

    render() {

        return (
            <div>
                 <div id="banner-fg" class="d-flex flex-column justify-content-between">
                    <div className='mb-2 mt-sm-3'>
                        <h1><b>寄出遺囑</b></h1>
                    </div>
                    <div class="ID">
                        <form >
                            <Input id="password" type="password" name="身分證號" />
                        </form>
                        <p id="reminder">請輸入死者的身分證號碼</p>
                    </div>
                    <div>
                        <button type="button" id="send">寄出<br/>遺囑</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
