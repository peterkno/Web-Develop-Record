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


import './SecondPage.css';

export default class SecondPageV2 extends React.Component {
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
            // postLoading: false,
            // posts: []
        };

        // this.handleCreatePost = this.handleCreatePost.bind(this);
        // this.handleCreateVote = this.handleCreateVote.bind(this);
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
            <div>
                <div className='second-page'>
                    <form>
                        <p>建立會員帳號</p>
                        中文姓名 : <input type="text" name="中文姓名" size="10px" />
                        英文姓名 : <input type="text" name="英文姓名" size="10px" />
                        <br />
                        *註：請與護照名相同
                        <br />
                        出生年月日:  <input type="text" name="年" size="3px" /> 年 
                                    <input type="text" name="月" size="3px" /> 月 
                                    <input type="text" name="日" size="3px" /> 日
                        身分證號 : <input type="text" name="身分證號" size="10px" />
                        <br />
                        通訊地址 : <input type="text" name="通訊地址" size="20px" />
                        <br />
                        連絡電話 : <input type="text" name="連絡電話" size="10px" />
                        <br />
                        <br />
                        <p>家族規模</p>
                        {/* <!--配偶checkbox點開才出現姓名；直系血親checkbox才有a. b.；父母直接兩個checkbox就夠；兄弟姊妹同配偶；祖父母同直系血親--> */}
                        *註：只需填寫還在世的家族成員
                        <br />
                        (一) 配偶 <input type="checkbox" name="配偶" /> 姓名：<input type="text" name="配偶姓名" size="10px" />
                        <br />
                        (二) 直系血親卑親屬 <input type="checkbox" name="直系血親" />
                        <br />
                        a.子女：共 <input type="text" name="子女數量" size="2px" />位。
                        <br />
                        b.孫子女：共 <input type="text" name="孫子女數量" size="2px" />位。
                        <br />
                        (三)父母 : 父<input type="checkbox" name="父" /> 母<input type="checkbox" name="母" />
                        <br />
                        (四)兄弟姊妹 <input type="checkbox" name="兄弟姊妹" /> 共 <input type="text" name="兄弟姊妹數量" size="2px" />位。
                        <br />
                        (五)祖父母：<input type="checkbox" name="祖父母" />
                        <br />
                        a.祖父：共 <input type="text" name="祖父數量" size="2px" />位。
                        <br />
                        b.祖母：共 <input type="text" name="祖母數量" size="2px" />位。
                        <br />
                        <br />
                        <br />
                        <p>請以表格格式輸入您的正負資產</p>
                        <p>一、動產部分</p>
                        <br />
                        (一) 汽車: 共 <input type="text" name="汽車數量" size="2px" />輛。
                        <br />
                            1.牌照號碼：<input type="text" name="汽車牌照號碼-1" size="15px" /> 
                                市值：<input type="text" name="汽車市值-1" size="5px" /> 元。
                        <br />
                        (二) 機車: 共 <input type="text" name="機車數量" size="2px" />輛。
                        <br />
                            2.牌照號碼：<input type="text" name="機車牌照號碼-1" size="15px" /> 
                                市值：<input type="text" name="機車市值-1" size="5px" /> 元。
                        <br />
                        (三) 現金(新台幣) 共 : <input type="text" name="現金" size="10px" />元。
                        <br />
                        (四) 銀行存款 : 共<input type="text" name="帳戶數量" size="2px" />個帳戶。
                        <br />
                        1.存款種類：<input type="text" name="存款種類-1" size="5px" /> 
                            存款帳號：<input type="text" name="存款帳號-1" size="10px" />
                        <br />
                        存款金額共：<input type="text" name="存款金額-1" size="10px" />元。
                        <br />
                        (五)股票 : 共<input type="text" name="股號數" size="2px" />種股號。
                        <br />
                        1.股號/股名：<input type="text" name="股號-1" size="5px" /> 
                            股數：<input type="text" name="股數-1" size="2px" />
                        <br />
                        市值：<input type="text" name="股票市值-1" size="5px" />
                        <br />
                        (六)保險 ： 共<input type="text" name="保險數" size="2px" />支。
                        1.保險公司：<input type="text" name="保險公司-1" size="5px" /> 
                            保單種類：<input type="text" name="保單種類-1" size="5px" />
                        <br />
                        保險金額：<input type="text" name="保險金額-1" size="5px" /> 
                            保單生效日：<input type="text" name="保單生效日-1" size="5px" />
                        <br />
                        (七) <input type="checkbox" name="動產國稅局" /> 如國稅局歸戶財產清單所載。
                        <br />
                        <br />
                        <p>二、不動產部分</p>
                        (一)土地 ： 共<input type="text" name="土地筆數" size="3px" />筆
                        <br />
                        1.地號：<input type="text" name="地號-1" size="5px" />，
                            公告土地現值：<input type="text" name="土地現值-1" size="5px" />元，
                            市值(成交價)：<input type="text" name="土地市值-1" size="5px" />元(此欄必填)。
                        <br />
                        ※註1：公告土地現值和市值不同。公告土地現值：係政府官方根據過去一年來，調查轄區內土地交易的價格動態，分別計算出各區段的價格，做為土地移轉買賣交易時的價格依據。市值：市場實際買賣的價格。
                        <br />
                        ※註2：公告土地現值可至中華民國內政部地政司網站查詢。成交價則可請土地估價師進行估價。
                        <br />
                        (二)建物 ： 共<input type="text" name="建物筆數" size="3px" />筆
                        <br />
                        1.門牌號碼：<input type="text" name="門牌號-1" size="5px" />，
                        評定標準價格：<input type="text" name="建物標值-1" size="5px" />元，
                        市值(成交價)：<input type="text" name="建物市值-1" size="5px" />元(此欄必填)。
                        <br />
                        ※註1：評定標準價格和市值不同。評定標準價格：係政府評定的房屋價值，廣泛地用來作為各種包含房屋稅、契稅等各種與房屋有關的稅賦之課徵基準。市價：市場實際買賣的價格。
                        <br />
                        ※註2：所有權人攜帶身分證正本、印章到地方稅的稅務機關申請房屋稅稅籍證明，在稅籍證明上面就會有房屋評定現值的金額。房屋成交價則可詢問房屋仲介該房屋附近一坪大致的價格，再去推算成交價的估計值。
                        <br />
                        (三) <input type="checkbox" name="不動產國稅局" /> 如國稅局歸戶財產清單所載。
                        <br />
                        <br />
                        <p>三、債權人(您的債主)之姓名、地址及債權數額</p>
                        債權人共：<input type="text" name="債權人數量" size="2px" />位。
                        <br />
                        (一)姓名：<input type="text" name="債權人-1" size="10px" /> 
                            債權數額：<input type="text" name="債權數額-1" size="10px" />
                        <br />
                        地址：<input type="text" name="債權人地址-1" size="20px" />
                        <br />
                        <p>四、債務人(誰欠您錢)之姓名、地址及債權數額</p>
                        債務人共：<input type="text" name="債務人數量" size="2px" />位。
                        <br />
                        (一)姓名：<input type="text" name="債務人-1" size="10px" /> 
                            債務數額：<input type="text" name="債務數額-1" size="10px" />
                        <br />
                        地址：<input type="text" name="債務人地址-1" size="20px" />
                        <br />
                        (以上參考遺產清冊表格)
                        <br />
                        <br />
                        <p>請輸入您的印鑑、帳本存放位置</p>
                        位置：<input type="text" name="位置" size="50px" />
                        <br />
                        備註：<input className='input' type="text" name="備註" />
                        <br />
                        <input type="submit" value="提交" />
                    </form>
                </div>
                <br />
                <div>
                    <Button tag={Link} to='/' >首頁</Button>
                    <Button tag={Link} to='/third-page' >上傳遺囑</Button>
                    <Button tag={Link} to='/fourth-page' >寄出遺囑</Button>
                </div>
            </div>
        );
    }
    
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
