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


import './FirstPage.css';

export default class FirstPage extends React.Component {
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
                <div className='first-page'>
                    <h1>遺產管家</h1>

                    <Link to="/second-page">
                        <button type="button">
                            1
                        </button>
                    </Link>
                    <h2>填寫資料</h2>
                    <p>填寫基本資料、資產表格和家庭規模讓我們幫您算出遺產如何分配</p>
                    <Link to="/third-page">
                        <button type="button">
                            2
                        </button>
                    </Link>
                    <h2>上傳遺囑</h2>
                    <p>參考我們的遺產計算結果、示範格式與特留分提醒，手寫遺囑後上傳</p>
                    <Link to="/fourth-page">
                        <button type="button">
                            3
                        </button>
                    </Link>
                    <h2>寄出遺囑</h2>
                    <p>經過身分驗證和死亡證明審查，系統將自動寄出遺囑至指定信箱</p>
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
