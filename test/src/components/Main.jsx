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
import ThirdPage from 'components/ThirdPage.jsx';
import FourthPage from 'components/FourthPage.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarToggle: false,
            navbarUse: false,
            heritage: Number(0),
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleOpenNavbar = this.handleOpenNavbar.bind(this);
        this.handleCloseNavbar = this.handleCloseNavbar.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleHeritageChange = this.handleHeritageChange.bind(this);
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
        const {heritage} = this.state;
        return (
            // <Provider store={this.store}>
            <Router>
                <div className='main'>
                    {this.state.navbarUse &&
                        <div>
                            <Navbar  style={{backgroundColor: '#CE8E73'}} light>
                            <NavbarBrand style={{backgroundColor: '#C000000'}} href="/">遺產管理</NavbarBrand>
                            <NavbarToggler onClick={this.handleNavbarToggle} className="mr-2"/>
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
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
                        </div>}

                    <Route exact path="/" render={() => (
                        <FirstPage CloseNavbar={this.handleCloseNavbar} />
                        // <SecondPage OpenNavbar={this.handleOpenNavbar} OnThirdPage={this.handleHeritageChange} />
                    )}/>
                    <Route exact path="/second-page" render={() => (
                        <SecondPage OpenNavbar={this.handleOpenNavbar} OnThirdPage={this.handleHeritageChange} />
                    )}/>
                    <Route exact path="/third-page" render={() => (
                        <ThirdPage OpenNavbar={this.handleOpenNavbar} heritage={heritage} />
                    )}/>
                    <Route exact path="/fourth-page" render={() => (
                        <FourthPage OpenNavbar={this.handleOpenNavbar} />
                    )}/>
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

    handleCloseNavbar() {
        this.setState((prevState, props) => ({
            navbarUse: false
        }));
    }

    handleOpenNavbar() {
        this.setState((prevState, props) => ({
            navbarUse: true
        }));
    }

    handlePageClick() {
        this.setState((prevState, props) => ({
            navbarToggle: false
        }));
    }

    handleHeritageChange(newHeritage) {
        this.setState((prevState, props) => ({
            heritage: Number(newHeritage)
        }));
    }

}
