import React from 'react';
import uuid from 'uuid/v4';
import {
    Link
} from 'react-router-dom'
import {
    Input,
    Form,
    FormGroup,
    InputGroup,
    Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import './SecondPage.css';
import HeirList from 'components/HeirList.jsx';
import CarList from 'components/CarList.jsx';
import MotorList from 'components/MotorList.jsx';
import AccountList from 'components/AccountList.jsx';
import StockList from 'components/StockList.jsx';
import InsuranceList from 'components/InsuranceList.jsx';
import LandList from 'components/LandList.jsx';
import BuildingList from 'components/BuildingList.jsx';
import EmailList from 'components/EmailList.jsx';
import CreditorList from 'components/CreditorList.jsx';
import DebtorList from 'components/DebtorList.jsx';
import WarrantList from 'components/WarrantList.jsx';

import { stringify } from 'querystring';

export default class SecondPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        OnHeritage: PropTypes.func,

        OnPersonalID: PropTypes.func,

        OnMateCheck: PropTypes.func,
        OnChildCheck: PropTypes.func,
        OnSiblingCheck: PropTypes.func,
        OnAncestorCheck: PropTypes.func,
        OnFatherCheck: PropTypes.func,
        OnMotherCheck: PropTypes.func,

        OnChildNum: PropTypes.func,
        OnGrandChildNum: PropTypes.func,
        OnSiblingNum: PropTypes.func,
        OnGrandFatherNum: PropTypes.func,
        OnGrandMotherNum: PropTypes.func,
        // OnHeir: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            chattelChecked: false,
            // landNum: Number(0),
            // landArr: [],
            // buildingNum: Number(0),
            // buildingArr: [],
            realEstateChecked: false,
            // creditorNum: Number(0),
            // creditorArr: [],
            // debtorNum: Number(0),
            // debtorArr: [],
            // emailNum: Number(0),
            // emailArr: []
        };
        
        this.calculateHeritage = this.calculateHeritage.bind(this);
        this.handleHeritage = this.handleHeritage.bind(this);
        // this.verifyHeir = this.verifyHeir.bind(this);
        // Famaliy
        // this.handleMateCheck = this.handleMateCheck.bind(this);
        this.inputChineseName = null;
        this.inputEnglishName = null;
        this.inputBirthYear = null;
        this.inputBirthMonth = null;
        this.inputBirthDay = null;
        this.inputPersonalID = null;
        this.inputAddress = null;
        this.inputPhone = null;
        this.inputChildNum = null;
        this.inputGrandChildNum = null;
        this.inputSiblingNum = null;
        this.inputGrandFatherNum = null;
        this.inputGrandMotherNum = null;
        this.inputCar = null;
        this.inputMotor = null;
        this.inputMoney = null;
        this.inputAccount = null;
        this.inputStock = null;
        this.inputInsurance = null;
        this.inputLand = null;
        this.inputBuilding = null;
        this.inputCreditor = null;
        this.inputDebtor = null;
        this.inputWarrant = null;
        this.inputPosition = null;
        this.inputRemark = null;
        this.inputEmail = null;
        

        // this.handleChildNum = this.handleChildNum.bind(this);
        // this.handleGrandChildNum = this.handleGrandChildNum.bind(this);
        // this.handleSiblingNum = this.handleSiblingNum.bind(this);
        // this.handleGrandFatherNum = this.handleGrandFatherNum.bind(this);
        // this.handleGrandMotherNum = this.handleGrandMotherNum.bind(this);
        // Chattel
            // Car
        // this.handleCarNumChange = this.handleCarNumChange.bind(this);
        // this.CreateCarList = this.CreateCarList.bind(this);
        // this.handleCarLicense = this.handleCarLicense.bind(this);
        // this.handleCarValue = this.handleCarValue.bind(this);
            // Motor
        // this.handleMotorNumChange = this.handleMotorNumChange.bind(this);
        // this.CreateMotorList = this.CreateMotorList.bind(this);
        // this.handleMotorLicense = this.handleMotorLicense.bind(this);
        // this.handleMotorValue = this.handleMotorValue.bind(this);
            // Money
        // this.handleMoneyChange = this.handleMoneyChange.bind(this);
            // Account
        // this.handleAccountNumChange = this.handleAccountNumChange.bind(this);
        // this.CreateAccountList = this.CreateAccountList.bind(this);
        // this.handleAccountType = this.handleAccountType.bind(this);
        // this.handleAccountID = this.handleAccountID.bind(this);
        // this.handleAccountValue = this.handleAccountValue.bind(this);
            // Stock
        // this.handleStockNumChange = this.handleStockNumChange.bind(this);
        // this.CreateStockList = this.CreateStockList.bind(this);
        // this.handleStockType = this.handleStockType.bind(this);
        // this.handleStockAmount = this.handleStockAmount.bind(this);
        // this.handleStockValue = this.handleStockValue.bind(this);
            // Insurance
        // this.handleInsuranceNumChange = this.handleInsuranceNumChange.bind(this);
        // this.CreateInsuranceList = this.CreateInsuranceList.bind(this);
        // this.handleInsuranceCompany = this.handleInsuranceCompany.bind(this)
        // this.handleInsuranceType = this.handleInsuranceType.bind(this);
        // this.handleInsuranceValue = this.handleInsuranceValue.bind(this);
        // this.handleInsuranceDate = this.handleInsuranceDate.bind(this);
            // ChattelChecked
        this.handleChattelCheckChange = this.handleChattelCheckChange.bind(this);
        
        // Real estate
        
            // Land
        // this.handleLandNumChange = this.handleLandNumChange.bind(this);
        // this.CreateLandList = this.CreateLandList.bind(this);
        // this.handleLandNumber = this.handleLandNumber.bind(this);
        // this.handleLandNowValue = this.handleLandNowValue.bind(this);
        // this.handleLandFinalValue = this.handleLandFinalValue.bind(this);
            // Building
        // this.handleBuildingNumChange = this.handleBuildingNumChange.bind(this);
        // this.CreateBuildingList = this.CreateBuildingList.bind(this);
        // this.handleBuildingNumber = this.handleBuildingNumber.bind(this);
        // this.handleBuildingNowValue = this.handleBuildingNowValue.bind(this);
        // this.handleBuildingFinalValue = this.handleBuildingFinalValue.bind(this);
            // 
        this.handleRealEstatelCheckChange = this.handleRealEstatelCheckChange.bind(this);
            // Creditor
        // this.handleCreditorNumChange = this.handleCreditorNumChange.bind(this);
        // this.CreateCreditorList = this.CreateCreditorList.bind(this);
        // this.handleCreditorName = this.handleCreditorName.bind(this);
        // this.handleCreditorValue = this.handleCreditorValue.bind(this);
        // this.handleCreditorAddr = this.handleCreditorAddr.bind(this);
        //     // Debtor
        // this.handleDebtorNumChange = this.handleDebtorNumChange.bind(this);
        // this.CreateDebtorList = this.CreateDebtorList.bind(this);
        // this.handleDebtorName = this.handleDebtorName.bind(this);
        // this.handleDebtorValue = this.handleDebtorValue.bind(this);
        // this.handleDebtorAddr = this.handleDebtorAddr.bind(this);
            // Email
        // this.handleEmailNumChange = this.handleEmailNumChange.bind(this);
        // this.CreateEmailList = this.CreateEmailList.bind(this);
        // this.handleEmailName = this.handleEmailName.bind(this);
        // this.handleEmailAddr = this.handleEmailAddr.bind(this);
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
        // const {} = this.state;
        const {chineseName, OnChineseName, englishName, OnEnglishName, personalID, OnPersonalID,
                birthYear, OnBirthYear, birthMonth, OnBirthMonth, birthDay, OnBirthDay,
                address, OnAddress, phone, OnPhone,
                mateChecked, childChecked, fatherChecked, motherChecked, siblingChecked, ancestorChecked,
                OnMateCheck, OnChildCheck, OnSiblingCheck, OnAncestorCheck, OnFatherCheck, OnMotherCheck, 
                childNum, grandChildNum, siblingNum, grandFatherNum, grandMotherNum,
                OnChildNum, OnGrandChildNum, OnSiblingNum, OnGrandFatherNum, OnGrandMotherNum,
                heir,
                carNum, carArr, OnCarNum, motorNum, motorArr, OnMotorNum, money, OnMoney,
                accountNum, accountArr, OnAccountNum, stockNum, stockArr, OnStockNum,
                insuranceNum, insuranceArr, OnInsuranceNum,
                landNum, landArr, OnLandNum, buildingNum, buildingArr, OnBuildingNum,
                creditorNum, creditorArr, OnCreditorNum, debtorNum, debtorArr, OnDebtorNum, warrantNum, warrantArr, OnWarrantNum,
                position, OnPosition, remark, OnRemark,
                emailNum, emailArr, OnEmailNum} = this.props;
        const heritage = this.calculateHeritage();
        
        let divHeir = "";
        for(let i = 0; i < heir.length; i++) {
            divHeir += String(heir[i].relatives) + String(heir[i].num) + '位, ';
        }
        console.log(divHeir);

        return (
            <div className='second-page margin-30px'>
                <h1 className='H1'>填寫資料</h1>
                <div className='member'>
                    <h2 className='H2' id="title-1">建立帳號</h2>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            中文姓名 : <Input  className='name ml-sm-2' type="text" name="chineseName" 
                                    innerRef={el => {this.inputChineseName = el}} value={chineseName} onChange={OnChineseName}/>
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            英文姓名 : <Input className='name ml-sm-2' type="text" name="englishName" placeholder="請與護照名相同" 
                                    innerRef={el => {this.inputEnglishName = el}} value={englishName} onChange={OnEnglishName}/>
                        </FormGroup>
                    </Form>
                    <Form inline>
                        出生年月日 : 
                        <FormGroup className='mb-2 mr-sm-0 mb-sm-1'>
                            <Input  className='birth ml-sm-2' type="text" name="year" 
                            innerRef={el => {this.inputBirthYear = el}} value={birthYear} onChange={OnBirthYear}/>年
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-0 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="month" 
                            innerRef={el => {this.inputBirthMonth = el}} value={birthMonth} onChange={OnBirthMonth}/>月
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="day" 
                            innerRef={el => {this.inputBirthDay = el}} value={birthDay} onChange={OnBirthDay}/>日
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            身分證號<Input className='personalID ml-sm-2' type="text" name="personalID" 
                                    innerRef={el => {this.inputPersonalID = el}} value={personalID} onChange={OnPersonalID}/>
                        </FormGroup>
                    </Form>
                    <InputGroup>
                        通訊地址 : <Input className='address ml-sm-2' type="text" name="address" 
                                    innerRef={el => {this.inputAddress = el}} value={address} onChange={OnAddress}/>
                    </InputGroup>
                    <InputGroup>
                        連絡電話 : <Input className='phone ml-sm-2' type="text" name="phoneNumber" 
                                    innerRef={el => {this.inputPhone = el}} value={phone} onChange={OnPhone}/>
                    </InputGroup>
                </div>
                
                <div className='famliy'>
                    <h2 className='H2' id="title-2">家族規模</h2>
                    *註：只需填寫還在世的家族成員
                    <br  />
                    <FormGroup check inline>
                        (一)配偶<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={mateChecked} onChange={OnMateCheck} />
                        {/* {mateChecked && 
                            <div>
                                <Form inline>姓名: <Input className='name' type="text" /></Form>
                            </div> } */}
                    </FormGroup>
                    <br />
                    <FormGroup check inline>
                        (二)直系血親卑親屬<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={childChecked} onChange={OnChildCheck} />
                    </FormGroup>
                    {childChecked && 
                        <div>
                            <Form inline>a.子女 : 共<Input className='number' type="text" 
                            innerRef={el => {this.inputChildNum = el}} value={childNum} onChange={OnChildNum}/>位</Form>
                            <Form inline>b.孫子女 : 共<Input className='number' type="text" 
                            innerRef={el => {this.inputGrandChildNum = el}} value={grandChildNum} onChange={OnGrandChildNum}/>位</Form>
                        </div> }
                    <br />
                    <FormGroup check inline>
                        (三)父母 : 
                        父<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={fatherChecked} onChange={OnFatherCheck} />
                        母<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={motherChecked} onChange={OnMotherCheck} />                        
                    </FormGroup>
                    <br />
                    <FormGroup check inline>
                        (四)兄弟姊妹<Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={siblingChecked} onChange={OnSiblingCheck} />
                        {siblingChecked && 
                            <div>
                                <Form inline>共 : <Input className='number' type="text" 
                                innerRef={el => {this.inputSiblingNum = el}} value={siblingNum} onChange={OnSiblingNum}/>位</Form>
                            </div> }
                    </FormGroup>
                    <br />
                    <FormGroup check inline>
                        (五)祖父母 <Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={ancestorChecked} onChange={OnAncestorCheck} /> 
                    </FormGroup>   
                    {ancestorChecked && 
                        <div>
                            <Form inline>a.祖父 : 共<Input className='number' type="text" 
                            innerRef={el => {this.inputGrandFatherNum = el}} value={grandFatherNum} onChange={OnGrandFatherNum}/>位</Form>
                            <Form inline>b.祖母 : 共<Input className='number' type="text" 
                            innerRef={el => {this.inputGrandMotherNum = el}} value={grandMotherNum} onChange={OnGrandMotherNum}/>位</Form>
                        </div> }
                </div>
                <br />
                <div>
                    <h3 className="H3">特種贈與</h3>
                    <HeirList heirs={heir}/>
                </div> 
                {/* <h3>法定繼承人: {divHeir}</h3> */}

                {/* <br /> */}
                <h2 className="H2" id="title-3">正負資產</h2>
                <div className='chattel'> 
                    <h3 className="H3">一、動產部分</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一) 汽車 : 共 <Input className='number' type='text' innerRef={el => {this.inputCar = el}} 
                                value={carNum} onChange={OnCarNum}></Input>輛
                        </FormGroup>
                    </Form>
                    <CarList cars={carArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (二) 機車 : 共 <Input className='number' type='text' innerRef={el => {this.inputMotor = el}} 
                                value={motorNum} onChange={OnMotorNum}></Input>輛
                        </FormGroup>
                    </Form>
                    <MotorList motors={motorArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (三) 現金(新台幣) : 共<Input className='value' type='text' innerRef={el => {this.inputMoney = el}} 
                                value={money} onChange={OnMoney}></Input>元
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (四) 銀行存款 : 共<Input className='number' type='text' innerRef={el => {this.inputAccount = el}} 
                                value={accountNum} onChange={OnAccountNum}></Input>個帳戶
                        </FormGroup>
                    </Form>
                    <AccountList accounts={accountArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (五) 股票 : 共<Input className='number' type='text' innerRef={el => {this.inputStock = el}} 
                                value={stockNum} onChange={OnStockNum}></Input>種股號
                        </FormGroup>
                    </Form>
                    <StockList stocks={stockArr} />
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (六) 保險 : 共<Input className='number' type='text' innerRef={el => {this.inputInsurance = el}} 
                                value={insuranceNum} onChange={OnInsuranceNum}></Input>幾支
                        </FormGroup>
                    </Form>
                    <InsuranceList insurances={insuranceArr} />
                    <FormGroup check inline>
                        (七)<Input type="checkbox" className = 'ml-sm-1 mt-sm-0' checked={this.state.chattelChecked} onChange={this.handleChattelCheckChange} />如國稅局歸戶財產清單所載。
                    </FormGroup>
                </div>

                <br />
                <div>
                    <h3 className="H3">二、不動產部分</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)土地 : 共<Input className='number' type='text' innerRef={el => {this.inputLand = el}} 
                                value={landNum} onChange={OnLandNum}></Input>筆
                        </FormGroup>
                    </Form>
                    <LandList lands={landArr} />
                    <div className="width-70rem">
                        ※註1：公告土地現值和市值不同。公告土地現值：係政府官方根據過去一年來，調查轄區內土地交易的價格動態，分別計算出各區段的價格，做為土地移轉買賣交易時的價格依據。市值：市場實際買賣的價格。
                        <br />
                        ※註2：公告土地現值可至中華民國內政部地政司網站查詢。成交價則可請土地估價師進行估價。
                    </div>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (二)建物 : 共<Input className='number' type='text' innerRef={el => {this.inputBuilding = el}} 
                                value={buildingNum} onChange={OnBuildingNum}></Input>筆
                        </FormGroup>
                    </Form>
                    <BuildingList buildings={buildingArr} />
                    <div className="width-70rem">
                        ※註1：評定標準價格和市值不同。評定標準價格：係政府評定的房屋價值，廣泛地用來作為各種包含房屋稅、契稅等各種與房屋有關的稅賦之課徵基準。市價：市場實際買賣的價格。
                        <br />
                        ※註2：所有權人攜帶身分證正本、印章到地方稅的稅務機關申請房屋稅稅籍證明，在稅籍證明上面就會有房屋評定現值的金額。房屋成交價則可詢問房屋仲介該房屋附近一坪大致的價格，再去推算成交價的估計值。
                    </div>
                    <FormGroup check inline>
                        (三)<Input type="checkbox" className = 'ml-sm-1 mt-sm-0' checked={this.state.realEstateChecked} onChange={this.handleRealEstatelCheckChange} />如國稅局歸戶財產清單所載。
                    </FormGroup>
                </div>
                
                <br />
                <div>
                    <h3 className="H3">三、債權人(您的債主)之姓名、地址及債權數額</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)債權人 : 共<Input className='number' type='text' innerRef={el => {this.inputCreditor = el}} 
                                value={creditorNum} onChange={OnCreditorNum}></Input>位
                        </FormGroup>
                    </Form>
                    <CreditorList creditors={creditorArr} />
                </div>

                <br /> 
                <div>
                    <h3 className="H3">四、債務人(誰欠您錢)之姓名、地址及債權數額</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)債務人 : 共<Input className='number' type='text' innerRef={el => {this.inputDebtor = el}} 
                                value={debtorNum} onChange={OnDebtorNum}></Input>位
                        </FormGroup>
                    </Form>
                    <DebtorList debtors={debtorArr} />
                </div>

                <div>
                    <h3 className="H3">五、作保人</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)作保人 : 共<Input className='number' type='text' innerRef={el => {this.inputWarrant = el}} 
                                value={warrantNum} onChange={OnWarrantNum}></Input>位
                        </FormGroup>
                    </Form>
                    <WarrantList warrants={warrantArr} />
                </div>

                <br />
                <div>
                    <h3 className="H3">六、請輸入您的印鑑、帳本存放、遺囑正本的位置</h3>
                    位置 : <Input className='Textarea' type="textarea" name="位置" 
                            innerRef={el => {this.inputPosition = el}} value={position} onChange={OnPosition}/>
                    備註 : <Input className='Textarea' type="textarea" name="備註" 
                            innerRef={el => {this.inputRemark = el}} value={remark} onChange={OnRemark}/>
                </div>
                
                <br />
                <div>
                    <h3 className="H3">七、指定遺囑副本信件收件人</h3>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            (一)收件人 : 共<Input className='number' type='text' innerRef={el => {this.inputEmail = el}} 
                                value={emailNum} onChange={OnEmailNum}></Input>人
                        </FormGroup>
                    </Form>
                    <EmailList emails={emailArr} />
                </div>
                
                {/* <h1>現在遺產: {heritage} 元</h1> */}
                
                <Link to="/third-page">
                    <button id="upload" onClick={this.handleHeritage}>提交</button>
                </Link>
            </div>
        );
    }
    calculateHeritage() {
        let heritage = Number(0);
        const {heir, carArr, motorArr, money, accountArr, stockArr, insuranceArr, landArr, buildingArr, creditorArr, debtorArr} = this.props;
        // const {} = this.state;
        // let i = 0;
        function sum (arr) {
            let tmp = 0;
            let i = 0;
            for(i = 0; i < arr.length; i++) {
                tmp += arr[i].value;
                console.log(tmp);
            }
            return tmp;
        }
        function sumForStock (arr) {
            let tmp = 0;
            let i = 0;
            for(i = 0; i < arr.length; i++) {
                tmp += arr[i].value * arr[i].amount;
            }
            return tmp;
        }
        function sumForNowValue (arr) {
            let tmp = 0;
            let i = 0;
            for(i = 0; i < arr.length; i++) {
                tmp += arr[i].finalValue;
            }
            return tmp;
        }
        function sumGivenValue (arr) {
            let tmp = 0;
            let i = 0, j = 0;
            for(i = 0; i < arr.length; i++) {
                for(j = 0; j < arr[i].givenArr.length; j++) {
                    tmp += arr[i].givenArr[j].value;
                }
            }
            return tmp;
        }
        heritage = Number(sum(carArr) + sum(motorArr) + money + sum(accountArr) + sumForStock(stockArr) + sum(insuranceArr) + sumForNowValue(landArr)
            + sumForNowValue(buildingArr) - sum(creditorArr) + sum(debtorArr) + sumGivenValue(heir));
        return heritage;
    }
    calculateHeritageWithWarrant(heritage) {
        const {warrantArr} = this.props;
        let heritageWW = heritage;
        
        let i = 0;
        for(i = 0; i < warrantArr.length; i++) {
            heritageWW -= warrantArr[i].value;
        }

        return heritageWW;
    }
    handleHeritage() {
        const heritage = this.calculateHeritage();
        const heritageWW = this.calculateHeritageWithWarrant(heritage);
        this.props.OnHeritage(heritage);
        this.props.OnheritageWithWarrant(heritageWW);
    }


//***Handle Family Num****************************************** */
    // handleChildNum(e) {
    //     const childNum = e.target.value;
    //     this.props.OnChildNum(childNum);
    // }
    // handleGrandChildNum(e) {
    //     const grandchildNum = e.target.value;
    //     this.props.OnGrandChildNum(grandchildNum);
    // }
    // handleSiblingNum(e) {
    //     const siblingNum = e.target.value;
    //     this.props.OnSiblingNum(siblingNum);
    // }
    // handleGrandFatherNum(e) {
    //     const grandFatherNum = e.target.value;
    //     this.props.OnGrandFatherNum(grandFatherNum);
    // }
    // handleGrandMotherNum(e) {
    //     const grandMotherNum = e.target.value;
    //     this.props.OnGrandMotherNum(grandMotherNum);
    // }
//***Handle Car****************************************** */
    // handleCarNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         carNum: Number(num)
    //     }, () =>{
    //         this.CreateCarList();
    //     });
    // }
    // CreateCarList(){
    //     const num = this.state.carNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             licensePlate: String(''),
    //             value: Number(0),
    //             OnLicense: this.handleCarLicense,
    //             OnValue: this.handleCarValue
    //         });
    //     }
    //     this.setState({
    //         carArr: arr
    //     });
    // }
    // handleCarLicense(targetID, newLicense){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.carArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         licensePlate: String(newLicense)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         carArr: arr
    //     })
    // }
    // handleCarValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.carArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         carArr: arr
    //     })
    // }
//***Handle Motor****************************************** */
    // handleMotorNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         motorNum: Number(num)
    //     }, () =>{
    //         this.CreateMotorList();
    //     });
    // }
    // CreateMotorList(){
    //     const num = this.state.motorNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             licensePlate: String(''),
    //             value: Number(0),
    //             OnLicense: this.handleMotorLicense,
    //             OnValue: this.handleMotorValue
    //         });
    //     }
    //     this.setState({
    //         motorArr: arr
    //     });
    // }
    // handleMotorLicense(targetID, newLicense){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.motorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         licensePlate: String(newLicense)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         motorArr: arr
    //     })
    // }
    // handleMotorValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.motorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         motorArr: arr
    //     })
    // }
//***Handle Money****************************************** */
    // handleMoneyChange(e){
    //     const num = e.target.value;
    //     this.setState({
    //         money: Number(num)
    //     });
    // }
//***Handle Account****************************************** */
    // handleAccountNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         accountNum: Number(num)
    //     }, () =>{
    //         this.CreateAccountList();
    //     });
    // }
    // CreateAccountList(){
    //     const num = this.state.accountNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             type: String(''),
    //             ID: String(''),
    //             value: Number(0),
    //             OnType: this.handleAccountType,
    //             OnID: this.handleAccountID,
    //             OnValue: this.handleAccountValue
    //         });
    //     }
    //     this.setState({
    //         accountArr: arr
    //     });
    // }
    // handleAccountType(targetID, newType){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.accountArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         type: String(newType)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         accountArr: arr
    //     })
    // }
    // handleAccountID(targetID, newID){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.accountArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         ID: String(newID)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         accountArr: arr
    //     })
    // }
    // handleAccountValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.accountArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         accountArr: arr
    //     })
    // }
//***Handle Stock****************************************** */
    // handleStockNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         stockNum: Number(num)
    //     }, () =>{
    //         this.CreateStockList();
    //     });
    // }
    // CreateStockList(){
    //     const num = this.state.stockNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             type: String(''),
    //             amount: Number(0),
    //             value: Number(0),
    //             OnType: this.handleStockType,
    //             OnAmount: this.handleStockAmount,
    //             OnValue: this.handleStockValue
    //         });
    //     }
    //     this.setState({
    //         stockArr: arr
    //     });
    // }
    // handleStockType(targetID, newType){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.stockArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         type: String(newType)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         stockArr: arr
    //     })
    // }
    // handleStockAmount(targetID, newAmount){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.stockArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         amount: Number(newAmount)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         stockArr: arr
    //     })
    // }
    // handleStockValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.stockArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         stockArr: arr
    //     })
    // }
        // Insurance
    // handleInsuranceNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         insuranceNum: Number(num)
    //     }, () =>{
    //         this.CreateInsuranceList();
    //     });
    // }
    // CreateInsuranceList(){
    //     const num = this.state.insuranceNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             company: String(''),
    //             type: String(''),
    //             value: Number(0),
    //             date: String(''),
    //             OnCompany: this.handleInsuranceCompany,
    //             OnType: this.handleInsuranceType,
    //             OnValue: this.handleInsuranceValue,
    //             OnDate: this.handleInsuranceDate
    //         });
    //     }
    //     this.setState({
    //         insuranceArr: arr
    //     });
    // }
    // handleInsuranceCompany(targetID, newCompany){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.insuranceArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         company: String(newCompany)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         insuranceArr: arr
    //     })
    // }
    // handleInsuranceType(targetID, newType){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.insuranceArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         type: String(newType)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         insuranceArr: arr
    //     })
    // }
    // handleInsuranceValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.insuranceArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         insuranceArr: arr
    //     })
    // }
    // handleInsuranceDate(targetID, newDate){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr = this.state.insuranceArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         date: Number(newDate)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         insuranceArr: arr
    //     })
    // }
    handleChattelCheckChange() {
        this.setState((prevState, props) => ({
            chattelChecked: !prevState.chattelChecked
        }));
    }

    // Real estate
        // Land
    // handleLandNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         landNum: Number(num)
    //     }, () =>{
    //         this.CreateLandList();
    //     });
    // }
    // CreateLandList(){
    //     const num = this.state.landNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             number: String(''),
    //             nowValue: Number(0),
    //             finalValue: Number(0),
    //             OnNumber: this.handleLandNumber,
    //             OnNowValue: this.handleLandNowValue,
    //             OnFinalValue: this.handleLandFinalValue
    //         });
    //     }
    //     this.setState({
    //         landArr: arr
    //     });
    // }
    // handleLandNumber(targetID, newNumber){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.landArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         number: String(newNumber)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         landArr: arr
    //     })
    // }
    // handleLandNowValue(targetID, newNowValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.landArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         nowValue: Number(newNowValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         landArr: arr
    //     })
    // }
    // handleLandFinalValue(targetID, newFinalValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.landArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         finalValue: Number(newFinalValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         landArr: arr
    //     })
    // }
        // Building
    // handleBuildingNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         buildingNum: Number(num)
    //     }, () =>{
    //         this.CreateBuildingList();
    //     });
    // }
    // CreateBuildingList(){
    //     const num = this.state.buildingNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             number: String(''),
    //             nowValue: Number(0),
    //             finalValue: Number(0),
    //             OnNumber: this.handleBuildingNumber,
    //             OnNowValue: this.handleBuildingNowValue,
    //             OnFinalValue: this.handleBuildingFinalValue
    //         });
    //     }
    //     this.setState({
    //         buildingArr: arr
    //     });
    // }
    // handleBuildingNumber(targetID, newNumber){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.buildingArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         number: String(newNumber)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         buildingArr: arr
    //     })
    // }
    // handleBuildingNowValue(targetID, newNowValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.buildingArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         nowValue: Number(newNowValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         buildingArr: arr
    //     })
    // }
    // handleBuildingFinalValue(targetID, newFinalValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.buildingArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         finalValue: Number(newFinalValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         buildingArr: arr
    //     })
    // }
    handleRealEstatelCheckChange() {
        this.setState((prevState, props) => ({
            realEstateChecked: !prevState.realEstateChecked
        }));
    }
    
    // Creditor
    // handleCreditorNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         creditorNum: Number(num)
    //     }, () =>{
    //         this.CreateCreditorList();
    //     });
    // }
    // CreateCreditorList(){
    //     const num = this.state.creditorNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             name: String(''),
    //             value: Number(0),
    //             addr: String(''),
    //             OnName: this.handleCreditorName,
    //             OnValue: this.handleCreditorValue,
    //             OnAddr: this.handleCreditorAddr
    //         });
    //     }
    //     this.setState({
    //         creditorArr: arr
    //     });
    // }
    // handleCreditorName(targetID, newName){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.creditorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         name: String(newName)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         creditorArr: arr
    //     })
    // }
    // handleCreditorValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.creditorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         creditorArr: arr
    //     })
    // }
    // handleCreditorAddr(targetID, newAddr){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.creditorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         addr: String(newAddr)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         creditorArr: arr
    //     })
    // }
    // // Debtor
    // handleDebtorNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         debtorNum: Number(num)
    //     }, () =>{
    //         this.CreateDebtorList();
    //     });
    // }
    // CreateDebtorList(){
    //     const num = this.state.debtorNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             name: String(''),
    //             value: Number(0),
    //             addr: String(''),
    //             OnName: this.handleDebtorName,
    //             OnValue: this.handleDebtorValue,
    //             OnAddr: this.handleDebtorAddr
    //         });
    //     }
    //     this.setState({
    //         debtorArr: arr
    //     });
    // }
    // handleDebtorName(targetID, newName){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.debtorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         name: String(newName)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         debtorArr: arr
    //     })
    // }
    // handleDebtorValue(targetID, newValue){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.debtorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         value: Number(newValue)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         debtorArr: arr
    //     })
    // }
    // handleDebtorAddr(targetID, newAddr){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.debtorArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         addr: String(newAddr)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         debtorArr: arr
    //     })
    // }
    // Email
    // handleEmailNumChange(e) {
    //     const num = e.target.value;
    //     this.setState({
    //         emailNum: Number(num)
    //     }, () =>{
    //         this.CreateEmailList();
    //     });
    // }
    // CreateEmailList(){
    //     const num = this.state.emailNum;
    //     let arr=[];
    //     while (arr.length < num) { 
    //         arr.push({
    //             id: uuid(),
    //             name: String(''),
    //             addr: String(''),
    //             OnName: this.handleEmailName,
    //             OnAddr: this.handleEmailAddr
    //         });
    //     }
    //     this.setState({
    //         emailArr: arr
    //     });
    // }
    // handleEmailName(targetID, newName){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.emailArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         name: String(newName)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         emailArr: arr
    //     })
    // }
    // handleEmailAddr(targetID, newAddr){
    //     function findTarget(element) {
    //         return element.id === targetID;
    //     }
    //     let arr=this.state.emailArr;
    //     let index = arr.findIndex(findTarget);
    //     let updateItem = {
    //         ...arr[index],
    //         addr: String(newAddr)
    //     }
    //     arr[index] = updateItem;
    //     this.setState({
    //         emailArr: arr
    //     })
    // }
    

}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
