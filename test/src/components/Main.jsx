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
            mateChecked: false,
            childChecked: false,
            childNum: Number(0),
            grandChildNum: Number(0),
            fatherChecked: false,
            motherChecked: false,
            siblingChecked: false,
            siblingNum: Number(0),
            ancestorChecked: false,
            grandFatherNum: Number(0),
            grandMotherNum: Number(0),
            heritage: Number(0),
            personalID: String(''),
            heir: [],
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleOpenNavbar = this.handleOpenNavbar.bind(this);
        this.handleCloseNavbar = this.handleCloseNavbar.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleHeritageChange = this.handleHeritageChange.bind(this);

        this.handlePersonalIDChange = this.handlePersonalIDChange.bind(this);

        this.handleMateCheckChange = this.handleMateCheckChange.bind(this);
        this.handleChildCheckChange = this.handleChildCheckChange.bind(this);
        this.handleSiblingCheckChange = this.handleSiblingCheckChange.bind(this);
        this.handleAncestorCheckChange = this.handleAncestorCheckChange.bind(this);
        this.handleFatherCheckChange = this.handleFatherCheckChange.bind(this);
        this.handleMotherCheckChange = this.handleMotherCheckChange.bind(this);
        
        this.handleChildNumChange = this.handleChildNumChange.bind(this);
        this.handleGrandChildNumChange = this.handleGrandChildNumChange.bind(this);
        this.handleSiblingNumChange = this.handleSiblingNumChange.bind(this);
        this.handleGrandFatherNumChange = this.handleGrandFatherNumChange.bind(this);
        this.handleGrandMotherNumChange = this.handleGrandMotherNumChange.bind(this);
        // this.handleFamilyNumChange = this.handleFamilyNumChange.bind(this);
        
        this.handleHeir = this.handleHeir.bind(this);
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
                        <SecondPage {...this.state} OpenNavbar={this.handleOpenNavbar} OnHeritage={this.handleHeritageChange} 
                            OnPersonalID = {this.handlePersonalIDChange}
                            OnMateCheck={this.handleMateCheckChange} OnChildCheck={this.handleChildCheckChange} OnSiblingCheck={this.handleSiblingCheckChange}
                            OnAncestorCheck={this.handleAncestorCheckChange} OnFatherCheck={this.handleFatherCheckChange} OnMotherCheck={this.handleMotherCheckChange}
                            OnChildNum={this.handleChildNumChange} OnGrandChildNum={this.handleGrandChildNumChange} OnSiblingNum={this.handleSiblingNumChange}
                            OnGrandFatherNum={this.handleGrandFatherNumChange} OnGrandMotherNum={this.handleGrandMotherNumChange}
                            // OnHeir={this.handleHeir} 
                            />
                    )}/>
                    <Route exact path="/third-page" render={() => (
                        <ThirdPage {...this.state} OpenNavbar={this.handleOpenNavbar} />
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

    handlePersonalIDChange(e) {
        const newPersonlID = e.target.value;
        this.setState((prevState, props) => ({
            personalID: String(newPersonlID)
        }));
    }

    handleMateCheckChange() {
        this.setState((prevState, props) => ({
            mateChecked: !prevState.mateChecked
        }));
    }
    handleChildCheckChange() {
        this.setState((prevState, props) => ({
            childChecked: !prevState.childChecked
        }));
    }
    handleSiblingCheckChange() {
        this.setState((prevState, props) => ({
            siblingChecked: !prevState.siblingChecked
        }));
    }
    handleAncestorCheckChange() {
        this.setState((prevState, props) => ({
            ancestorChecked: !prevState.ancestorChecked
        }));
    }
    handleFatherCheckChange() {
        this.setState((prevState, props) => ({
            fatherChecked: !prevState.fatherChecked
        }))
    };
    handleMotherCheckChange() {
        this.setState((prevState, props) => ({
            motherChecked: !prevState.motherChecked
        }))
    };
    
    handleChildNumChange(e) {
        const newChildNum = e.target.value;
        this.setState({
            childNum: Number(newChildNum)
        }, () => {
            this.handleHeir();
        })
    }
    handleGrandChildNumChange(e) {
        const newGrandChildNum = e.target.value;
        console.log("Grand Child Num: " + newGrandChildNum);
        this.setState({
            grandChildNum: Number(newGrandChildNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleSiblingNumChange(e) {
        const newSiblingNum = e.target.value;
        this.setState({
            siblingNum: Number(newSiblingNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleGrandFatherNumChange(e) {
        const newGrandFatherNum = e.target.value;
        this.setState({
            grandFatherNum: Number(newGrandFatherNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleGrandMotherNumChange(e) {
        const newGrandMotherNum = e.target.value;
        this.setState({
            grandMotherNum: Number(newGrandMotherNum)
        }, () => {
            this.handleHeir();
        });
    }

    handleHeritageChange(newHeritage) {
        this.setState((prevState, props) => ({
            heritage: Number(newHeritage)
        }));
    }
    handleHeir() {
        const {mateChecked, childChecked, fatherChecked, motherChecked, siblingChecked, ancestorChecked,
                childNum, grandChildNum, siblingNum, grandFatherNum, grandMotherNum
                } = this.state;
        let newHeir = [];

        if(mateChecked) {
            let mate = {relatives: String("Mate"), num: Number(1)};
            newHeir.push(mate);
        }

        if(childChecked) {
            if(childNum !== 0) {
                let child = {relatives: String("Child"), num: Number(childNum)};
                newHeir.push(child);
            }
            if(grandChildNum !== 0) {
                let grandChild = {relatives: String("GrandChild"), num: Number(grandChildNum)};
                newHeir.push(grandChild);
            }
        } else if(fatherChecked || motherChecked) {
            let parentNum = (fatherChecked && motherChecked) ? Number(2) : Number(1);
            let parent = {relatives: String("Parent"), num: Number(parentNum)};
            newHeir.push(parent);
        } else if(siblingChecked) {
            let sibling = {relatives: String("Sibling"), num: Number(siblingNum)};
            newHeir.push(sibling);
        } else if(ancestorChecked) {
            if(grandFatherNum !== 0) {
                let grandFather = {relatives: String("GrandFather"), num: Number(grandFatherNum)};
                newHeir.push(grandFather);
            }
            if(grandMotherNum !== 0) {
                let grandMother = {relatives: String("GrandMother"), num: Number(grandMotherNum)};
                newHeir.push(grandMother);
            }
        }

        // if(newHeir.length === 0) {
        //     newHeir = String("NoHeir");
        // }
        
        this.setState((prevState, props) => ({
            heir: newHeir
        }));

    }
    // handleHeir(newHeir){
    //     this.setState((prevState, props) => ({
    //         heir: newHeir
    //     }));
    // }
}
