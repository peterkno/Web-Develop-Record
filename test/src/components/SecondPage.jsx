import React from 'react';
import uuid from 'uuid/v4';
import {
    Alert,
    Input,
    Form,
    FormGroup,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupAddonProps,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CarInfo from 'components/CarInfo.jsx';

import './SecondPage.css';
import CarList from 'components/CarList.jsx';
import MotorList from 'components/MotorList.jsx';
import AccountList from 'components/AccountList.jsx';
import StockList from 'components/StockList.jsx';
import InsuranceList from 'components/InsuranceList.jsx';
import LandList from 'components/LandList.jsx';

export default class SecondPage extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);

        this.state = {
            mateChecked: false,
            childChecked: false,
            fatherChecked: false,
            motherChecked: false,
            siblingChecked: false,
            ancestorChecked: false,
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
            chattelChecked: false,
            landNum: Number(0),
            landArr: [],
            buildingNum: Number(0),
            buildingArr: [],
            realEstateChecked: false
        };
        
        this.calculateHeritage = this.calculateHeritage.bind(this);
        // Famaliy
        this.handleMateCheckChange = this.handleMateCheckChange.bind(this);
        this.handleChildCheckChange = this.handleChildCheckChange.bind(this);
        this.handleFatherCheckChange = this.handleFatherCheckChange.bind(this);
        this.handleMotherCheckChange = this.handleMotherCheckChange.bind(this);
        this.handleSiblingCheckChange = this.handleSiblingCheckChange.bind(this);
        this.handleAncestorCheckChange = this.handleAncestorCheckChange.bind(this);

        // Chattel
        this.inputCar = null;
        this.inputMotor = null;
        this.inputMoney = null;
        this.inputAccount = null;
        this.inputStock = null;
        this.inputInsurance = null;
            // Car
        this.handleCarNumChange = this.handleCarNumChange.bind(this);
        this.CreateCarList = this.CreateCarList.bind(this);
        this.handleCarLicense = this.handleCarLicense.bind(this);
        this.handleCarValue = this.handleCarValue.bind(this);
            // Motor
        this.handleMotorNumChange = this.handleMotorNumChange.bind(this);
        this.CreateMotorList = this.CreateMotorList.bind(this);
        this.handleMotorLicense = this.handleMotorLicense.bind(this);
        this.handleMotorValue = this.handleMotorValue.bind(this);
            // Money
        this.handleMoneyChange = this.handleMoneyChange.bind(this);
            // Account
        this.handleAccountNumChange = this.handleAccountNumChange.bind(this);
        this.CreateAccountList = this.CreateAccountList.bind(this);
        this.handleAccountType = this.handleAccountType.bind(this);
        this.handleAccountID = this.handleAccountID.bind(this);
        this.handleAccountValue = this.handleAccountValue.bind(this);
            // Stock
        this.handleStockNumChange = this.handleStockNumChange.bind(this);
        this.CreateStockList = this.CreateStockList.bind(this);
        this.handleStockType = this.handleStockType.bind(this);
        this.handleStockAmount = this.handleStockAmount.bind(this);
        this.handleStockValue = this.handleStockValue.bind(this);
            // Insurance
        this.handleInsuranceNumChange = this.handleInsuranceNumChange.bind(this);
        this.CreateInsuranceList = this.CreateInsuranceList.bind(this);
        this.handleInsuranceCompany = this.handleInsuranceCompany.bind(this)
        this.handleInsuranceType = this.handleInsuranceType.bind(this);
        this.handleInsuranceValue = this.handleInsuranceValue.bind(this);
        this.handleInsuranceDate = this.handleInsuranceDate.bind(this);
            // ChattelChecked
        this.handleChattelCheckChange = this.handleChattelCheckChange.bind(this);
        
        // Real estate
        this.inputLand = null;
        this.inputBuilding = null;
            // Land
        this.handleLandNumChange = this.handleLandNumChange.bind(this);
        this.CreateLandList = this.CreateLandList.bind(this);
        this.handleLandNumber = this.handleLandNumber.bind(this);
        this.handleLandNowValue = this.handleLandNowValue.bind(this);
        this.handleLandFinalValue = this.handleLandFinalValue.bind(this);
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
        const {carArr, motorArr, accountArr, stockArr, insuranceArr, landArr, buildingArr} = this.state;
        const heritage = this.calculateHeritage();
        return (
            <div className='second-page'>
                <div className='member mb-sm-3'>
                    <p>建立會員帳號</p>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            中文姓名:<Input  className='name ml-sm-2' type="text" name="chineseName" />
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            英文姓名:<Input className='name ml-sm-2' type="text" name="englishName" placeholder="請與護照名相同" />
                        </FormGroup>
                    </Form>
                    {/* 英文姓名 : <input type="text" name="英文姓名" size="10px" /> */}
                    <Form inline>
                        出生年月日:
                        <FormGroup className='mb-2 mr-sm-0 mb-sm-1'>
                            <Input  className='birth ml-sm-2' type="text" name="year" />年
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-0 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="month" />月
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="day" />日
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            身分證號<Input className='personalID ml-sm-2' type="text" name="personalID" />
                        </FormGroup>
                    </Form>
                    <InputGroup>
                        通訊地址 : <Input className='address ml-sm-2' type="text" name="address" />
                    </InputGroup>
                    <InputGroup>
                        連絡電話 : <Input className='phone ml-sm-2' type="text" name="phoneNumber" />
                    </InputGroup>
                </div>
                
                <div className='famliy'>
                    <p>家族規模</p>
                    {/* <!--配偶checkbox點開才出現姓名；
                            直系血親checkbox才有a. b.；
                            父母直接兩個checkbox就夠；
                            兄弟姊妹同配偶；
                            祖父母同直系血親--> */}
                    *註：只需填寫還在世的家族成員
                    <br  />
                    <FormGroup check inline>
                        <Input type="checkbox" checked={this.state.mateChecked} onChange={this.handleMateCheckChange} />(一)配偶
                        {this.state.mateChecked && 
                            <div>
                                <Form inline>姓名: <Input className='name' type="text" /></Form>
                            </div> }
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" checked={this.state.childChecked} onChange={this.handleChildCheckChange} />(二)直系血親卑親屬
                        {this.state.childChecked && 
                            <div>
                                <Form inline>a.子女 : 共<Input className='number' type="text" />位</Form>
                                <Form inline>b.孫子女 : 共<Input className='number' type="text" />位</Form>
                            </div> }
                    </FormGroup>
                    <FormGroup check inline>
                        (三)父母 : 
                        父<Input className = 'ml-sm-1 mt-sm-1 ' type="checkbox" checked={this.state.fatherChecked} onChange={this.handleFatherCheckChange} />
                        母<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={this.state.motherChecked} onChange={this.handleMotherCheckChange} />                        
                    </FormGroup>
                    <br />
                    <FormGroup check inline>
                        (四)兄弟姊妹<Input type="checkbox" checked={this.state.siblingChecked} onChange={this.handleSiblingCheckChange} />
                        {this.state.siblingChecked && 
                            <div>
                                <Form inline>共: <Input className='number' type="text" />位</Form>
                            </div> }
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" checked={this.state.ancestorChecked} onChange={this.handleAncestorCheckChange} /> (五)祖父母
                        {this.state.ancestorChecked && 
                            <div>
                                <Form inline>a.祖父 : 共<Input className='number' type="text" />位</Form>
                                <Form inline>b.祖母 : 共<Input className='number' type="text" />位</Form>
                            </div> }
                    </FormGroup>
                </div>

                <br />

                <div className='chattel'>
                    <p>一、動產部分</p>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一) 汽車: 共 <Input className='number' type='text' innerRef={el => {this.inputCar = el}} 
                                value={this.state.carNum} onChange={this.handleCarNumChange}></Input>輛
                        </FormGroup>
                    </Form>
                    <CarList cars={carArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (二) 機車: 共 <Input className='number' type='text' innerRef={el => {this.inputMotor = el}} 
                                value={this.state.motorNum} onChange={this.handleMotorNumChange}></Input>輛
                        </FormGroup>
                    </Form>
                    <MotorList motors={motorArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (三) 現金(新台幣) 共 :<Input className='value' type='text' innerRef={el => {this.inputMoney = el}} 
                                value={this.state.money} onChange={this.handleMoneyChange}></Input>元
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (四) 銀行存款 : 共<Input className='number' type='text' innerRef={el => {this.inputAccount = el}} 
                                value={this.state.accountNum} onChange={this.handleAccountNumChange}></Input>個帳戶
                        </FormGroup>
                    </Form>
                    <AccountList accounts={accountArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (五)股票 : 共<Input className='number' type='text' innerRef={el => {this.inputStock = el}} 
                                value={this.state.stockNum} onChange={this.handleStockNumChange}></Input>種股號
                        </FormGroup>
                    </Form>
                    <StockList stocks={stockArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (六)保險 : 共<Input className='number' type='text' innerRef={el => {this.inputInsurance = el}} 
                                value={this.state.insuranceNum} onChange={this.handleInsuranceNumChange}></Input>幾支
                        </FormGroup>
                    </Form>
                    <InsuranceList insurances={insuranceArr} />
                    <FormGroup check inline>
                        (七)<Input type="checkbox" checked={this.state.chattelChecked} onChange={this.handleChattelCheckChange} />如國稅局歸戶財產清單所載。
                    </FormGroup>
                </div>

                <br />

                <div>
                    <p>二、不動產部分</p> 
                    
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)土地: 共<Input className='number' type='text' innerRef={el => {this.inputLand = el}} 
                                value={this.state.landNum} onChange={this.handleLandNumChange}></Input>筆
                        </FormGroup>
                    </Form>
                    <LandList lands={landArr} />
                </div>
                
                
{/*  
                
                
                <p>二、不動產部分</p>
                (一)土地 ： 共<Input type="text" name="土地筆數" bsSize="3px"/>筆
                
                1.地號：<Input type="text" name="地號-1" bsSize="5px"/>，公告土地現值：<Input type="text" name="土地現值-1" bsSize="5px"/>元，市值(成交價)：<Input type="text" name="土地市值-1" bsSize="5px"/>元(此欄必填)。
                
                ※註1：公告土地現值和市值不同。公告土地現值：係政府官方根據過去一年來，調查轄區內土地交易的價格動態，分別計算出各區段的價格，做為土地移轉買賣交易時的價格依據。市值：市場實際買賣的價格。
                
                ※註2：公告土地現值可至中華民國內政部地政司網站查詢。成交價則可請土地估價師進行估價。
                
                (二)建物 ： 共<Input type="text" name="建物筆數" bsSize="3px"/>筆
                
                1.門牌號碼：<Input type="text" name="門牌號-1" bsSize="5px"/>，評定標準價格：<Input type="text" name="建物標值-1" bsSize="5px"/>元，市值(成交價)：<Input type="text" name="建物市值-1" bsSize="5px"/>元(此欄必填)。
                
                ※註1：評定標準價格和市值不同。評定標準價格：係政府評定的房屋價值，廣泛地用來作為各種包含房屋稅、契稅等各種與房屋有關的稅賦之課徵基準。市價：市場實際買賣的價格。
                
                ※註2：所有權人攜帶身分證正本、印章到地方稅的稅務機關申請房屋稅稅籍證明，在稅籍證明上面就會有房屋評定現值的金額。房屋成交價則可詢問房屋仲介該房屋附近一坪大致的價格，再去推算成交價的估計值。
                
                (三) <Input type="checkbox" name="不動產國稅局"/> 如國稅局歸戶財產清單所載。
                
                
                <p>三、債權人(您的債主)之姓名、地址及債權數額</p>
                債權人共：<Input type="text" name="債權人數量" bsSize="2px"/>位。
                
                (一)姓名：<Input type="text" name="債權人-1" bsSize="10px"/> 債權數額：<Input type="text" name="債權數額-1" bsSize="10px"/>
                
                地址：<Input type="text" name="債權人地址-1" bsSize="20px"/>
                
                <p>四、債務人(誰欠您錢)之姓名、地址及債權數額</p>
                債務人共：<Input type="text" name="債務人數量" bsSize="2px"/>位。
                
                (一)姓名：<Input type="text" name="債務人-1" bsSize="10px"/> 債務數額：<Input type="text" name="債務數額-1" bsSize="10px"/>
                
                地址：<Input type="text" name="債務人地址-1" bsSize="20px"/>
                
                (以上參考遺產清冊表格)
                
                
                <p>請輸入您的印鑑、帳本存放位置</p>
                位置：<Input type="text" name="位置" bsSize="50px"/>
                
                備註：<Input type="text" name="備註" bsSize="50px"/>
                
                <Input type="submit" value="提交"/> */}
                <h1>現在遺產: {heritage} 元</h1>
            </div>
        );
    }
    calculateHeritage() {
        let heritage = Number(0);
        let i = 0;
        for(i = 0; i < this.state.carArr.length; i++) {
            heritage += this.state.carArr[i].value;
        }
        for(i = 0; i < this.state.motorArr.length; i++) {
            heritage += this.state.motorArr[i].value;
        }
        heritage += this.state.money;
        for(i = 0; i < this.state.accountArr.length; i++) {
            heritage += this.state.accountArr[i].value;
        }
        for(i = 0; i<this.state.stockArr.length; i++) {
            heritage += this.state.stockArr[i].value * this.state.stockArr[i].amount;
        }
        for(i = 0; i<this.state.insuranceArr.length; i++) {
            heritage += this.state.insuranceArr[i].value;
        }
        return heritage;
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
//***Handle Car****************************************** */
    handleCarNumChange(e) {
        const num = e.target.value;
        this.setState({
            carNum: num
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
//***Handle Motor****************************************** */
    handleMotorNumChange(e) {
        const num = e.target.value;
        this.setState({
            motorNum: num
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
                licensePlate: '',
                value: 0,
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
            licensePlate: newLicense
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
//***Handle Money****************************************** */
    handleMoneyChange(e){
        const num = e.target.value;
        this.setState({
            money: Number(num)
        });
    }
//***Handle Account****************************************** */
    handleAccountNumChange(e) {
        const num = e.target.value;
        this.setState({
            accountNum: num
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
//***Handle Stock****************************************** */
    handleStockNumChange(e) {
        const num = e.target.value;
        this.setState({
            stockNum: num
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
        // Insurance
    handleInsuranceNumChange(e) {
        const num = e.target.value;
        this.setState({
            insuranceNum: num
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
    handleChattelCheckChange() {
        this.setState((prevState, props) => ({
            chattelChecked: !prevState.chattelChecked
        }));
    }

    // Real estate
        // Land
        // this.handleLandNumChange = this.handleLandNumChange.bind(this);
        // this.CreateLandList = this.CreateLandList.bind(this);
        // this.handleLandNumber = this.handleLandNumber.bind(this);
        // this.handleLandNowValue = this.handleLandNowValue.bind(this);
        // this.handleLandFinalValue = this.handleLandFinalValue.bind(this);
    handleLandNumChange(e) {
        const num = e.target.value;
        this.setState({
            landNum: num
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
















}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
