import React from 'react';
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


import './SecondPage.css';

export default class SecondPage extends React.Component {
    static propTypes = {
        // city: PropTypes.string,
        // code: PropTypes.number,
        // group: PropTypes.string,
        // description: PropTypes.string,
        // temp: PropTypes.number,
        // unit: PropTypes.string,
        // weatherLoading: PropTypes.bool,
        // masking: PropTypes.bool,
        // dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            mateChecked: false,
            childChecked: false,
            fatherChecked: false,
            motherChecked: false,
            siblingChecked: false,
            ancestorChecked: false
        };

        this.carNum = null;

        this.handleMateCheckChange = this.handleMateCheckChange.bind(this);
        this.handleChildCheckChange = this.handleChildCheckChange.bind(this);
        this.handleFatherCheckChange = this.handleFatherCheckChange.bind(this);
        this.handleMotherCheckChange = this.handleMotherCheckChange.bind(this);
        this.handleSiblingCheckChange = this.handleSiblingCheckChange.bind(this);
        this.handleAncestorCheckChange = this.handleAncestorCheckChange.bind(this);

        this.handleCarNumChange = this.handleCarNumChange.bind(this);
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

                <div>
                    
                    <Input className='number' type='textarea' innerRef={el => {this.inputEl = el}} 
                        value={this.state.inputValue} onChange={this.handleInputChange}></Input>
                </div>
                
                
{/*                 
                
                <p>請以表格格式輸入您的正負資產</p>
                <p>一、動產部分</p>
                
                (一) 汽車: 共 <Input type="text" name="汽車數量" bsSize="2px"/>輛。
                
                    1.牌照號碼：<Input type="text" name="汽車牌照號碼-1" bsSize="15px"/> 市值：<Input type="text" name="汽車市值-1" bsSize="5px"/> 元。
                
                (二) 機車: 共 <Input type="text" name="機車數量" bsSize="2px"/>輛。
                
                    2.牌照號碼：<Input type="text" name="機車牌照號碼-1" bsSize="15px"/> 市值：<Input type="text" name="機車市值-1" bsSize="5px"/> 元。
                
                (三) 現金(新台幣) 共 : <Input type="text" name="現金" bsSize="10px"/>元。
                
                (四) 銀行存款 : 共<Input type="text" name="帳戶數量" bsSize="2px"/>個帳戶。
                
                1.存款種類：<Input type="text" name="存款種類-1" bsSize="5px"/> 存款帳號：<Input type="text" name="存款帳號-1" bsSize="10px"/>
                
                存款金額共：<Input type="text" name="存款金額-1" bsSize="10px"/>元。
                
                (五)股票 : 共<Input type="text" name="股號數" bsSize="2px"/>種股號。
                
                1.股號/股名：<Input type="text" name="股號-1" bsSize="5px"/> 股數：<Input type="text" name="股數-1" bsSize="2px"/>
                
                市值：<Input type="text" name="股票市值-1" bsSize="5px"/>
                
                (六)保險 ： 共<Input type="text" name="保險數" bsSize="2px"/>支。
                1.保險公司：<Input type="text" name="保險公司-1" bsSize="5px"/> 保單種類：<Input type="text" name="保單種類-1" bsSize="5px"/>
                
                保險金額：<Input type="text" name="保險金額-1" bsSize="5px"/> 保單生效日：<Input type="text" name="保單生效日-1" bsSize="5px"/>
                
                (七) <Input type="checkbox" name="動產國稅局"/> 如國稅局歸戶財產清單所載。
                
                
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
            </div>
        );
    }

    handleMateCheckChange() {
        this.setState((prevState, props) => ({
            mateChecked: !prevState.mateChecked
        }));
    }
    handleChildCheckChange() {
        this.setState((prevState, props) => ({
            childChecked: !prevState.mateChecked
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

    handleCarNumChange(e) {
        const num = e.target.value
        this.setState({carNum: num});
    }
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
