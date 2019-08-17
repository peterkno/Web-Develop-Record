import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
// import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';
import SecondPage from 'components/SecondPage.jsx';
import FirstPage from 'components/FirstPage.jsx';
import SecondPageV2 from 'components/SecondPageV2.jsx';
import ThirdPage from 'components/ThirdPage.jsx';
import FourthPage from 'components/FourthPage.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarToggle: false,
            // searchText: ''
        };
        // this.store = null;
        // this.searchEl = null;

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    // componentWillMount() {
    //     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //     this.store = createStore(combineReducers({
    //         unit,
    //         weather,
    //         weatherForm,
    //         forecast
    //     }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    // }

    render() {
        return (
            // <Provider store={this.store}>
            <Router>
                <div className='main'>
                    {/* <div className='container'> */}
                        <Navbar  style={{backgroundColor: '#ff0000'}} light>
                        <NavbarBrand className='text-info' href="/">遺產管理</NavbarBrand>
                        <NavbarToggler onClick={this.handleNavbarToggle} className="mr-2"/>
                        <Collapse isOpen={this.state.navbarToggle} navbar>
                            <Nav style={{backgroundColor: '#f1f1f1'}} navbar>
                                <NavItem>
                                    <NavLink tag={Link} to='/second-page' onClick={this.handlePageClick}> 計算正負資產</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/third-page'  onClick={this.handlePageClick}>特留分顯示</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/fourth-page' onClick={this.handlePageClick}>寄出遺囑</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </Navbar>
                    {/* </div> */}

                    <Route exact path="/" render={() => (
                        <SecondPage/>
                    )}/>
                    <Route exact path="/second-page" render={() => (
                        <SecondPage/>
                    )}/>
                    <Route exact path="/third-page" render={() => (
                        <ThirdPage />
                    )}/>
                    <Route exact path="/fourth-page" render={() => (
                        <FourthPage />
                    )}/>
                    <div className='footer'>
                        遺產管理.
                    </div>
                </div>
            </Router>
            // </Provider>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handlePageClick() {
        this.setState((prevState, props) => ({
            navbarToggle: false
        }));
    }
}
