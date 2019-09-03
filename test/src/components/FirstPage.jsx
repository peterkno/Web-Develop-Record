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
// import {
//     listPerson as listPersonFromApi,
//     createPerson as createPersonFromApi,
// } from 'api/persons.js';

import './FirstPage.css';

export default class FirstPageV2 extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        CloseNavbar:　PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };

        // this.handleList = this.handleList.bind(this);
        // this.handleCreate = this.handleCreate.bind(this);

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
            // <div className='full-height'>
                <div className='first-page'>
                    <h1 className='H1'>遺囑管家</h1>
                    <div className="first">
                        {/* <Link to="/second-page"> */}
                        <Link to="/agreement-page">
                            <button type="button" className="button" id="first" >1</button>
                        </Link>
                        <div>
                            <h2 className='H2'>填寫資料</h2>
                            <p className="P">填寫基本資料、資產表格和家庭規模讓我們幫您算出遺產如何分配</p>
                        </div>
                    </div>
                    
                    <div className="clear"></div>

                    <div className="second">
                        <Link to="/third-page">
                            <button type="button" className="button" id="second">2</button>
                        </Link>
                        <div>
                            <h2 className='H2'>上傳遺囑</h2>
                            <p className="P">參考我們的遺產計算結果、示範格式與特留分提醒，手寫遺囑後上傳</p>
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="third">
                        <Link to="/fourth-page">
                            <button type="button" className="button" id="third">3</button>
                        </Link>
                        <div>
                            <h2 className='H2'>寄出遺囑</h2>
                            <p className="P">經過身分驗證和死亡證明審查，系統將自動寄出遺囑至指定信箱</p>
                        </div>
                    </div>

                    {/* <div className="third">
                        <Button type="button" className="button" id="third" onClick={this.handleList}>list</Button>
                    </div>

                    <div className="third">
                        <Button type="button" className="button" id="third" onClick={this.handleCreate}>Create</Button>
                    </div> */}
                    
                </div>
            // </div>
        );
    }
    
    // handleList() {
    //     let searchText='';
    //     listPersonFromApi(searchText).then(persons => {
    //         console.warn("persons", persons);
    //         this.setState(() => {
    //             persons: persons
    //         });
    //     }).catch(err => {
    //         console.error('Error listing posts', err);
    //     });   
    // }

    // handleCreate() {
    //     let personID = String("ABCD");
    //     let heritage = Number(500);
    //     createPersonFromApi(personID, heritage).then(persons =>{
    //         this.handleList();
    //     }).catch(err => {
    //         console.error('Error creating posts', err);
    //     });   
    // }
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
