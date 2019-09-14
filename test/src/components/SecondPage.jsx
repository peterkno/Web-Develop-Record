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
import DeadChildList from 'components/DeadChildList.jsx';

import { stringify } from 'querystring';
const level = {
    Noman: -1,
    Mate: 0,
    Child: 1,
    GrandChild: 2,
    Parent: 3,
    Sibling: 4,
    Ancestor: 5,
}

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
        this.calculateHeritageWithWarrant = this.calculateHeritageWithWarrant.bind(this);
        this.calculateHeritageNoGiven = this.calculateHeritageNoGiven.bind(this);
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
        this.inputDeadChildNum = null;
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
        
        this.handleChattelCheckChange = this.handleChattelCheckChange.bind(this);
        
        this.handleRealEstatelCheckChange = this.handleRealEstatelCheckChange.bind(this);

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
                OnChildNum,  OnDeadChildNum, OnGrandChildNum, OnSiblingNum, OnGrandFatherNum, OnGrandMotherNum,
                deadChildNum, deadChildArr,
                heir, heirLevel,
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
        // console.log(divHeir);

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
                            <Input  className='birth ml-sm-2' type="text" name="year" placeholder="請輸入西元"
                            innerRef={el => {this.inputBirthYear = el}} value={birthYear} onChange={OnBirthYear}/>年
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-0 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="month" 
                            innerRef={el => {this.inputBirthMonth = el}} value={birthMonth} onChange={OnBirthMonth}/>月
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            <Input className='birth ml-sm-1' type="text" name="day" 
                            innerRef={el => {this.inputBirthDay = el}} value={birthDay} onChange={OnBirthDay}/>日
                            ※註：年分請輸入西元
                        </FormGroup>
                    </Form>

                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-1'>
                            身分證號：<Input className='personalID ml-sm-2' type="text" name="personalID" 
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
                    {/* *註：只需填寫還在世的家族成員
                    <br  /> */}
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
                            <Form inline>
                                a.子女 : 共<Input className='number' type="text" innerRef={el => {this.inputChildNum = el}} 
                                value={childNum} onChange={OnChildNum}/>位在世、
                                共<Input className='number' type="text" innerRef={el => {this.inputDeadChildNum = el}} 
                                value={deadChildNum} onChange={OnDeadChildNum}/>位已歿
                            </Form>
                            {
                                heirLevel === level.Child
                                ? <DeadChildList deadChilds={deadChildArr}/>
                                : null
                            }
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
                    ※註：若是沒有特種贈予，可以跳過不填
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
                    <h3 className="H3">六、請輸入您的印鑑、帳本、遺囑正本的存放位置</h3>
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
    calculateHeritageNoGiven() {
        let heritage = Number(0);
        const {carArr, motorArr, money, accountArr, stockArr, insuranceArr, landArr, buildingArr, creditorArr, debtorArr} = this.props;
        // const {} = this.state;
        // let i = 0;
        function sum (arr) {
            let tmp = 0;
            let i = 0;
            for(i = 0; i < arr.length; i++) {
                tmp += arr[i].value;
                // console.log(tmp);
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
        // function sumGivenValue (arr) {
        //     let tmp = 0;
        //     let i = 0, j = 0;
        //     for(i = 0; i < arr.length; i++) {
        //         for(j = 0; j < arr[i].givenArr.length; j++) {
        //             tmp += arr[i].givenArr[j].value;
        //         }
        //     }
        //     return tmp;
        // }
        heritage = Number(sum(carArr) + sum(motorArr) + money + sum(accountArr) + sumForStock(stockArr) + sum(insuranceArr) + sumForNowValue(landArr)
            + sumForNowValue(buildingArr) - sum(creditorArr) + sum(debtorArr));
        // heritage += Number(sumGivenValue(heir));
        return heritage;
    }

    calculateHeritage(heritageNoGiven) {
        const {heir} = this.props;
        let heritage = Number(0);
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
        heritage = heritageNoGiven + Number(sumGivenValue(heir));
        
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
        const heritageNoGiven = this.calculateHeritageNoGiven();
        const heritage = this.calculateHeritage(heritageNoGiven)
        const heritageWW = this.calculateHeritageWithWarrant(heritageNoGiven);
        this.props.OnHeritageNoGiven(heritageNoGiven);
        this.props.OnHeritage(heritage);
        this.props.OnheritageWithWarrant(heritageWW);
    }


    handleChattelCheckChange() {
        this.setState((prevState, props) => ({
            chattelChecked: !prevState.chattelChecked
        }));
    }

    
    handleRealEstatelCheckChange() {
        this.setState((prevState, props) => ({
            realEstateChecked: !prevState.realEstateChecked
        }));
    }

}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
