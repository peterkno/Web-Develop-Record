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
        // city: PropTypes.string,
        // code: PropTypes.number,
        // group: PropTypes.string,
        // description: PropTypes.string,
        // temp: PropTypes.number,
        // unit: PropTypes.string,
        // weatherLoading: PropTypes.bool,
        // masking: PropTypes.bool,
        // dispatch: PropTypes.func
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
        // this.props.dispatch(getWeather('Hsinchu', this.props.unit));
        // this.listPosts(this.props.searchText);
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
                <div classname='fourth-page'>
                <h1>寄出遺囑</h1>
                <form>
                    <input type="password" name="身分證號" />
                </form>
                <p>請輸入死者的身分證號碼</p>
                <button type="button">寄出遺囑</button>
                </div>
                
                <br />
                <div>
                    <Link to="/">
                        <button type="button">
                            首頁
                        </button>
                    </Link>
                    <Link to="/second-page">
                        <button type="button">
                            填寫資料
                        </button>
                    </Link>
                    <Link to="/third-page">
                        <button type="button">
                            上傳遺囑
                        </button>
                    </Link>
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