import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Input,
    Button,
    ListGroupItem,
    ListGroup,
    Collapse,
    Card,
    FormGroup,
    CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import request from 'superagent';
import {
    listPerson as listPersonFromApi,
    createPerson as createPersonFromApi,
} from 'api/persons.js';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import './ThirdPage.css';

const testamentBaseUrl = 'http://localhost:9487/api';
const nzhhk = require("nzh/hk"); //繁体中文
let displayNumber = 1;
const level = {
    Noman: -1,
    Mate: 0,
    Child: 1,
    GrandChild: 2,
    Parent: 3,
    Sibling: 4,
    Ancestor: 5,
}

export default class ThirdPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        heritage: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            heritageWarning: '',
            waringFlag: false,

            mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            ancestorLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
            deadHeirLegitime: Number(0),

            mateDisplay: '',
            childDisplay: '',
            grandChildDisplay: '',
            parentDisplay: '',
            siblingDisplay: '',
            ancestorDisplay: '',
            grandFatherDisplay: '',
            grandMotherDisplay: '',

            testamentFormCollapse: false,
            testamentFormChecked: false,

            remindCollapse: false,
            remindChecked: false,
            remindOneCollapse: false,
            remindOneChecked: false,
            remindTwoCollapse: false,
            remindTwoChecked: false,
            remindThreeCollapse: false,
            remindThreeChecked: false,
            remindFourCollapse: false,
            remindFourChecked: false,
            remindFiveCollapse: false,
            remindFiveChecked: false,

            mistakeCollapse: false,
            mistakeOneCollapse: false,
            mistakeOneChecked: false,
            mistakeTwoCollapse: false,

            testament: new FormData()
        };
        
        this.handleHeritageWarning = this.handleHeritageWarning.bind(this);

        this.calculateLegitime = this.calculateLegitime.bind(this);
        this.calculateLegitimeMate = this.calculateLegitimeMate.bind(this);
        this.calculateLegitimeChild = this.calculateLegitimeChild.bind(this);
        this.calculateLegitimeGrandChild = this.calculateLegitimeGrandChild.bind(this);
        this.calculateLegitimeParent = this.calculateLegitimeParent.bind(this);
        this.calculateLegitimeSibling = this.calculateLegitimeSibling.bind(this);
        this.calculateLegitimeAncestor = this.calculateLegitimeAncestor.bind(this);

        this.displayLegitimeMate = this.displayLegitimeMate.bind(this);
        this.displayLegitimeChild = this.displayLegitimeChild.bind(this);
        this.displayLegitimeGrandChild = this.displayLegitimeGrandChild.bind(this);
        this.displayLegitimeParent = this.displayLegitimeParent.bind(this);
        this.displayLegitimeSibling = this.displayLegitimeSibling.bind(this);
        this.displayLegitimeAncestor = this.displayLegitimeAncestor.bind(this);

        this.handleTestamentFormCollapse = this.handleTestamentFormCollapse.bind(this);
        this.handleTestamentFormCheck = this.handleTestamentFormCheck.bind(this);
        
        this.handleRemindCollapse = this.handleRemindCollapse.bind(this);
        // this.handleRemindCheck = this.handleRemindCheck.bind(this);
        this.handleRemindOneCollapse = this.handleRemindOneCollapse.bind(this);
        this.handleRemindOneChecek = this.handleRemindOneChecek.bind(this);
        this.handleRemindTwoCollapse = this.handleRemindTwoCollapse.bind(this);
        this.handleRemindTwoChecek = this.handleRemindTwoChecek.bind(this);
        this.handleRemindThreeCollapse = this.handleRemindThreeCollapse.bind(this);
        this.handleRemindThreeChecek = this.handleRemindThreeChecek.bind(this);
        this.handleRemindFourCollapse = this.handleRemindFourCollapse.bind(this);
        this.handleRemindFourChecek = this.handleRemindFourChecek.bind(this);
        this.handleRemindFiveCollapse = this.handleRemindFiveCollapse.bind(this);
        this.handleRemindFiveChecek = this.handleRemindFiveChecek.bind(this);

        this.handleMistakeCollapse = this.handleMistakeCollapse.bind(this);
        this.handleMistakeOneCollapse = this.handleMistakeOneCollapse.bind(this);
        this.handleMistakeOneChecek = this.handleMistakeOneChecek.bind(this);
        this.handleMistakeTwoCollapse = this.handleMistakeTwoCollapse.bind(this);

        this.handleTestamentFile = this.handleTestamentFile.bind(this);
        this.handleTestamentFileUpload = this.handleTestamentFileUpload.bind(this);
        
        // this.handleList = this.handleList.bind(this);
        this.handleCreatePerson = this.handleCreatePerson.bind(this);
        // this.handleCreatePost = this.handleCreatePost.bind(this);
        // this.handleCreateVote = this.handleCreateVote.bind(this);
    }

    componentWillMount() {
        this.calculateLegitime();
        this.handleHeritageWarning();
    }
    componentDidMount() {
        this.props.OpenNavbar();
        window.scrollTo(0, 0);
        displayNumber = 1;
        // debugger;
        
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
        const {heir, heirLevel, heritage, heritageWithWarrant, heritageNoGiven,
                childNum, grandChildNum, siblingNum, grandFatherNum, grandMotherNum,} = this.props;
        const { heritageWarning, waringFlag,
                mateDisplay, childDisplay, grandChildDisplay, parentDisplay, siblingDisplay, grandFatherDisplay, grandMotherDisplay, 
                testamentFormCollapse, testamentFormChecked, remindCollapse, mistakeCollapse ,
                remindOneCollapse, remindTwoCollapse, remindThreeCollapse, remindFourCollapse, remindFiveCollapse,
                remindOneChecked,  remindTwoChecked,  remindThreeChecked,  remindFourChecked,  remindFiveChecked,
                mistakeOneCollapse, mistakeTwoCollapse,} = this.state;
        return (
            // <div>
                <div className='third-page'>
                    <div className='Div' style={{whiteSpace: 'pre-wrap'}}>  
                        <h1 className='H1'>上傳遺囑</h1>
                        
                        <h2 className='H2' id="title-1">計算結果</h2>
                        <h3 className='H3'>一、遺產總額：{heritageNoGiven} 元</h3>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--若是須償還所有做保金額，遺產剩餘{heritageWithWarrant}元</p>
                        <p style={{color: 'red', whiteSpace: 'pre-wrap'}}>
                            {
                                waringFlag 
                                ? `${heritageWarning}`
                                : null
                            }
                        </p>
                        
                        <h3 className='H3'>二、特留分</h3>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--分配遺產時，至少要為法定繼承人保留的最低金額</p>
                        
                        <div className='Div' style={{whiteSpace: 'pre-wrap'}}> 
                            <p className="result">
                                {mateDisplay}
                                <br />
                                {childDisplay}
                                <br />
                                {grandChildDisplay}
                                <br />
                                {parentDisplay}
                                <br />
                                {siblingDisplay}
                                <br />
                                {grandFatherDisplay}
                                <br />
                                {grandMotherDisplay}
                                <br />
                            </p>
                        </div>
                    </div> 

                    <div className='Div'>
                        <h2 className='H2' id="title-2">遺囑格式
                        {   testamentFormCollapse == true 
                            ?  <IoIosArrowUp onClick={this.handleTestamentFormCollapse} className="arrowDown"></IoIosArrowUp>
                            :  <IoIosArrowDown onClick={this.handleTestamentFormCollapse} className="arrowDown"></IoIosArrowDown>
                         }
                        </h2>
                        
                        <div className="Center-collapse">
                            {/* <ion-icon name="arrow-dropdown"></ion-icon> */}
                            {/* <Button color="primary" onClick={this.handleTestamentFormCollapse} style={{ marginBottom: '1rem' }}>點擊顯示</Button> */}
                            <Collapse  isOpen={testamentFormCollapse}>
                                <Card>
                                    <CardBody>
                                    立遺囑人○○○，民國○○年○月○日生，○○市(縣)人，身分證字號○○○，茲依民法之相關規定，自書遺囑內容如下：
                                    <br />    
                                    一、不動產部份
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;(一)座落於台北市○○區○○段○○地號土地及地上建物〈門牌號碼○○○○〉○樓住宅，所有持分由(配偶、長子、長女......)
                                    ○○單獨全部繼承 / ○○繼承
                                    &nbsp;&nbsp;&nbsp;&nbsp;○○％，○○繼承○○％  / 全部繼承人平均繼承。
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;(二)座落於台北市○○區○○段○○地號土地，面積○○平方公尺，所有持分由○○單獨全部繼承/ ○○繼承○○％，○○繼承○○％ /全部繼承人平均繼
                                    &nbsp;&nbsp;&nbsp;&nbsp;承。
                                    <br />
                                    二、動產部份
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;(一)汽車○輛，牌照號碼○○○○○○，由○○單獨全部繼承。
                                    <br />    
                                    &nbsp;&nbsp;&nbsp;&nbsp;(二)○○存款，存款帳戶○○○○，金額○○，由○○單獨全部繼承 / ○○繼承○○％，○○繼承○○％ /全部繼承人平均繼承
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;(三)現金○○元，由○○單獨全部繼承 /○○繼承○○％，○○繼承○○％  /全部繼承人平均繼承
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;(四)○○股票，持股數○○，由○○單獨全部繼承 /○○繼承○○％，○○繼承○○％  /全部繼承人平均繼承
                                    <br />     
                                    三、本人指定配偶○○為遺囑執行人。
                                    <br />
                                    立遺囑人：○○○(一定要親自簽名)
                                    <br />
                                    中華民國○○年○月○日
                                    <br />
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={testamentFormChecked} 
                                        onChange={this.handleTestamentFormCheck} />
                                        本人已閱讀
                                    </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    
                    <div className="Div">
                        <h2 className="H2" id="title-3">貼心小提醒
                        {   remindCollapse == true 
                            ?  <IoIosArrowUp onClick={this.handleRemindCollapse} className="arrowDown"></IoIosArrowUp>
                            :  <IoIosArrowDown onClick={this.handleRemindCollapse} className="arrowDown"></IoIosArrowDown>
                        }
                        </h2>
                        <Collapse className="" isOpen={remindCollapse}>
        
                            <h3 className="H3">一、特留分計算方式
                            {   remindOneCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleRemindOneCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleRemindOneCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={remindOneCollapse}>
                                <Card>
                                <CardBody>
                                    <h4 className="H4">第一步：將生前特種贈與進行歸扣</h4>
                                    <p>
                                        1.意義：繼承人在繼承開始前因結婚、分居或營業而受被繼承人之贈與(即所謂特種贈與)
                                        <br />
                                        2.法律效果：將該特種贈與予以歸扣，意即，將該贈與之價額納入遺產中，並於遺產分割時由該繼承人之應繼分中扣除
                                        <br />
                                        3.具體計算方法：系統提供結婚、分居及營業三個選項，讓使用者填寫是否有為該項目之特種贈與。
                                        紀錄完成後，該特種贈與的金額應計入遺產總價額，並在該受特種贈與繼承人應繼分的計算時予以扣除。(e.x.郭台銘育有一子郭守正，一女郭曉玲，生存配偶林淑如，死後總資產1000萬，生前曾贈與郭守正結婚禮金200萬，故其遺產計算為1000萬＋200萬(特種贈與)＝1200萬，郭守正、郭曉玲、林淑如各得400萬，但郭守正的應繼分應扣除特種贈與金額，故郭守正實拿400萬－200萬＝200萬)(上述案例純屬虛構，如有雷同，算他倒楣)
                                        <br />
                                        4.簡單來講，歸扣就是先歸還特種贈與，計入遺產總額，並基於此金額計算應繼分，最後再從受贈繼承人的應繼分中扣除特種贈與的金額。【口訣：先歸再扣】
                                    </p>
                                    <h4 className="H4">第二步：特留分之計算</h4>
                                    <p>
                                        1.經過歸扣後，即可計算出「內部分配之基礎財產」，即每個繼承人的應繼財產，該「內部分配之基礎財產」的特定比例就是每個繼承人的「特留分。」
                                        <br />
                                        2.所謂的特定比例，依民法第1123條規定：
                                        <br />
                                        一、直系血親卑親屬之特留分，為其應繼分二分之一。
                                        <br />
                                        二、父母之特留分，為其應繼分二分之一。
                                        <br />
                                        三、配偶之特留分，為其應繼分二分之一。
                                        <br />
                                        四、兄弟姊妹之特留分，為其應繼分三分之一。
                                        <br />
                                        五、祖父母之特留分，為其應繼分三分之一。
                                        <br />
                                        3.以上述郭台銘案為例，郭守正、郭曉玲、林淑如的特留分均為應繼分的二分之一，則三人的特留分分別為200萬×1/2＝100萬，400萬×1/2＝200萬，400萬×2/1＝200萬，故郭台銘如欲指定遺產分配，給郭守正的金額不得低於100萬，給郭曉玲、林淑如的金額不得低於200萬。
                                        <br />
                                        4.我們的系統在使用者輸入個人資料(包括財務資訊跟家族規模)後，只須計算特留分並顯示給使用者，讓其知悉自己分配遺產金額的限制在哪裡即可，其餘的分配就讓使用者以遺囑自由決定。
                                    </p>
                                    <h4 className="H4">補充說明</h4>
                                    <p>
                                        動產跟不動產的繼承，如果沒有特別分配，就是共同繼承，但繼承人可以隨時請求分割遺產(就是分配遺產的意思)，
                                        原則上是原物分配給各共有人，比方說甲有兩台300萬的車，配偶乙跟兒子丙就一人一台，但原物分配有困難時，
                                        比如甲只有一棟1000萬的房子，可以把房子變賣，價金平分，配偶乙跟兒子丙各拿500萬。因此，系統在計算特留分時
                                        ，應將動產與不動產換算成市值列入計算(計算方式如上)，而在分配動產不動產時，盡量讓使用者直接指定由誰來繼承哪項動產或不動產，
                                        例如：長女 韓冰 單獨繼承座落於高雄市○○區○○段○○地號土地及地上建物〈門牌號碼○○○○〉○樓住宅，並且應注意不能侵害特留分，
                                        若沒有特別指定，則系統會將「應該把該動產或不動產變賣並平分價金」這件事通知給遺產管理人。
                                    </p>
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={remindOneChecked} 
                                        onChange={this.handleRemindOneChecek} />
                                        本人已閱讀
                                    </FormGroup>
                                </CardBody>
                                </Card>
                            </Collapse>

                            <h3 className="H3">二、繼承人範圍
                            {   remindTwoCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleRemindTwoCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleRemindTwoCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={remindTwoCollapse}>
                                <Card>
                                <CardBody>
                                    <h4 className="H4">繼承順位</h4>
                                    <p>
                                        一、直系血親卑親屬：&nbsp; 1.子女 &nbsp; &nbsp; 2.孫子女
                                        <br />
                                        二、父母
                                        <br />
                                        三、兄弟姊妹
                                        <br />
                                        四、祖父母
                                        <br />
                                        (若有配偶，則與確定的繼承人共同繼承)
                                    </p>
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={remindTwoChecked} 
                                        onChange={this.handleRemindTwoChecek} />
                                        本人已閱讀
                                    </FormGroup>
                                </CardBody>
                                </Card>
                            </Collapse>

                            <h3 className="H3">三、股票繼承過戶方式
                            {   remindThreeCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleRemindThreeCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleRemindThreeCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={remindThreeCollapse}>
                                <Card>
                                <CardBody>
                                    一、股東死亡由其法定繼承人向發行公司申請將被繼承人股票過戶登記為繼承人所有， 謂之繼承過戶。
                                    <br />
                                    二、繼承人應檢附之文件及其內容如下：
                                    <br />
                                    &nbsp; &nbsp;（1）繼承人之印鑑：留存於公司股票登記之印章，可不使用戶政事務所登記之印鑑。
                                    <br />
                                    &nbsp; &nbsp;（2）繼承人之身份證影本一份（正反兩面）。
                                    <br />
                                    &nbsp; &nbsp;（3）被繼承人之股票：包括死亡日前取得之股票及死亡後已領取之全部股票。
                                    <br />
                                    &nbsp; &nbsp;（4）繼承系統表：由繼承人參酌民法第一一三八條至一一四 0 條「繼承順序及代位繼承」規定填列，並各加蓋印鑑證明章；且應註明「如有偽報、遺
                                    漏或錯誤，致他人受損害時， 繼承人願負損害賠償及有關法律責任」。
                                    <br />
                                    &nbsp; &nbsp;（5）全部戶籍謄本：包括原股東死亡之除籍及所有法定繼承人之記載，若法定繼承人中 有過世者，除應附除籍謄本外，其於繼承開始前死亡而有代位
                                    繼承人，或繼承 開始後死亡有再轉繼承人者，仍請依照本繼承過辦法辦理繼承手續。
                                    <br />
                                    &nbsp; &nbsp;（6）印鑑證明：向戶政機關申請核發，所有法定繼承人均須具備正本一份，繼承人為未 成年時，應加法定代理人之印鑑證明書。
                                    <br />
                                    &nbsp; &nbsp;（7）繼承權拋棄書：
                                    <br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; 1.被繼承人於七十四年六月四日以前死亡時，若有繼承人拋棄繼承權者，應附自知悉繼承之時起二個月內之繼承權拋棄書。
                                    <br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; 2.被繼承人於七十四年六月四日以前死亡時，若有繼承人拋棄繼承權者，應附自知悉繼承之時起二個月內以書面向法院為之拋棄，再檢附法院裁定拋
                                    棄繼承權之通知書。
                                    <br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; 3.但有繼承股票以外之其他財產時，不視為拋棄繼承權，而需檢附遺產分配協議 書。
                                    <br />
                                    &nbsp; &nbsp;（8）遺產分配協議書：影本一份，但須加蓋繼承人印鑑證明書上之印鑑，在不違反法 定應繼分下，股票可集中由一人或分配數人繼承；但若有被繼承
                                    人之配偶繼承全部股票時，須檢附所有遺產分配協議書，未檢附時，子女不可全部拋棄。
                                    <br />
                                    &nbsp; &nbsp;（9）遺產繳清或免稅證明書或同意移轉證明書：正本一份，由稅捐機關核發，應向稅 捐機關申報被繼承人截至死亡日持有股數；持有股數可向本公司
                                    之股務代理機構查詢。
                                    <br />
                                    三、在中華民國境內無戶籍之國外繼承人須提具足以證明合法繼承之文件。
                                    <br />
                                    四、如尚有未領之增資股及現金股利，可向本公司股務代理部查詢。
                                    <br />
                                    五、以上之證明文件，連同全部股票及繼承人之印鑑齊全後，一併前來本公司股務代理部辦理。
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={remindThreeChecked} 
                                        onChange={this.handleRemindThreeChecek} />
                                        本人已閱讀
                                    </FormGroup>
                                </CardBody>
                                </Card>
                            </Collapse>

                            <h3 className="H3">四、自書遺囑注意事項
                            {   remindFourCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleRemindFourCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleRemindFourCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={remindFourCollapse}>
                                <Card>
                                <CardBody>
                                    <p>
                                        1. 自書遺囑者，應自書遺囑全文(即本人親筆書寫遺囑全文)，記明年、月、日，並親自簽名(不得以印章代替)
                                        <br />
                                        2.如有增減、塗改，應註明增減、塗改之處所及字數，另行簽名，且塗改方式只能劃掉原本寫錯的地方，再接續寫下正確內容，不能用立可帶、修正液或類此產品塗改。
                                        <br />
                                        3.請清楚條列繼承人、受分配人名單以及其所繼承或遺贈的遺產
                                        <br />
                                        4.除了財產分配外，還可以寫下：
                                        <br />
                                        身後事，會不會想要土葬、火化後土葬或塔葬、海葬，告別式要用什麼宗教或是不要某些民間習俗的繁瑣，國外也有生前葬禮
                                        在最後有沒有想要穿什麼樣的衣服、要不要化妝。
                                        最後可以寫一些對親友的話、感謝。
                                    </p>
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={remindFourChecked} 
                                        onChange={this.handleRemindFourChecek} />
                                        本人已閱讀
                                    </FormGroup>
                                </CardBody>
                                </Card>
                            </Collapse>
            
                            <h3 className="H3">五、遺產稅
                            {   remindFiveCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleRemindFiveCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleRemindFiveCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={remindFiveCollapse}>
                                <Card>
                                <CardBody>
                                <h4 className="H4">什麼人死亡應該辦理遺產稅申報？</h4>
                                <p>
                                    下面4種人死亡的時候，應該依照規定辦理遺產稅申報：
                                    <br />
                                    1.經常居住在國內的我國國民死亡的時候，應該將他所遺留在國內和國外的全部財產申報課徵遺產稅。
                                    <br />
                                    2.經常居住在國外的我國國民和外國人死亡的時候，只要將他所遺留在我國境內的全部財產申報課徵遺產稅。
                                    <br />
                                    3.死亡事實發生前2年內，被繼承人自願放棄中華民國國籍，在他死亡的時候仍然應 該將他所遺留在國內和國外的全部財產申報課徵遺產稅。
                                    <br />
                                    4.大陸地區的人民死亡，應該將他所遺留在臺灣地區的財產申報課徵遺產稅。
                                </p>
                                <h4 className="H4">誰是遺產稅納稅義務人？</h4>
                                <p>
                                    遺產稅的納稅義務人為：
                                    <br />
                                    1.有遺囑執行人，以遺囑執行人為納稅義務人。
                                    <br />
                                    2.沒有遺囑執行人，以繼承人及受遺贈人為納稅義務人。
                                    <br />
                                    3.沒有遺囑執行人及繼承人，以依法選定的遺產管理人為納稅義務人。（遺產及贈與稅第6條）
                                </p>
                                <h4 className="H4">遺產稅應於何時辦理申報？</h4>
                                <p>
                                    1.被繼承人死亡時留有財產者，納稅義務人應該於被繼承人死亡之日起算6個月內辦理遺產稅申報，但是如果有正當理由不能如期申報的時候，應該在法定申報期限內，準備被繼承人除戶資料、繼承人現戶戶籍資料，如果有選定遺囑執行人的，還要準備合法的遺囑影本，詳述不能如期申報的理由，向稽徵機關申請延期申報，延期申報以3個月為限，如果有不可抗力或其他特殊理由時，可由稽徵機關視實際情形核准延長期限，納稅義務人應該在核准延長期限內辦理申報。
                                    <br />
                                    2.如果被繼承人是受死亡宣告的，那麼申報期限應該是從法院判決宣告死亡那天起算。
                                    <br />
                                    3.由法院選定之遺產管理人申報者，以法院指定遺產管理人之日起算6個月內申報；其有正當理由不能於上開期間內如期申報者，應依遺產及贈與稅法第26條之規定申請延長申報期限，其已在申報期限或延期申報期限內向法院聲請辦理公示催告程序者，准予延長至公示催告期間屆滿後1個月內提出申報。
                                    <br />
                                    4.臺灣地區人民在大陸地區死亡，經大陸地區有關單位出具死亡證明，應在死亡證明取得財團法人海峽交流基金會驗證證明那一天起算6個月內辦理申報。
                                    <br />
                                    5.大陸地區人民繼承臺灣地區人民的遺產，應該在繼承開始起3年內以書面向被繼承人戶籍所在地的法院為繼承的表示，並且應依遺產及贈與稅法規定申報，如有正當理由不能在期限內申報，應該向被繼承人戶籍所在地的法院為繼承表示的當天起算2個月內，以書面向國稅局申請延期申報，但是繼承案件有大陸地區以外的納稅義務人，那麼就應先由大陸地區以外的納稅義務人辦理申報。
                                    <br />
                                    6.大陸地區繼承人於繼承表示期間屆滿前，如取得在臺戶籍成為臺灣地區人民，得以此身分依法繼承遺產。
                                    <br />
                                    7.香港居民繼承臺灣地區人民之遺產時，無臺灣地區與大陸地區人民關係條例之適用。
                                </p>
                                <h4 className="H4">遺產稅應向什麼地方申報？</h4>
                                <p>
                                    遺產稅應該向被繼承人死亡時戶籍所在地主管稽徵機關辦理申報，詳細說明如下：
                                    <br />
                                    1.戶籍在臺北市、高雄市者，向當地國稅局總局或所屬分局、稽徵所申報。
                                    <br />
                                    2.戶籍在臺北市及高雄市以外之直轄市或縣市者，向當地國稅局所屬分局、稽徵所或服務處申報。
                                    <br />
                                    3.被繼承人如果在死亡事實發生前2年內自願放棄中華民國國籍，應該要向原戶籍所在地主管稽徵機關辦理申報。例如自願放棄中華民國國籍以前的戶籍在高雄市，那麼就應該向高雄國稅局總局或所屬分局、稽徵所申報。
                                    <br />
                                    4.被繼承人如果是經常居住在國外的我國國民及外國人，那麼在我國境內的遺產，都要向臺北國稅局總局或所屬分局、稽徵所申報。
                                    <br />
                                    5.被繼承人戶籍在福建省金門縣與連江縣者，要分別向財政部北區國稅局金門稽徵所與馬祖服務處申報。
                                    <br />
                                    6.大陸地區人民死亡，遺留在臺灣地區的財產，納稅義務人應該依遺產及贈與稅法規定，向臺北國稅局總局或所屬分局、稽徵所申報。
                                </p>
                                <h4 className="H4">申報遺產稅時應檢附那些文件？</h4>
                                <p>
                                    申報遺產稅時需準備的文件如下：
                                    <br />
                                    1.填寫遺產稅申報書1份，申報書應由納稅義務人簽章（委任他人代辦者，應加蓋受任人私章）。
                                    <br />
                                    2.被繼承人死亡除戶資料(如死亡診斷證明書或載有死亡日期之戶口名簿影本等)及每一位繼承人現在的戶籍資料（身分證、戶口名簿、護照或在臺居留證影本，3擇1）各1份。
                                    <br />
                                    3.繼承人中有拋棄繼承權者，要檢附法院准予備查的公文影本，如係74年6月4日（含）以前死亡案件，應檢附拋棄書。
                                    <br />
                                    4.繼承系統表1份。
                                    <br />
                                    5.由遺囑執行人、遺產管理人申報或債權人代位申報者，應檢附遺囑或經依法選定遺產管理人之證明或債權人身分證明等，債權人代位申報者，尚須檢附經法院裁定債權確定判決及取具法院命繼承人辦理繼承登記之確定判決或准債權人代位辦理繼承登記之文件。
                                    <br />
                                    6.被繼承人為非中華民國國民或經常居住中華民國境外之中華民國國民，經國外出具之證明文件，應經我國當地駐外機構簽證。
                                    <br />
                                    7.補申報之案件，應檢附補申報部分之相關資料，並加附原核定證明文件影本（核定通知書或繳清證明或免稅證明書），或註明以前各次申報年度及收案編號。
                                    <br />
                                    8.繼承人係未在我國境內設籍之華僑或遷居國外之國民，如係委託國內人士代為申報，應檢附僑居地之我國使領館或經政府指定之合法僑團簽證委託辦理遺產稅申報及繼承登記等事項之授權書，並檢附華僑身分證明或請領遷居國外以前之戶籍資料；繼承人親自回國辦理申報者，可攜帶本人護照並檢附華僑身分證明或請領遷居國外以前之戶籍資料辦理申報。
                                    <br />
                                    9.申報土地遺產，要準備被繼承人所有權狀影本或土地登記謄本及死亡日之公告土地現值證明。
                                    <br />
                                    10.申報房屋遺產，要準備被繼承人死亡當期的房屋稅單影本或房屋所在地主管房屋稅之地方稅捐稽徵機關出具之房屋評定現值。
                                    <br />
                                    11.申報存款遺產，要檢附被繼承人死亡日之存款餘額證明書或存摺影本(含封面)或存單影本。
                                    <br />
                                    12.申報上市、上櫃及興櫃公司股票遺產，要檢附被繼承人死亡日持股餘額證明或集保證券存摺影本。
                                    <br />
                                    13.申報未上市、未上櫃且非興櫃公司股票遺產，要檢附被繼承人死亡日持股餘額證明及該公司在被繼承人死亡日之資產負債表、損益表、股東往來科目明細表。
                                    <br />
                                    14.申報信託遺產或信託利益之權利未受領部分遺產，應檢附遺囑或信託契約，或其他證明文件。
                                    <br />
                                    15.再轉繼承案件，主張不計入遺產總額課稅或依比率扣除者，應檢附稽徵機關發給之遺產稅繳清證明書影本。
                                    <br />
                                    16.申報債務扣除，應檢附債權人出具迄被繼承人死亡日尚未清償之證明文件。
                                    <br />
                                    17.主張扣除應納未納稅捐，應檢附相關稅捐之繳款書影本。
                                    <br />
                                    18.申報繼續經營農業生產農地扣除額，應檢附農業用地作農業使用證明書，或農業發展條例第38條之1土地作農業使用證明書及經都市計畫主管機關認定該土地未依變更後計畫用途使用之證明、土地使用分區證明、土地登記謄本等。
                                    <br />
                                    19.主張公共設施保留地扣除者，應檢送土地使用分區證明、土地登記謄本（需註明編定日期及是否為公共設施保留地）。
                                    <br />
                                    20.主張民法第1030條之1剩餘財產差額分配請求權扣除者，應檢附載有結婚登記日期之戶籍資料、夫妻雙方財產及債務明細表、請求權計算表及相關證明文件。
                                    <br />
                                    21.遺產捐贈與政府、公有事業單位及已依法登記之財團法人，主張不計入遺產總額課稅者，應檢附受贈人受贈同意書。如受贈單位為依法登記之財團法人，應另檢附法人登記證書、組織章程、董監事名冊、受贈單位受贈時經稅捐稽徵機關核定近一年免納所得稅之證明文件及經業務主管機關證明依其創設目的經營業務，辦理具有成績之證明文件。
                                    <br />
                                    22.其他相關文件或填寫內容，請參考國稅局申報遺產稅應檢附基本資料一覽表。
                                    <br />
                                    資料來源：<a href="https://www.etax.nat.gov.tw/etwmain/web/ETW118W/VIEW/495?tagCode=&page=1" target="_blank">
                                    https://www.etax.nat.gov.tw/etwmain/web/ETW118W/VIEW/495?tagCode=&page=1</a> 
                                </p>
                                    <FormGroup className = 'MarginLeft' inline>
                                        <Input type="checkbox" checked={remindFiveChecked} 
                                        onChange={this.handleRemindFiveChecek} />
                                        本人已閱讀
                                    </FormGroup>
                                </CardBody>
                                </Card>
                            </Collapse>

                        </Collapse>
                    </div>
                    
                    <div className="Div"> 
                        <h2 className="H2" id="title-4">常見問題
                        {   mistakeCollapse == true 
                            ?  <IoIosArrowUp onClick={this.handleMistakeCollapse} className="arrowDown"></IoIosArrowUp>
                            :  <IoIosArrowDown onClick={this.handleMistakeCollapse} className="arrowDown"></IoIosArrowDown>
                        }
                        </h2>
                        <Collapse className="" isOpen={mistakeCollapse}>

                            <h3 className="H3">一、無法協議分割
                            {   mistakeOneCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleMistakeOneCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleMistakeOneCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={mistakeOneCollapse}>
                                <Card>
                                <CardBody>
                                    {/* <p>
                                    一、<a href="https://www.youtube.com/watch?v=8tMB2y3XGtI">案件字號</a>
                                    </p>
                                    <FormGroup className = 'MarginLeft' inline> */}
                                    <ListGroup>
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lulLg0" action>103年度家上字第59號</ListGroupItem>
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lJNLfv" action>102年度家上字第49號(再上訴)</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lGmWJ3" action>102年度重家上字第5號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2kbDW9Z" action>101年度家上易字第10號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2kbFell" action>101年度重家上更(一)字第1號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2k879m9" action>100年度家上易字第6號</ListGroupItem>  
                                    </ListGroup>
                                </CardBody>
                                </Card>
                            </Collapse>
                            
                            <h3 className="H3">二、違反遺囑要件
                            {   mistakeTwoCollapse == true 
                                ?  <IoIosArrowUp onClick={this.handleMistakeTwoCollapse} className="arrowDown"></IoIosArrowUp>
                                :  <IoIosArrowDown onClick={this.handleMistakeTwoCollapse} className="arrowDown"></IoIosArrowDown>
                            }</h3>
                            <Collapse className="Center-collapse" isOpen={mistakeTwoCollapse}>
                                <Card>
                                <CardBody>
                                    <ListGroup>
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2llyfWR" action>104年度重家上字第38號</ListGroupItem>
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lExdWa" action>102年度重家上字第57號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lEzFMm" action>101年度家上字第46號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2kaxAHU" action>100年度家上字第17號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lolPxN" action>99年度家上易字第19號</ListGroupItem> 
                                        <ListGroupItem tag="a" target="_blank" href="http://bit.ly/2lGG61s" action>99年度家上字第32號</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                                </Card>
                            </Collapse>
                        </Collapse>
                        
                    </div>
                    
                    
                    
                    <label id="send" >
                        <input type="file" onChange={this.handleTestamentFile}/>
                            <p className="Center-Text mt-sm-2">上傳<br />遺囑</p>
                    </label>
                </div>
            // </div>
        );
    }

    handleHeritageWarning() {
        const {heritageNoGiven, heritageWithWarrant} = this.props;
        let dispalyWarning = '', flag = false;

        if(heritageNoGiven < 0) {
            dispalyWarning = "           --" + "您的遺產總額為負債，請提醒您的法定繼承人辦理拋棄繼承。"
            flag = true;
        } else if(heritageWithWarrant < 0) {
            dispalyWarning = "           --" + "您的遺產總額在償還完所有做保金額後，可能為負債。請提醒您的法定繼承人辦理限定繼承、清算程序。"
            flag = true;
        } else if(heritageNoGiven !== heritageWithWarrant) {
            dispalyWarning = "           --" + "您的遺產裡包含作保資訊，請提醒您的法定繼承人辦理清算程序。";
            flag = true;
        } else {
            dispalyWarning = ""
            flag = false;
        }
        // dispalyWarning += "           --";
        // dispalyWarning += "您的遺產總額為負債，請提醒您的法定繼承人辦理拋棄繼承。";
        // dispalyWarning += "\n";
        // dispalyWarning += "           --";
        // dispalyWarning += "您的遺產總額在償還完所有做保金額後，可能為負債，請提醒您的法定繼承人辦理限定繼承、清算程序。";
        // dispalyWarning += "\n";
        // dispalyWarning += "           --";
        // dispalyWarning += "您的遺產裡包含作保資訊，請提醒您的法定繼承人辦理清算程序。";
        // dispalyWarning += "\n";
        
        console.warn("dispalyWarning", dispalyWarning);
        console.warn("flag", flag);
        this.setState({
            heritageWarning: dispalyWarning,
            waringFlag: flag,
        });
    }

    calculateLegitime() {
        const {heirLevel} = this.props;
        console.log("Will Calculate!~!~!");
        // debugger;
        if(heirLevel === level.Noman) {
            console.log("No heir!!!")
        } else if(heirLevel === level.Mate) {
            this.calculateLegitimeMate();
        } else if(heirLevel === level.Child) {
            this.calculateLegitimeChild();
        } else if(heirLevel === level.GrandChild){
            this.calculateLegitimeGrandChild();
        } else if(heirLevel === level.Parent) {
            this.calculateLegitimeParent();            
        } else if(heirLevel === level.Sibling) {
            this.calculateLegitimeSibling();
        } else if(heirLevel === level.Ancestor) {
            this.calculateLegitimeAncestor();
        }
        // setTimeout(() => {}, 1000);
        this.displayLegitimeMate();
        this.displayLegitimeChild();
        this.displayLegitimeGrandChild();
        this.displayLegitimeParent();
        this.displayLegitimeSibling();
        this.displayLegitimeAncestor();
    }
    calculateLegitimeMate() {
        const {heritage, heir} = this.props;
        
        let mateSuccessionalPortion = heritage;
        let newMateLegitime = mateSuccessionalPortion / 2;

        heir[0].OnLegitime(heir[0].id, newMateLegitime);
        
        this.setState({
            mateLegitime: Number(newMateLegitime),
            // mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
        });
    }
    displayLegitimeMate() {
        const {heritage, heirLevel, heir, mateChecked} = this.props;
        const {mateLegitime} = this.state;
        let dispalyMate = ``;
        if(heirLevel < 0 || !mateChecked) {
            dispalyMate = `${displayNumber}.配偶：${mateLegitime}元`
        } else {
            dispalyMate = `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[0].total)} : 配偶 ${heir[0].seniority} ${heir[0].legitime}元`
        }
        
        displayNumber++;
        this.setState({
            mateDisplay: dispalyMate,
        });
    }
    
    calculateLegitimeChild() {
        console.log("calculateLegitimeChild Will Calculate!~!~!");
        // debugger;
        const {heir, heritage, mateChecked, childNum, deadHeir} = this.props;
        let mateSuccessionalPortion = 0, newMateLegitime = 0;
        let childSuccessionalPortion = 0, newChildLegitime = 0;
        // let totalNum = (mateChecked) ? (1+childNum+deadHeir.length) : (childNum+deadHeir.length);
        let totalNum = heir.length;

        
        // if(deadHeir.length !== 0) {
        //     totalNum += deadHeir.length;
        // }
        
        mateSuccessionalPortion = (mateChecked) ? heritage / totalNum : 0;
        childSuccessionalPortion = heritage / totalNum;

        newMateLegitime = mateSuccessionalPortion / 2;
        newChildLegitime = (childNum !== 0) ? childSuccessionalPortion / 2 : 0;

        // for(let i = 0; i < deadHeir.length; i++) {
        //     deadHeir[i].OnLegitime(deadHeir[i].id, newChildLegitime);
        // }
        let tmp = 0;

        while(tmp < (totalNum)) {
            console.warn("Tmp", heir[tmp]);
            if(heir[tmp].relatives === "配偶") {
                heir[tmp].OnLegitime(heir[tmp].id, newMateLegitime);
            } else if(heir[tmp].relatives === "兒女") {
                heir[tmp].OnLegitime(heir[tmp].id, newChildLegitime);
            } else if(heir[tmp].relatives === "已歿兒女") {
                heir[tmp].OnLegitime(heir[tmp].id, newChildLegitime);
            }
            else {
                console.error("CalculateLegitimeChild Err");
            }
            tmp++;     
        }
        this.setState({
            mateLegitime: Number(newMateLegitime),
            childLegitime: Number(newChildLegitime),
            grandChildLegitime: Number(0),
            deadHeirLegitime: Number(newChildLegitime),
            // mateLegitime: Number(0),
            // childLegitime: Number(0),
            // grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
        });
    }
    displayLegitimeChild() {
        const {heir, heirLevel, heritage, mateChecked, childNum, deadHeir} = this.props;
        const {mateLegitime, childLegitime, grandChildLegitime, deadHeirLegitime} = this.state;
        
        // let dispalyMate = '';
        let displayChild = '';
        let tmp = 0;
        // let totalNum = (mateChecked) ? (1+childNum) : (childNum);
        let totalNum = heir.length;
        if(heirLevel !== level.Child) {
            displayChild = `${displayNumber}.子女：各${childLegitime}元/人`;
            displayNumber++;
            // displayGrandChild = `${displayNumber}.孫子女：各${grandChildLegitime}元/人`;
            // displayNumber++;
        } else {
            if(childNum === 0) {
                displayChild = `${displayNumber}.子女：各${childLegitime}元/人`;
                displayNumber++;
            }
            
            while(tmp < totalNum) {
                console.warn("Tmp: ", tmp);
                if(heir[tmp].relatives === "配偶") {
                    displayNumber--;
                } else if(heir[tmp].relatives === "兒女") {
                    displayChild += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 直系血親卑親屬 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    
                    if(tmp !== (totalNum-1)) {
                        displayChild += "\n";
                    } 
                } else if(heir[tmp].relatives === "已歿兒女") {
                    displayChild += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 已歿兒女 ${heir[tmp].seniority} ${heir[tmp].legitime}元 (由該名已歿子女的直系卑親屬均分特留分)`;
                    
                    if(tmp !== (totalNum-1)) {
                        displayChild += "\n";
                    } 
                }
                else {
                    console.error("displayLegitimeChild Err");
                }
                tmp++;
                displayNumber++;
            }
            // console.warn("deadHeirLegitime", deadHeirLegitime);
            // debugger;
            // if(deadHeir.length !== 0) {
            //     displayChild += "\n"
            //     for(let i = 0; i < deadHeir.length; i++) {
            //         displayChild += `${displayNumber}.法定繼承人${nzhhk.encodeS(deadHeir[i].total)} : 直系血親卑親屬 第${deadHeir[i].orderDead}已歿子女 ${deadHeir[i].legitime}元 (由該名已歿子女的直系卑親屬均分特留分)`;
            //         if(i !== deadHeir.length-1) {
            //             displayChild += "\n";
            //         }
            //         displayNumber++;
            //     }
            // }
        }

        this.setState({
            childDisplay: displayChild,
            // grandChildDisplay: displayGrandChild,
        });
    }
    calculateLegitimeGrandChild() {
        console.log("calculateLegitimeChild Will Calculate!~!~!");
        // debugger;
        const {heir, heritage, mateChecked, childNum, grandChildNum} = this.props;
        let mateSuccessionalPortion = 0, newMateLegitime = 0;
        let grandChildSuccessionalPortion = 0, newGrandChildLegitime = 0;
        let totalNum = (mateChecked) ? (1+grandChildNum) : (grandChildNum);


        mateSuccessionalPortion = (mateChecked) ? heritage / totalNum : 0;
        grandChildSuccessionalPortion = heritage / totalNum;

        // if(mateChecked) {
        //     mateSuccessionalPortion = heritage / (1+childNum+grandChildNum);
        //     allChildSuccessionalPortion = heritage / (1+childNum+grandChildNum);
        // } else {
        //     allChildSuccessionalPortion = heritage / (childNum+grandChildNum);
        // }

        newMateLegitime = mateSuccessionalPortion / 2;
        newGrandChildLegitime = (grandChildNum !== 0) ? grandChildSuccessionalPortion / 2 : 0;

        let tmp = 0;

        while(tmp < totalNum) {
            console.warn("Tmp", heir[tmp]);
            if(heir[tmp].relatives === "配偶") {
                heir[tmp].OnLegitime(heir[tmp].id, newMateLegitime);
            } 
            // else if(heir[tmp].relatives === "兒女") {
            //     heir[tmp].OnLegitime(heir[tmp].id, newChildLegitime);
            // } 
            else if(heir[tmp].relatives === "孫兒女") {
                heir[tmp].OnLegitime(heir[tmp].id, newGrandChildLegitime);
            } else {
                console.error("CalculateLegitimeGrandChild Err");
            }
            tmp++;     
        }
        this.setState({
            mateLegitime: Number(newMateLegitime),
            childLegitime: Number(0),
            grandChildLegitime: Number(newGrandChildLegitime),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
        })
    }
    displayLegitimeGrandChild() {
        const {heir, heirLevel, heritage, mateChecked, childNum, grandChildNum} = this.props;
        const {mateLegitime, childLegitime, grandChildLegitime} = this.state;
        // let dispalyMate = '';
        let displayGrandChild = '';
        let tmp = 0;
        let totalNum = (mateChecked) ? (1+grandChildNum) : (grandChildNum);
        if(heirLevel !== level.GrandChild) {
            // displayChild = `${displayNumber}.子女：各${childLegitime}元/人`;
            // displayNumber++;
            displayGrandChild = `${displayNumber}.孫子女：各${grandChildLegitime}元/人`;
            displayNumber++;
        } else {
            // if(childNum === 0) {
            //     displayChild = `${displayNumber}.子女：各${childLegitime}元/人`;
            //     displayNumber++;
            // }
            // if(grandChildNum === 0) {
            //     displayGrandChild = `${displayNumber}.孫子女：各${grandChildLegitime}元/人`;
            //     displayNumber++;
            // }
            
            while(tmp < totalNum) {
                console.warn("Tmp: ", tmp);
                if(heir[tmp].relatives === "配偶") {
                    displayNumber--;
                } 
                // else if(heir[tmp].relatives === "兒女") {
                //     displayChild += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 直系血親卑親屬 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    
                //     if(tmp !== (totalNum-grandChildNum-1)) {
                //         displayChild += "\n";
                //     } 
                // } 
                else if(heir[tmp].relatives === "孫兒女") {
                    displayGrandChild += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 直系血親卑親屬 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    
                    if(tmp !== (totalNum-1)) {
                        displayGrandChild += "\n";
                    }
                } else {
                    console.error("displayLegitimeGrandChild Err");
                }
                tmp++;
                displayNumber++;
            }
            
        }

        this.setState({
            // childDisplay: displayChild,
            grandChildDisplay: displayGrandChild,
        });

    }
    calculateLegitimeParent() {
        const {heir, heritage, mateChecked, fatherChecked, motherChecked} = this.props;
        let parentNum = (fatherChecked && motherChecked) ? Number(2) : Number(1);
        let mateSuccessionalPortion = 0, newMateLegitime = 0;
        let parentSuccessionalPortion = 0, newParentLegitime = 0;

        if(mateChecked) {
            mateSuccessionalPortion = heritage / 2;
            parentSuccessionalPortion = heritage / (2*parentNum);
        } else {
            parentSuccessionalPortion = heritage / parentNum;
        }

        newMateLegitime = mateSuccessionalPortion / 2;
        newParentLegitime = parentSuccessionalPortion / 2;

        let tmp = 0;
        let totalNum = (mateChecked) ? (1+parentNum) : (parentNum);
        while(tmp < totalNum) {
            if(heir[tmp].relatives === "配偶") {
                heir[tmp].OnLegitime(heir[tmp].id, newMateLegitime);
            } else if(heir[tmp].relatives === "父母") {
                heir[tmp].OnLegitime(heir[tmp].id, newParentLegitime);
            } else {
                console.error("calculateLegitimeParent Err");
            }
            tmp++;     
        }
        
        this.setState({
            mateLegitime: Number(newMateLegitime),
            parentLegitime: Number(newParentLegitime),
            // mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            // parentLegitime: Number(0),
            siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
        })
    }
    displayLegitimeParent() {
        const {heir, heritage, heirLevel, mateChecked, fatherChecked, motherChecked} = this.props;
        const {mateLegitime, parentLegitime} = this.state;
        // let dispalyMate = `${displayNumber}.配偶：${mateLegitime}元`; 
        let displayParent = '';
        let parentNum = (fatherChecked && motherChecked) ? Number(2) : Number(1);
        let tmp = 0;
        let totalNum = (mateChecked) ? (1+parentNum) : (parentNum);

        if(heirLevel !== level.Parent){
            displayParent = `${displayNumber}.父母：各${parentLegitime}元/人`
            displayNumber++;
        } else {
            while(tmp < totalNum) {
                if(heir[tmp].relatives === "配偶") {
                    // dispalyMate = `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 配偶 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    displayNumber--;
                } else if(heir[tmp].relatives === "父母") {
                    displayParent += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 父母 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    if(tmp !== (totalNum-1)) {
                        displayParent += "\n";
                    } 
                } else {
                    console.error("displayLegitimeParent Err");
                }
                displayNumber++;
                tmp++;
            }
        }
        this.setState({
            // mateDisplay: dispalyMate,
            // childDisplay: '',
            // grandChildDisplay: '',
            parentDisplay: displayParent,
            // siblingDisplay: '',
            // ancestorDisplay: '',
            // grandFatherDisplay: '',
            // grandMotherDisplay: '',
        });
    }

    calculateLegitimeSibling() {
        const {heir, heritage, mateChecked, siblingNum} = this.props;
        let mateSuccessionalPortion = 0, newMateLegitime = 0;
        let siblingSuccessionalPortion = 0, newSiblingLegitime = 0;

        if(mateChecked) {
            mateSuccessionalPortion = heritage / 2;
            siblingSuccessionalPortion = heritage / (2*siblingNum);
        } else {
            siblingSuccessionalPortion = heritage / siblingNum;
        }

        newMateLegitime = mateSuccessionalPortion / 2;
        newSiblingLegitime = siblingSuccessionalPortion / 3;

        let tmp = 0;
        let totalNum = (mateChecked) ? (1+siblingNum) : (siblingNum);
        while(tmp < totalNum) {
            if(heir[tmp].relatives === "配偶") {
                heir[tmp].OnLegitime(heir[tmp].id, newMateLegitime);
            } else if(heir[tmp].relatives === "兄弟姊妹") {
                heir[tmp].OnLegitime(heir[tmp].id, newSiblingLegitime);
            } else {
                console.error("calculateLegitimeSibling Err");
            }
            tmp++;     
        }
        this.setState({
            mateLegitime: Number(newMateLegitime),
            siblingLegitime: Number(newSiblingLegitime),
            // mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            // siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
        })
    }
    displayLegitimeSibling() {
        const {heir, heritage, heirLevel, mateChecked, siblingNum} = this.props;
        const {mateLegitime, siblingLegitime} = this.state;
        // let dispalyMate = `${displayNumber}.配偶：${mateLegitime}元`;
        let displaySibling = '';
        let tmp = 0;
        let totalNum = (mateChecked) ? (1+siblingNum) : (siblingNum);

        if(heirLevel !== level.Sibling){
            displaySibling = `${displayNumber}.兄弟姊妹：各${siblingLegitime}元/人`;
            displayNumber++;
        } else {
            while(tmp < totalNum) {
                if(heir[tmp].relatives === "配偶") {
                    // dispalyMate = `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 配偶 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                } else if(heir[tmp].relatives === "兄弟姊妹") {
                    displaySibling += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 兄弟姊妹 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    if(tmp !== (totalNum-1)) {
                        displaySibling += "\n";
                    } 
                } else {
                    console.error("displayLegitimeSibling Err");
                }
                displayNumber++;
                tmp++;
            }
        }
        this.setState({
            // mateDisplay: dispalyMate,
            // childDisplay: '',
            // grandChildDisplay: '',
            // parentDisplay: '',
            siblingDisplay: displaySibling,
            // ancestorDisplay: '',
            // grandFatherDisplay: '',
            // grandMotherDisplay: '',
        });
    }

    calculateLegitimeAncestor(){
        const {heir, heritage, mateChecked, grandFatherNum, grandMotherNum} = this.props;
        const {mateLegitime} = this.state;
        let ancestorNum = grandFatherNum + grandMotherNum;
        let mateSuccessionalPortion = 0, newMateLegitime = 0;
        let allAncestorSuccessionalPortion = 0, newGrandFatherLegitime = 0, newGrandMotherLegitime = 0;

        if(mateChecked) {
            mateSuccessionalPortion = heritage*2 / 3;
            allAncestorSuccessionalPortion = heritage / (3*ancestorNum);
        } else {
            allAncestorSuccessionalPortion = heritage / ancestorNum;
        }

        let tmp = 0;
        let totalNum = (mateChecked) ? (1+ancestorNum) : (ancestorNum);
        newMateLegitime = mateSuccessionalPortion / 2;
        newGrandFatherLegitime = (grandFatherNum !== 0) ? allAncestorSuccessionalPortion / 3 : 0;
        newGrandMotherLegitime = (grandMotherNum !== 0) ? allAncestorSuccessionalPortion / 3 : 0;

        while(tmp < totalNum) {
            if(heir[tmp].relatives === "配偶") {
                heir[tmp].OnLegitime(heir[tmp].id, newMateLegitime);
            } else if(heir[tmp].relatives === "祖父") {
                heir[tmp].OnLegitime(heir[tmp].id, newGrandFatherLegitime);
            } else if(heir[tmp].relatives === "祖母") {
                heir[tmp].OnLegitime(heir[tmp].id, newGrandMotherLegitime);
            } else {
                console.error("calculateLegitimeAncestor Err");
            }
            tmp++;     
        }
        

        
        this.setState({
            mateLegitime: Number(newMateLegitime),
            grandFatherLegitime: Number(newGrandFatherLegitime),
            grandMotherLegitime: Number(newGrandMotherLegitime),
            // mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            // grandFatherLegitime: Number(0),
            // grandMotherLegitime: Number(0),
        })
    }
    displayLegitimeAncestor() {
        const {heir, heritage, heirLevel, mateChecked, grandFatherNum, grandMotherNum} = this.props;
        const {grandFatherLegitime, grandMotherLegitime} = this.state;
        let ancestorNum = grandFatherNum + grandMotherNum;
        // let dispalyMate = `${displayNumber}.配偶：${mateLegitime}元`;
        let displayGrandFather = '', displayGrandMother = '';
        let tmp = 0;
        let totalNum = (mateChecked) ? (1+ancestorNum) : (ancestorNum);

        if(heirLevel !== level.Ancestor){
            displayGrandFather = `${displayNumber}.祖父：各${grandFatherLegitime}元/人`;
            displayNumber++;
            displayGrandMother = `${displayNumber}.祖母：各${grandMotherLegitime}元/人`;
            displayNumber++;
        } else {

            if(grandFatherNum === 0) {
                displayGrandFather = `${displayNumber}.祖父：各${grandFatherLegitime}元/人`;
                displayNumber++;
            }

            while(tmp < totalNum) {
                if(heir[tmp].relatives === "配偶") {
                    // dispalyMate = `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 配偶 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    displayNumber--;
                } else if(heir[tmp].relatives === "祖父") {
                    displayGrandFather += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 祖父 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    if(tmp !== (totalNum-grandMotherNum-1)) {
                        displayGrandFather += "\n";
                    } 
                } else if(heir[tmp].relatives === "祖母") {
                    displayGrandMother += `${displayNumber}.法定繼承人${nzhhk.encodeS(heir[tmp].total)} : 祖母 ${heir[tmp].seniority} ${heir[tmp].legitime}元`;
                    if(tmp !== (totalNum-1)) {
                        displayGrandMother += "\n";
                    } 
                } else {
                    console.error("displayLegitimeAncestor Err");
                }
                tmp++;
                displayNumber++;
            }

            if(grandMotherNum === 0) {
                displayGrandMother = `${displayNumber}.祖父：各${grandMotherLegitime}元/人`;
                displayNumber++;
            }
        }

        this.setState({
            // mateDisplay: dispalyMate,
            // childDisplay: '',
            // grandChildDisplay: '',
            // parentDisplay: '',
            // siblingDisplay: '',
            // ancestorDisplay: '',
            grandFatherDisplay: displayGrandFather,
            grandMotherDisplay: displayGrandMother,
        });
    }

    handleTestamentFormCollapse() {
        this.setState((prevState, props) => ({
            testamentFormCollapse: !prevState.testamentFormCollapse
        }));
    }
    handleTestamentFormCheck() {
        this.setState((prevState, props) => ({
            testamentFormChecked: !prevState.testamentFormChecked
        }));
    }


    handleRemindCollapse() {
        this.setState((prevState, props) => ({
            remindCollapse: !prevState.remindCollapse
        }));
    }

    handleRemindOneCollapse() {
        this.setState((prevState, props) => ({
            remindOneCollapse: !prevState.remindOneCollapse
        }));
    }
    handleRemindOneChecek() {
        this.setState((prevState, props) => ({
            remindOneChecked: !prevState.remindOneChecked
        }));
    }

    handleRemindTwoCollapse() {
        this.setState((prevState, props) => ({
            remindTwoCollapse: !prevState.remindTwoCollapse
        }));
    }
    handleRemindTwoChecek() {
        this.setState((prevState, props) => ({
            remindTwoChecked: !prevState.remindTwoChecked
        }));
    }

    handleRemindThreeCollapse() {
        this.setState((prevState, props) => ({
            remindThreeCollapse: !prevState.remindThreeCollapse
        }));
    }
    handleRemindThreeChecek() {
        this.setState((prevState, props) => ({
            remindThreeChecked: !prevState.remindThreeChecked
        }));
    }
    
    handleRemindFourCollapse() {
        this.setState((prevState, props) => ({
            remindFourCollapse: !prevState.remindFourCollapse
        }));
    }
    handleRemindFourChecek() {
        this.setState((prevState, props) => ({
            remindFourChecked: !prevState.remindFourChecked
        }));
    }
    
    handleRemindFiveCollapse() {
        this.setState((prevState, props) => ({
            remindFiveCollapse: !prevState.remindFiveCollapse
        }));
    }
    handleRemindFiveChecek() {
        this.setState((prevState, props) => ({
            remindFiveChecked: !prevState.remindFiveChecked
        }));
    }

    handleMistakeCollapse() {
        this.setState((prevState, props) => ({
            mistakeCollapse: !prevState.mistakeCollapse
        }));
    }

    handleMistakeOneCollapse() {
        this.setState((prevState, props) => ({
            mistakeOneCollapse: !prevState.mistakeOneCollapse
        }));
    }
    handleMistakeOneChecek() {
        this.setState((prevState, props) => ({
            mistakeOneChecked: !prevState.mistakeOneChecked
        }));
    }
    handleMistakeTwoCollapse() {
        this.setState((prevState, props) => ({
            mistakeTwoCollapse: !prevState.mistakeTwoCollapse
        }));
    }

    handleTestamentFile(e) {
        e.preventDefault();
        let data = new FormData();
        console.warn("files", e.target.files[0]);
        data.append('filename', this.props.personalID);
        data.append('pdf', e.target.files[0]);
        console.warn("data", data);
        this.setState((prevState, props) => ({
            testament: data
        }), () => {
            request.post(`${testamentBaseUrl}/TestamentUpload`).send(this.state.testament)
            .end((err, res) => {
                if(err) {
                    console.error(err);
                }
                // name1 = res.text;
                return res;
            })
        });
        setTimeout(() => {this.handleCreatePerson(this.props)}, 2000);
    }
    handleTestamentFileUpload(e) {
        e.preventDefault();
        const {testament} = this.state;
        var name1 = '', name2 = '';
        request.post(`${testamentBaseUrl}/TestamentUpload`).send(testament)
        .end((err, res) => {
            if(err) {
                console.error(err);
            }
            // name1 = res.text;
            return res;
        })

        setTimeout(() => {}, 1000);
    }

    handleList() {
        let searchText='';
        listPersonFromApi(searchText).then(persons => {
            console.warn("persons", persons);
            this.setState(() => {
                persons: persons
            });
        }).catch(err => {
            console.error('Error listing posts', err);
        });   
    }

    handleCreatePerson() {
        // let personID = String("ABCD");
        // let heritage = Number(500);
        createPersonFromApi(this.props).then(persons =>{
            this.handleList();
        }).catch(err => {
            console.error('Error creating posts', err);
        });   
    }
}

// export default connect((state) => {
//     return {
//         ...state.weather,
//         unit: state.unit
//     };
// })(SecondPage);
