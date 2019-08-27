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
import {
    listHeritage as llistHeritageFromApi,
    createHeritage as createHeritageFromApi,
} from 'api/heritages.js';

import './FirstPage.css';

export default class FirstPageV2 extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        CloseNavbar:　PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            test: []
        };

        this.handleList = this.handleList.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.CloseNavbar();
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
            <div className='full-height'>
                <div className='first-page  full-height'>
                    <h1><b>遺產管家</b></h1>
                    <div className="first">
                        <Link to="/second-page">
                            <button type="button" className="button" id="first" >1</button>
                        </Link>
                        <div>
                            <h2><b>填寫資料</b></h2>
                            <p>填寫基本資料、資產表格和家庭規模讓我們幫您算出遺產如何分配</p>
                        </div>
                    </div>
                    
                    <div className="clear"></div>

                    <div className="second">
                        <Link to="/third-page">
                            <button type="button" className="button" id="second">2</button>
                        </Link>
                        <div>
                            <h2><b>上傳遺囑</b></h2>
                            <p>參考我們的遺產計算結果、示範格式與特留分提醒，手寫遺囑後上傳</p>
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="third">
                        <Link to="/fourth-page">
                            <button type="button" className="button" id="third">3</button>
                        </Link>
                        <div>
                            <h2><b>寄出遺囑</b></h2>
                            <p>經過身分驗證和死亡證明審查，系統將自動寄出遺囑至指定信箱</p>
                        </div>
                    </div>

                    <div className="third">
                        <Button type="button" className="button" id="third" onClick={this.handleList}>list</Button>
                    </div>

                    <div className="third">
                        <Button type="button" className="button" id="third" onClick={this.handleCreate}>Create</Button>
                    </div>
                    
                </div>
            </div>
        );
    }
    
    handleList() {
        let searchText='';
        llistHeritageFromApi(searchText).then(heritages => {
            console.warn("heritages", heritages);
            this.setState(() => {
                test: heritages
            });
        }).catch(err => {
            console.error('Error listing posts', err);
        });   
    }

    handleCreate() {
        let personID = String("ABCD");
        let heritage = Number(500);
        createHeritageFromApi(personID, heritage).then(heritages =>{
            this.handleList();
        }).catch(err => {
            console.error('Error creating posts', err);
        });   
    }
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
