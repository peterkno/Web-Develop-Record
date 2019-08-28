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
            emailNum: Number(0),
            emailArr: []
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
                            OnCarNum={this.handleCarNumChange} OnMotorNum={this.handleMotorNumChange} OnMoney={this.handleMoneyChange}
                            OnAccountNum={this.handleAccountNumChange} OnStockNum={this.handleStockNumChange} OnInsuranceNum={this.handleInsuranceNumChange}
                            OnLandNum={this.handleLandNumChange} OnBuildingNum={this.handleBuildingNumChange}
                            OnCreditorNum={this.handleCreditorNumChange} OnDebtorNum={this.handleDebtorNumChange}
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
            let mate = {relatives: String("配偶"), num: Number(1)};
            newHeir.push(mate);
        }

        if(childChecked) {
            if(childNum !== 0) {
                let child = {relatives: String("兒女"), num: Number(childNum)};
                newHeir.push(child);
            }
            if(grandChildNum !== 0) {
                let grandChild = {relatives: String("孫兒女"), num: Number(grandChildNum)};
                newHeir.push(grandChild);
            }
        } else if(fatherChecked || motherChecked) {
            let parentNum = (fatherChecked && motherChecked) ? Number(2) : Number(1);
            let parent = {relatives: String("父母"), num: Number(parentNum)};
            newHeir.push(parent);
        } else if(siblingChecked) {
            if(siblingNum !== 0){
                let sibling = {relatives: String("兄弟姊妹"), num: Number(siblingNum)};
                newHeir.push(sibling);
            }
        } else if(ancestorChecked) {
            if(grandFatherNum !== 0) {
                let grandFather = {relatives: String("祖父"), num: Number(grandFatherNum)};
                newHeir.push(grandFather);
            }
            if(grandMotherNum !== 0) {
                let grandMother = {relatives: String("祖母"), num: Number(grandMotherNum)};
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

    handleCarNumChange(e) {
        const num = e.target.value;
        this.setState({
            carNum: Number(num)
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
            value: Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            carArr: arr
        })
    }

    handleMotorNumChange(e) {
        const num = e.target.value;
        this.setState({
            motorNum: Number(num)
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
            value: Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            motorArr: arr
        })
    }

    handleMoneyChange(e){
        const num = e.target.value;
        this.setState({
            money: Number(num)
        });
    }

    handleAccountNumChange(e) {
        const num = e.target.value;
        this.setState({
            accountNum: Number(num)
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
            value: Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            accountArr: arr
        })
    }

    handleStockNumChange(e) {
        const num = e.target.value;
        this.setState({
            stockNum: Number(num)
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
            amount: Number(newAmount)
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
            value: Number(newValue)
        }
        arr[index] = updateItem;
        this.setState({
            stockArr: arr
        })
    }

    handleInsuranceNumChange(e) {
        const num = e.target.value;
        this.setState({
            insuranceNum: Number(num)
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
            value: Number(newValue)
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
            date: Number(newDate)
        }
        arr[index] = updateItem;
        this.setState({
            insuranceArr: arr
        })
    }

    handleLandNumChange(e) {
        const num = e.target.value;
        this.setState({
            landNum: Number(num)
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
            nowValue: Number(newNowValue)
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
            finalValue: Number(newFinalValue)
        }
        arr[index] = updateItem;
        this.setState({
            landArr: arr
        })
    }

    handleBuildingNumChange(e) {
        const num = e.target.value;
        this.setState({
            buildingNum: Number(num)
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
            nowValue: Number(newNowValue)
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
            finalValue: Number(newFinalValue)
        }
        arr[index] = updateItem;
        this.setState({
            buildingArr: arr
        })
    }

    handleCreditorNumChange(e) {
        const num = e.target.value;
        this.setState({
            creditorNum: Number(num)
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
            value: Number(newValue)
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
            debtorNum: Number(num)
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
            value: Number(newValue)
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





    handleEmailNumChange(e) {
        const num = e.target.value;
        this.setState({
            emailNum: Number(num)
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
