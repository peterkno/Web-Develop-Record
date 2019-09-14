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
    findHeritage as findHeritageFromApi,
    sendMail as sendMailFromApi,
} from 'api/mails.js';


import './FourthPage.css';

export default class FourthPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            searchID: String("")
        };
        
        this.inputSearchID = null;
        this.handleSearchIDChange = this.handleSearchIDChange.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);
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
        const {searchID} = this.state;
        return (
            <div className='fourth-page'>
                <div id="banner-fg" className="d-flex flex-column justify-content-between">
                    <div className='mb-2 mt-sm-3'>
                        <h1 className='H1'>寄出遺囑</h1>
                    </div>
                    <div className="ID">
                        <form >
                            <Input id="password" type="password" name="身分證號"  className="Input"
                            innerRef={el => {this.inputSearchID = el}} value={searchID} onChange={this.handleSearchIDChange}/>
                        </form>
                        <p id="reminder">請輸入死者的身分證號碼</p>
                    </div>
                    <div>
                        <button type="button" id="send4" onClick={this.handleSendMail}>寄出<br/>遺囑</button>
                    </div>
                </div>
            </div>
        );
    }

    handleSearchIDChange(e) {
        let newSearchID = e.target.value;
        this.setState((prevState, props) => ({
            searchID: String(newSearchID)
        }));
    }

    handleSendMail() {
        const {searchID} = this.state;
        findHeritageFromApi(searchID).then(heritages => {
            // console.warn("heritages", heritages);
            sendMailFromApi(searchID).then(data => {
                console.warn("mail info", data);
            }).catch(err => {
                console.error('Error send mail', err);
            })
        }).catch(err => {
            console.error('Error listing posts', err);
        }); 
    }
    
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
