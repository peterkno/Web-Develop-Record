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
import uuid from 'uuid/v4';
import {Provider} from 'react-redux';
import SecondPage from 'components/SecondPage.jsx';
import FirstPage from 'components/FirstPage.jsx';
import ThirdPage from 'components/ThirdPage.jsx';
import FourthPage from 'components/FourthPage.jsx';
import AgreementPage from 'components/AgreementPage.jsx';

const nzhhk = require("nzh/hk"); //繁体中文
const level = {
    Noman: -1,
    Mate: 0,
    Child: 1,
    GrandChild: 2,
    Parent: 3,
    Sibling: 4,
    Ancestor: 5,
}
import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarToggle: false,
            navbarUse: false,
            chineseName: String(""),
            englishName: String(""),
            birthYear: Number(0),
            birthMonth: Number(0),
            birthDay: Number(0),
            address: String(""),
            phone: String(""),
            mateChecked: false,
            childChecked: false,
            childNum: Number(0),
            deadChildNum: Number(0),
            deadChildArr: [],
            deadHeir: [],
            grandChildNum: Number(0),
            fatherChecked: false,
            motherChecked: false,
            siblingChecked: false,
            siblingNum: Number(0),
            ancestorChecked: false,
            grandFatherNum: Number(0),
            grandMotherNum: Number(0),
            heritage: Number(0),
            heritageWithWarrant: Number(0),
            heritageNoGiven: Number(0),
            personalID: String(''),
            heir: [],
            heirLevel: Number(-1),
            carNum: Number(0),
            carArr: [],
            motorNum: Number(0),
            motorArr: [],
            money: Number(0),
            accountNum: Number(0),
            accountArr: [],
            stockNum: Number(0),
            stockArr: [],
            insuranceNum: Number(0),
            insuranceArr: [],
            landNum: Number(0),
            landArr: [],
            buildingNum: Number(0),
            buildingArr: [],
            creditorNum: Number(0),
            creditorArr: [],
            debtorNum: Number(0),
            debtorArr: [],
            warrantNum: Number(0),
            warrantArr: [],
            position: String(""),
            remark: String(""),
            emailNum: Number(0),
            emailArr: []
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleOpenNavbar = this.handleOpenNavbar.bind(this);
        this.handleCloseNavbar = this.handleCloseNavbar.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleHeritageChange = this.handleHeritageChange.bind(this);
        this.handleHeritageWWChange = this.handleHeritageWWChange.bind(this);
        this.handleHeritageNoGiven = this.handleHeritageNoGiven.bind(this);

        this.handleChineseNameChange = this.handleChineseNameChange.bind(this);
        this.handleEnglishNameChange = this.handleEnglishNameChange.bind(this);
        this.handlePersonalIDChange = this.handlePersonalIDChange.bind(this);
        this.handleBirthYearChange = this.handleBirthYearChange.bind(this);
        this.handleBirthMonthChange = this.handleBirthMonthChange.bind(this);
        this.handleBirthDayChange = this.handleBirthDayChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

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

        this.handleDeadChildNumChange = this.handleDeadChildNumChange.bind(this);
        this.handleDeadHaveChild = this.handleDeadHaveChild.bind(this);
        this.CreateDeadChildList = this.CreateDeadChildList.bind(this);
        this.handleDeadHeirLegitime = this.handleDeadHeirLegitime.bind(this);
        // this.handleFamilyNumChange = this.handleFamilyNumChange.bind(this);
        
        this.handleHeir = this.handleHeir.bind(this);
        this.handleSeniority = this.handleSeniority.bind(this);
        this.handleLegitime = this.handleLegitime.bind(this);
        this.handleGivenNum = this.handleGivenNum.bind(this);
        this.CreateGivenList = this.CreateGivenList.bind(this);
        this.handleGivenType = this.handleGivenType.bind(this);
        this.handleGivenValue = this.handleGivenValue.bind(this);
        

        this.handleCarNumChange = this.handleCarNumChange.bind(this);
        this.CreateCarList = this.CreateCarList.bind(this);
        this.handleCarLicense = this.handleCarLicense.bind(this);
        this.handleCarValue = this.handleCarValue.bind(this);

        this.handleMotorNumChange = this.handleMotorNumChange.bind(this);
        this.CreateMotorList = this.CreateMotorList.bind(this);
        this.handleMotorLicense = this.handleMotorLicense.bind(this);
        this.handleMotorValue = this.handleMotorValue.bind(this);

        this.handleMoneyChange = this.handleMoneyChange.bind(this);

        this.handleAccountNumChange = this.handleAccountNumChange.bind(this);
        this.CreateAccountList = this.CreateAccountList.bind(this);
        this.handleAccountType = this.handleAccountType.bind(this);
        this.handleAccountID = this.handleAccountID.bind(this);
        this.handleAccountValue = this.handleAccountValue.bind(this);

        this.handleStockNumChange = this.handleStockNumChange.bind(this);
        this.CreateStockList = this.CreateStockList.bind(this);
        this.handleStockType = this.handleStockType.bind(this);
        this.handleStockAmount = this.handleStockAmount.bind(this);
        this.handleStockValue = this.handleStockValue.bind(this);

        this.handleInsuranceNumChange = this.handleInsuranceNumChange.bind(this);
        this.CreateInsuranceList = this.CreateInsuranceList.bind(this);
        this.handleInsuranceCompany = this.handleInsuranceCompany.bind(this)
        this.handleInsuranceType = this.handleInsuranceType.bind(this);
        this.handleInsuranceValue = this.handleInsuranceValue.bind(this);
        this.handleInsuranceDate = this.handleInsuranceDate.bind(this);

        this.handleLandNumChange = this.handleLandNumChange.bind(this);
        this.CreateLandList = this.CreateLandList.bind(this);
        this.handleLandNumber = this.handleLandNumber.bind(this);
        this.handleLandNowValue = this.handleLandNowValue.bind(this);
        this.handleLandFinalValue = this.handleLandFinalValue.bind(this);

        this.handleBuildingNumChange = this.handleBuildingNumChange.bind(this);
        this.CreateBuildingList = this.CreateBuildingList.bind(this);
        this.handleBuildingNumber = this.handleBuildingNumber.bind(this);
        this.handleBuildingNowValue = this.handleBuildingNowValue.bind(this);
        this.handleBuildingFinalValue = this.handleBuildingFinalValue.bind(this);

        this.handleCreditorNumChange = this.handleCreditorNumChange.bind(this);
        this.CreateCreditorList = this.CreateCreditorList.bind(this);
        this.handleCreditorName = this.handleCreditorName.bind(this);
        this.handleCreditorValue = this.handleCreditorValue.bind(this);
        this.handleCreditorAddr = this.handleCreditorAddr.bind(this);

        this.handleDebtorNumChange = this.handleDebtorNumChange.bind(this);
        this.CreateDebtorList = this.CreateDebtorList.bind(this);
        this.handleDebtorName = this.handleDebtorName.bind(this);
        this.handleDebtorValue = this.handleDebtorValue.bind(this);
        this.handleDebtorAddr = this.handleDebtorAddr.bind(this);

        this.handleWarrantNumChange = this.handleWarrantNumChange.bind(this);
        this.CreateWarrantList = this.CreateWarrantList.bind(this);
        this.handleWarrantName = this.handleWarrantName.bind(this);
        this.handleWarrantValue = this.handleWarrantValue.bind(this);

        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleRemarkChange = this.handleRemarkChange.bind(this);

        this.handleEmailNumChange = this.handleEmailNumChange.bind(this);
        this.CreateEmailList = this.CreateEmailList.bind(this);
        this.handleEmailName = this.handleEmailName.bind(this);
        this.handleEmailAddr = this.handleEmailAddr.bind(this);
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
                            <NavbarBrand style={{backgroundColor: '#C000000'}} href="/">遺囑管家</NavbarBrand>
                            <NavbarToggler onClick={this.handleNavbarToggle} className="mr-2"/>
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/second-page' onClick={this.handlePageClick}>填寫資料</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/third-page'  onClick={this.handlePageClick}>上傳遺囑</NavLink>
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
                        <SecondPage {...this.state} OpenNavbar={this.handleOpenNavbar} 
                            OnHeritage={this.handleHeritageChange} OnheritageWithWarrant={this.handleHeritageWWChange} OnHeritageNoGiven={this.handleHeritageNoGiven}
                            OnChineseName={this.handleChineseNameChange} OnEnglishName={this.handleEnglishNameChange} OnPersonalID = {this.handlePersonalIDChange}
                            OnBirthYear={this.handleBirthYearChange} OnBirthMonth={this.handleBirthMonthChange} OnBirthDay={this.handleBirthDayChange}
                            OnAddress={this.handleAddressChange} OnPhone={this.handlePhoneChange}
                            OnMateCheck={this.handleMateCheckChange} OnChildCheck={this.handleChildCheckChange} OnSiblingCheck={this.handleSiblingCheckChange}
                            OnAncestorCheck={this.handleAncestorCheckChange} OnFatherCheck={this.handleFatherCheckChange} OnMotherCheck={this.handleMotherCheckChange}
                            OnChildNum={this.handleChildNumChange} OnDeadChildNum={this.handleDeadChildNumChange} OnGrandChildNum={this.handleGrandChildNumChange} OnSiblingNum={this.handleSiblingNumChange}
                            OnGrandFatherNum={this.handleGrandFatherNumChange} OnGrandMotherNum={this.handleGrandMotherNumChange}
                            OnCarNum={this.handleCarNumChange} OnMotorNum={this.handleMotorNumChange} OnMoney={this.handleMoneyChange}
                            OnAccountNum={this.handleAccountNumChange} OnStockNum={this.handleStockNumChange} OnInsuranceNum={this.handleInsuranceNumChange}
                            OnLandNum={this.handleLandNumChange} OnBuildingNum={this.handleBuildingNumChange}
                            OnCreditorNum={this.handleCreditorNumChange} OnDebtorNum={this.handleDebtorNumChange} OnWarrantNum={this.handleWarrantNumChange}
                            OnPosition={this.handlePositionChange} OnRemark={this.handleRemarkChange}
                            OnEmailNum={this.handleEmailNumChange}
                            // OnHeir={this.handleHeir} 
                            />
                    )}/>
                    <Route exact path="/third-page" render={() => (
                        <ThirdPage {...this.state} OpenNavbar={this.handleOpenNavbar} />
                    )}/>
                    <Route exact path="/fourth-page" render={() => (
                        <FourthPage OpenNavbar={this.handleOpenNavbar} />
                    )}/>
                    <Route exact path="/agreement-page" render={() => (
                        <AgreementPage CloseNavbar={this.handleCloseNavbar} />
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


    handleChineseNameChange(e) {
        const newChineseName = e.target.value;
        this.setState((prevState, props) => ({
            chineseName: String(newChineseName)
        }));
    }
    handleEnglishNameChange(e) {
        const newEnglishName = e.target.value;
        this.setState((prevState, props) => ({
            englishName: String(newEnglishName)
        }));
    }
    handleBirthYearChange(e) {
        const newBirthYear = e.target.value;
        this.setState((prevState, props) => ({
            birthYear: (isNaN(Number(newBirthYear))) 
                        ? 0
                        : Number(newBirthYear)
        }));
    }
    handleBirthMonthChange(e) {
        const newBirthMonth = e.target.value;
        this.setState((prevState, props) => ({
            birthMonth: (isNaN(Number(newBirthMonth))) 
                        ? 0
                        : Number(newBirthMonth)
        }));
    }
    handleBirthDayChange(e) {
        const newBirthDay = e.target.value;
        this.setState((prevState, props) => ({
            birthDay: (isNaN(Number(newBirthDay))) 
                        ? 0
                        : Number(newBirthDay)
        }));
    }
    handlePersonalIDChange(e) {
        const newPersonlID = e.target.value;
        this.setState((prevState, props) => ({
            personalID: String(newPersonlID)
        }));
    }
    handleAddressChange(e) {
        const newAddress = e.target.value;
        this.setState((prevState, props) => ({
            address: String(newAddress)
        }));
    }
    handlePhoneChange(e) {
        const newPhone = e.target.value;
        this.setState((prevState, props) => ({
            phone: String(newPhone)
        }));
    }

    handleMateCheckChange() {
        this.setState((prevState, props) => ({
            mateChecked: !prevState.mateChecked
        }), () => {
            this.handleHeir();
        });
    }
    handleChildCheckChange() {
        this.setState((prevState, props) => ({
            childChecked: !prevState.childChecked
        }), () => {
            this.handleHeir();
        });
    }
    handleSiblingCheckChange() {
        this.setState((prevState, props) => ({
            siblingChecked: !prevState.siblingChecked
        }), () => {
            this.handleHeir();
        });
    }
    handleAncestorCheckChange() {
        this.setState((prevState, props) => ({
            ancestorChecked: !prevState.ancestorChecked
        }), () => {
            this.handleHeir();
        });
    }
    handleFatherCheckChange() {
        this.setState((prevState, props) => ({
            fatherChecked: !prevState.fatherChecked
        }), () => {
            this.handleHeir();
        })
    };
    handleMotherCheckChange() {
        this.setState((prevState, props) => ({
            motherChecked: !prevState.motherChecked
        }), () => {
            this.handleHeir();
        })
    };
    
    handleChildNumChange(e) {
        const newChildNum = e.target.value;
        this.setState({
            childNum: (isNaN(Number(newChildNum))) 
                        ? 0
                        : Number(newChildNum)
        }, () => {
            this.handleHeir();
        })
    }
    handleGrandChildNumChange(e) {
        const newGrandChildNum = e.target.value;
        // console.log("Grand Child Num: " + newGrandChildNum);
        this.setState({
            grandChildNum: (isNaN(Number(newGrandChildNum))) 
                        ? 0
                        : Number(newGrandChildNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleSiblingNumChange(e) {
        const newSiblingNum = e.target.value;
        this.setState({
            siblingNum: (isNaN(Number(newSiblingNum))) 
                        ? 0
                        : Number(newSiblingNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleGrandFatherNumChange(e) {
        const newGrandFatherNum = e.target.value;
        this.setState({
            grandFatherNum: (isNaN(Number(newGrandFatherNum))) 
                            ? 0
                            : Number(newGrandFatherNum)
        }, () => {
            this.handleHeir();
        });
    }
    handleGrandMotherNumChange(e) {
        const newGrandMotherNum = e.target.value;
        this.setState({
            grandMotherNum: (isNaN(Number(newGrandMotherNum))) 
                            ? 0
                            : Number(newGrandMotherNum)
        }, () => {
            this.handleHeir();
        });
    }

    handleHeritageChange(newHeritage) {
        // console.warn("newHeritage", newHeritage);
        this.setState((prevState, props) => ({
            heritage: Number(newHeritage)
        }));
    }
    handleHeritageWWChange(newHeritageWW) {
        this.setState((prevState, props) => ({
            heritageWithWarrant: Number(newHeritageWW)
        }));
    }
    handleHeritageNoGiven(newHeritageNoGiven) {
        this.setState((prevState, props) => ({
            heritageNoGiven: Number(newHeritageNoGiven)
        }));
    }
    handleHeir() {
        const {mateChecked, childChecked, fatherChecked, motherChecked, siblingChecked, ancestorChecked,
                childNum, deadChildNum, grandChildNum, siblingNum, grandFatherNum, grandMotherNum, deadChildArr
                } = this.state;
        let newHeir = [], newHeirLevel = level.Noman, newDeadHeir = [];
        let order = 1, total = 1, orderDead = 1;
        if(mateChecked) {
            let mate = {
                        id: uuid(), 
                        relatives: String("配偶"),
                        seniority: String(""),
                        givenNum: Number(0),
                        givenArr: [], 
                        order: order,
                        legitime: Number(0),
                        total: total,
                        OnSeniority: this.handleSeniority,
                        OnGivenNum: this.handleGivenNum,
                        OnLegitime: this.handleLegitime,
                    };
            total++;
            order++;
            newHeir.push(mate);
            newHeirLevel = level.Mate;
        }

        if(childChecked) {
            if(childNum !== 0) {
                order = 1;
                for(let i = 0; i < childNum; i++) {
                    let child = {
                                id: uuid(), 
                                relatives: String("兒女"),
                                seniority: String(""),
                                givenNum: Number(0),
                                givenArr: [],
                                order: order,
                                legitime: Number(0),
                                total: total,
                                OnSeniority: this.handleSeniority,
                                OnGivenNum: this.handleGivenNum,
                                OnLegitime: this.handleLegitime,
                            };
                    newHeir.push(child);
                    total++;
                    order++;
                }
                newHeirLevel = level.Child;
                for(let i = 0; i < deadChildArr.length; i++) {
                    if(deadChildArr[i].haveChild){
                        // newDeadHeir.push({
                        //     id: uuid(),
                        //     relatives: String("已歿兒女"),
                        //     orderDead: deadChildArr[i].orderDead,
                        //     total: total,
                        //     legitime: Number(0),
                        //     OnLegitime: this.handleDeadHeirLegitime,
                        // })
                        newHeir.push({
                            id: uuid(), 
                            relatives: String("已歿兒女"),
                            seniority: String(""),
                            givenNum: Number(0),
                            givenArr: [],
                            order: deadChildArr[i].orderDead,
                            legitime: Number(0),
                            total: total,
                            OnSeniority: this.handleSeniority,
                            OnGivenNum: this.handleGivenNum,
                            OnLegitime: this.handleLegitime,
                        })
                        total++;
                    }
                    
                }
                
            }else if(grandChildNum !== 0) {
                order = 1;
                for(let i = 0; i < grandChildNum; i++) {
                    let grandChild = {
                                    id: uuid(), 
                                    relatives: String("孫兒女"),
                                    seniority: String(""), 
                                    givenNum: Number(0),
                                    givenArr: [],
                                    order: order,
                                    legitime: Number(0),
                                    total: total,
                                    OnSeniority: this.handleSeniority,
                                    OnGivenNum: this.handleGivenNum,
                                    OnLegitime: this.handleLegitime,
                                };
                    newHeir.push(grandChild);
                    order++;
                    total++;
                }
                newHeirLevel = level.GrandChild;
            }
        } else if(fatherChecked || motherChecked) {
            order = 1;
            let parentNum = (fatherChecked && motherChecked) ? Number(2) : Number(1);
            for(let i = 0; i < parentNum; i++) {
                let parent = {
                                id: uuid(), 
                                relatives: String("父母"),
                                seniority: String(""), 
                                givenNum: Number(0),
                                givenArr: [],
                                order: order,
                                legitime: Number(0),
                                total: total,
                                OnSeniority: this.handleSeniority,
                                OnGivenNum: this.handleGivenNum,
                                OnLegitime: this.handleLegitime,
                            };
                newHeir.push(parent);
                total++;
                order++;
            }
            newHeirLevel = level.Parent;
        } else if(siblingChecked) {
            order = 1;
            if(siblingNum !== 0){
                for(let i = 0; i < siblingNum; i++) {
                    let sibling = {
                                    id: uuid(), 
                                    relatives: String("兄弟姊妹"),
                                    seniority: String(""), 
                                    givenNum: Number(0),
                                    givenArr: [],
                                    order: order,
                                    legitime: Number(0),
                                    total: total,
                                    OnSeniority: this.handleSeniority,
                                    OnGivenNum: this.handleGivenNum,
                                    OnLegitime: this.handleLegitime,
                                };
                    newHeir.push(sibling);
                    total++;
                    order++;
                }
                newHeirLevel = level.Sibling;
            }
        } else if(ancestorChecked) {
            
            if(grandFatherNum !== 0) {
                order = 1;
                for(let i = 0; i < grandFatherNum; i++) {
                    let grandFather = {
                                    id: uuid(), 
                                    relatives: String("祖父"),
                                    seniority: String(""), 
                                    givenNum: Number(0),
                                    givenArr: [],
                                    order: order,
                                    total: total,
                                    legitime: Number(0),
                                    OnSeniority: this.handleSeniority,
                                    OnGivenNum: this.handleGivenNum,
                                    OnLegitime: this.handleLegitime,
                                };
                    newHeir.push(grandFather);
                    total++;
                    order++;
                }
                newHeirLevel = level.Ancestor;
            }
            if(grandMotherNum !== 0) {
                order = 1;
                for(let i = 0; i < grandMotherNum; i++) {
                    let grandMother = {
                                    id: uuid(), 
                                    relatives: String("祖母"),
                                    seniority: String(""), 
                                    givenNum: Number(0),
                                    givenArr: [],
                                    total: total,
                                    order: order,
                                    legitime: Number(0),
                                    OnSeniority: this.handleSeniority,
                                    OnGivenNum: this.handleGivenNum,
                                    OnLegitime: this.handleLegitime,
                                };
                    newHeir.push(grandMother);
                    total++;
                    order++;
                }
                newHeirLevel = level.Ancestor;
            }
        }

        this.setState((prevState, props) => ({
            heir: newHeir,
            heirLevel: Number(newHeirLevel),
            deadHeir: newDeadHeir
        }));

    }
    handleSeniority(targetID, newSeniority) {
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.heir;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            seniority: String(newSeniority)
        }
        arr[index] = updateItem;
        this.setState({
            heir: arr
        })
    }
    handleLegitime(targetID, newLegitime) {
        function findTarget(element) {
            return element.id === targetID;
        }
        let newHeirArr=this.state.heir;
        let index = newHeirArr.findIndex(findTarget);
        let givenTotalValue = 0, trueLegitime = 0;
        // debugger;
        for(let i = 0; i < newHeirArr[index].givenArr.length; i++) {
            // console.warn("Given Value: ", newHeirArr[index].givenArr[i].value);
            givenTotalValue += newHeirArr[index].givenArr[i].value;
        }
        let heirRelative = newHeirArr[index].relatives;
        if(heirRelative === "配偶" || heirRelative === "兒女" || heirRelative === "孫兒女" || heirRelative === "父母" || heirRelative === "已歿兒女") {
            givenTotalValue /= 2;
        } else if(heirRelative === "兄弟姊妹" || heirRelative === "祖父" || heirRelative === "祖母") {
            givenTotalValue /= 3;
        }
        // console.warn("Given Totoal Value: ", givenTotalValue);
        trueLegitime = newLegitime - givenTotalValue;
        // console.warn("True Legitime: ", trueLegitime);
        trueLegitime = (trueLegitime > 0) ? trueLegitime : 0;
        let updateItem = {
            ...newHeirArr[index],
            legitime: Number(trueLegitime),
        };
        newHeirArr[index] = updateItem;
        this.setState({
            heir: newHeirArr,
        });

    }
    handleGivenNum(targetID, newGivenNum) {
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.heir;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            givenNum: (isNaN(Number(newGivenNum))) 
                    ? 0 
                    : Number(newGivenNum)
        }
        arr[index] = updateItem;
        this.setState({
            heir: arr
        }, () => {
            this.CreateGivenList(targetID);
        })
    }
    CreateGivenList(targetID){
        function findTarget(element) {
            return element.id === targetID;
        }
        let newHeirArr=this.state.heir;
        let index = newHeirArr.findIndex(findTarget);
        const num = newHeirArr[index].givenNum;

        let newGivenArr=[];
        while (newGivenArr.length < num) { 
            newGivenArr.push({
                id: uuid(),
                type: String(''),
                value: Number(0),
                OnType: this.handleGivenType,
                OnValue: this.handleGivenValue
            });
        }
        newHeirArr[index].givenArr = newGivenArr;

        this.setState({
            heir: newHeirArr
        });
    }
    handleGivenType(heirID, targetID, newType) {
        function findHeir(element) {
            return element.id === heirID;
        }
        function findTarget(element) {
            return element.id === targetID;
        }
        let newHeirArr=this.state.heir;
        let heirIndex = newHeirArr.findIndex(findHeir);
        let newGivenArr = newHeirArr[heirIndex].givenArr;
        let givenIndex = newGivenArr.findIndex(findTarget);

        let updateGivenItem = {
            ...newGivenArr[givenIndex],
            type: String(newType)
        }
        newGivenArr[givenIndex] = updateGivenItem;

        let updateHeirItem = {
            ...newHeirArr[heirIndex],
            givenArr: newGivenArr
        }
        newHeirArr[heirIndex] = updateHeirItem;

        this.setState({
            heir: newHeirArr
        })
    }
    handleGivenValue(heirID, targetID, newValue) {
        function findHeir(element) {
            return element.id === heirID;
        }
        function findTarget(element) {
            return element.id === targetID;
        }
        let newHeirArr=this.state.heir;
        let heirIndex = newHeirArr.findIndex(findHeir);
        let newGivenArr = newHeirArr[heirIndex].givenArr;
        let givenIndex = newGivenArr.findIndex(findTarget);

        let updateGivenItem = {
            ...newGivenArr[givenIndex],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        newGivenArr[givenIndex] = updateGivenItem;

        let updateHeirItem = {
            ...newHeirArr[heirIndex],
            givenArr: newGivenArr
        }
        newHeirArr[heirIndex] = updateHeirItem;
        
        this.setState({
            heir: newHeirArr
        })
    }

    handleDeadChildNumChange(e) {
        const newDeadChildNum = e.target.value;
        this.setState({
            deadChildNum: (isNaN(Number(newDeadChildNum))) 
                        ? 0 
                        : Number(newDeadChildNum)
        }, () => {
            this.CreateDeadChildList();
        })
    }
    CreateDeadChildList(){
        const num = this.state.deadChildNum;
        // debugger;
        let arr=[], orderDead=1;
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                haveChild: false,
                orderDead: orderDead,
                OnHaveChild: this.handleDeadHaveChild
            });
            orderDead++;
        }
        
        this.setState({
            deadChildArr: arr
        });
    }
    handleDeadHaveChild(targetID, newhaveChild) {
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.deadChildArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            haveChild: newhaveChild
        }
        arr[index] = updateItem;
        this.setState({
            deadChildArr: arr
        }, () => {
            this.handleHeir();
        })
    }
    handleDeadHeirLegitime(targetID, newDeadHeirLegitime) {
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.deadHeir;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            legitime: Number(newDeadHeirLegitime)
        }
        arr[index] = updateItem;
        this.setState({
            deadHeir: arr
        })
    }


    handleCarNumChange(e) {
        const num = e.target.value;
        this.setState({
            carNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateCarList();
        });
    }
    CreateCarList(){
        const num = this.state.carNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                licensePlate: String(''),
                value: Number(0),
                OnLicense: this.handleCarLicense,
                OnValue: this.handleCarValue
            });
        }
        this.setState({
            carArr: arr
        });
    }
    handleCarLicense(targetID, newLicense){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.carArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            licensePlate: String(newLicense)
        }
        arr[index] = updateItem;
        this.setState({
            carArr: arr
        })
    }
    handleCarValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.carArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            carArr: arr
        })
    }

    handleMotorNumChange(e) {
        const num = e.target.value;
        this.setState({
            motorNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateMotorList();
        });
    }
    CreateMotorList(){
        const num = this.state.motorNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                licensePlate: String(''),
                value: Number(0),
                OnLicense: this.handleMotorLicense,
                OnValue: this.handleMotorValue
            });
        }
        this.setState({
            motorArr: arr
        });
    }
    handleMotorLicense(targetID, newLicense){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.motorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            licensePlate: String(newLicense)
        }
        arr[index] = updateItem;
        this.setState({
            motorArr: arr
        })
    }
    handleMotorValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.motorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            motorArr: arr
        })
    }

    handleMoneyChange(e){
        const num = e.target.value;
        this.setState({
            money: (isNaN(Number(num))) 
                    ? Number(0)
                    : Number(num)
        });
    }

    handleAccountNumChange(e) {
        const num = e.target.value;
        this.setState({
            accountNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateAccountList();
        });
    }
    CreateAccountList(){
        const num = this.state.accountNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                type: String(''),
                ID: String(''),
                value: Number(0),
                OnType: this.handleAccountType,
                OnID: this.handleAccountID,
                OnValue: this.handleAccountValue
            });
        }
        this.setState({
            accountArr: arr
        });
    }
    handleAccountType(targetID, newType){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.accountArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            type: String(newType)
        }
        arr[index] = updateItem;
        this.setState({
            accountArr: arr
        })
    }
    handleAccountID(targetID, newID){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.accountArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            ID: String(newID)
        }
        arr[index] = updateItem;
        this.setState({
            accountArr: arr
        })
    }
    handleAccountValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.accountArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            accountArr: arr
        })
    }

    handleStockNumChange(e) {
        const num = e.target.value;
        this.setState({
            stockNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateStockList();
        });
    }
    CreateStockList(){
        const num = this.state.stockNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                type: String(''),
                amount: Number(0),
                value: Number(0),
                OnType: this.handleStockType,
                OnAmount: this.handleStockAmount,
                OnValue: this.handleStockValue
            });
        }
        this.setState({
            stockArr: arr
        });
    }
    handleStockType(targetID, newType){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.stockArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            type: String(newType)
        }
        arr[index] = updateItem;
        this.setState({
            stockArr: arr
        })
    }
    handleStockAmount(targetID, newAmount){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.stockArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            amount: (isNaN(Number(newAmount))) 
                    ? 0 
                    : Number(newAmount)
        }
        arr[index] = updateItem;
        this.setState({
            stockArr: arr
        })
    }
    handleStockValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.stockArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            stockArr: arr
        })
    }

    handleInsuranceNumChange(e) {
        const num = e.target.value;
        this.setState({
            insuranceNum: (isNaN(Number(num))) 
                            ? 0 
                            : Number(num)
        }, () =>{
            this.CreateInsuranceList();
        });
    }
    CreateInsuranceList(){
        const num = this.state.insuranceNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                company: String(''),
                type: String(''),
                value: Number(0),
                date: String(''),
                OnCompany: this.handleInsuranceCompany,
                OnType: this.handleInsuranceType,
                OnValue: this.handleInsuranceValue,
                OnDate: this.handleInsuranceDate
            });
        }
        this.setState({
            insuranceArr: arr
        });
    }
    handleInsuranceCompany(targetID, newCompany){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.insuranceArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            company: String(newCompany)
        }
        arr[index] = updateItem;
        this.setState({
            insuranceArr: arr
        })
    }
    handleInsuranceType(targetID, newType){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.insuranceArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            type: String(newType)
        }
        arr[index] = updateItem;
        this.setState({
            insuranceArr: arr
        })
    }
    handleInsuranceValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.insuranceArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            insuranceArr: arr
        })
    }
    handleInsuranceDate(targetID, newDate){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr = this.state.insuranceArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            date: (isNaN(Number(newDate))) 
                    ? 0 
                    : Number(newDate)
        }
        arr[index] = updateItem;
        this.setState({
            insuranceArr: arr
        })
    }

    handleLandNumChange(e) {
        const num = e.target.value;
        this.setState({
            landNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateLandList();
        });
    }
    CreateLandList(){
        const num = this.state.landNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                number: String(''),
                nowValue: Number(0),
                finalValue: Number(0),
                OnNumber: this.handleLandNumber,
                OnNowValue: this.handleLandNowValue,
                OnFinalValue: this.handleLandFinalValue
            });
        }
        this.setState({
            landArr: arr
        });
    }
    handleLandNumber(targetID, newNumber){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.landArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            number: String(newNumber)
        }
        arr[index] = updateItem;
        this.setState({
            landArr: arr
        })
    }
    handleLandNowValue(targetID, newNowValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.landArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            nowValue: (isNaN(Number(newNowValue))) 
                    ? 0 
                    : Number(newNowValue)
        }
        arr[index] = updateItem;
        this.setState({
            landArr: arr
        })
    }
    handleLandFinalValue(targetID, newFinalValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.landArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            finalValue: (isNaN(Number(newFinalValue))) 
                        ? 0 
                        : Number(newFinalValue)
        }
        arr[index] = updateItem;
        this.setState({
            landArr: arr
        })
    }

    handleBuildingNumChange(e) {
        const num = e.target.value;
        this.setState({
            buildingNum: (isNaN(Number(num))) 
                        ? 0 
                        : Number(num)
        }, () =>{
            this.CreateBuildingList();
        });
    }
    CreateBuildingList(){
        const num = this.state.buildingNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                number: String(''),
                nowValue: Number(0),
                finalValue: Number(0),
                OnNumber: this.handleBuildingNumber,
                OnNowValue: this.handleBuildingNowValue,
                OnFinalValue: this.handleBuildingFinalValue
            });
        }
        this.setState({
            buildingArr: arr
        });
    }
    handleBuildingNumber(targetID, newNumber){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.buildingArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            number: String(newNumber)
        }
        arr[index] = updateItem;
        this.setState({
            buildingArr: arr
        })
    }
    handleBuildingNowValue(targetID, newNowValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.buildingArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            nowValue: (isNaN(Number(newNowValue))) 
                        ? 0 
                        : Number(newNowValue)
        }
        arr[index] = updateItem;
        this.setState({
            buildingArr: arr
        })
    }
    handleBuildingFinalValue(targetID, newFinalValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.buildingArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            finalValue: (isNaN(Number(newFinalValue))) 
                        ? 0 
                        : Number(newFinalValue)
        }
        arr[index] = updateItem;
        this.setState({
            buildingArr: arr
        })
    }

    handleCreditorNumChange(e) {
        const num = e.target.value;
        this.setState({
            creditorNum: (isNaN(Number(num))) 
                        ? 0 
                        : Number(num)
        }, () =>{
            this.CreateCreditorList();
        });
    }
    CreateCreditorList(){
        const num = this.state.creditorNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                name: String(''),
                value: Number(0),
                addr: String(''),
                OnName: this.handleCreditorName,
                OnValue: this.handleCreditorValue,
                OnAddr: this.handleCreditorAddr
            });
        }
        this.setState({
            creditorArr: arr
        });
    }
    handleCreditorName(targetID, newName){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.creditorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            name: String(newName)
        }
        arr[index] = updateItem;
        this.setState({
            creditorArr: arr
        })
    }
    handleCreditorValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.creditorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            creditorArr: arr
        })
    }
    handleCreditorAddr(targetID, newAddr){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.creditorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            addr: String(newAddr)
        }
        arr[index] = updateItem;
        this.setState({
            creditorArr: arr
        })
    }
    
    handleDebtorNumChange(e) {
        const num = e.target.value;
        this.setState({
            debtorNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateDebtorList();
        });
    }
    CreateDebtorList(){
        const num = this.state.debtorNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                name: String(''),
                value: Number(0),
                addr: String(''),
                OnName: this.handleDebtorName,
                OnValue: this.handleDebtorValue,
                OnAddr: this.handleDebtorAddr
            });
        }
        this.setState({
            debtorArr: arr
        });
    }
    handleDebtorName(targetID, newName){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.debtorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            name: String(newName)
        }
        arr[index] = updateItem;
        this.setState({
            debtorArr: arr
        })
    }
    handleDebtorValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.debtorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            debtorArr: arr
        })
    }
    handleDebtorAddr(targetID, newAddr){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.debtorArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            addr: String(newAddr)
        }
        arr[index] = updateItem;
        this.setState({
            debtorArr: arr
        })
    }

    handleWarrantNumChange(e) {
        const num = e.target.value;
        this.setState({
            warrantNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateWarrantList();
        });
    }
    CreateWarrantList(){
        const num = this.state.warrantNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                name: String(''),
                value: Number(0),
                OnName: this.handleWarrantName,
                OnValue: this.handleWarrantValue,
            });
        }
        this.setState({
            warrantArr: arr
        });
    }
    handleWarrantName(targetID, newName){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.warrantArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            name: String(newName)
        }
        arr[index] = updateItem;
        this.setState({
            warrantArr: arr
        })
    }
    handleWarrantValue(targetID, newValue){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.warrantArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            value: (isNaN(Number(newValue))) 
                    ? 0 
                    : Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            warrantArr: arr
        })
    }

    handlePositionChange(e) {
        const newPosition = e.target.value;
        this.setState((prevState, props) => ({
            position: String(newPosition)
        }));
    }
    handleRemarkChange(e) {
        const newRemark = e.target.value;
        this.setState((prevState, props) => ({
            remark: String(newRemark)
        }));
    }


    handleEmailNumChange(e) {
        const num = e.target.value;
        this.setState({
            emailNum: (isNaN(Number(num))) 
                    ? 0 
                    : Number(num)
        }, () =>{
            this.CreateEmailList();
        });
    }
    CreateEmailList(){
        const num = this.state.emailNum;
        let arr=[];
        while (arr.length < num) { 
            arr.push({
                id: uuid(),
                name: String(''),
                addr: String(''),
                OnName: this.handleEmailName,
                OnAddr: this.handleEmailAddr
            });
        }
        this.setState({
            emailArr: arr
        });
    }
    handleEmailName(targetID, newName){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.emailArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            name: String(newName)
        }
        arr[index] = updateItem;
        this.setState({
            emailArr: arr
        })
    }
    handleEmailAddr(targetID, newAddr){
        function findTarget(element) {
            return element.id === targetID;
        }
        let arr=this.state.emailArr;
        let index = arr.findIndex(findTarget);
        let updateItem = {
            ...arr[index],
            addr: String(newAddr)
        }
        arr[index] = updateItem;
        this.setState({
            emailArr: arr
        })
    }

}
