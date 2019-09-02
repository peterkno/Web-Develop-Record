import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Input,
    Form,
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

import './AgreementPage.css';

const testamentBaseUrl = 'http://localhost:9487/api';
const nzhhk = require("nzh/hk"); //繁体中文
let displayNumber = 1;

export default class AgreementPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        heritage: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            
        };
        
        
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.CloseNavbar();
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        const {} = this.props;
        const { } = this.state;
        return (
            <div className='agreement-page'>
                <div className='content'>
                    <h1 className='H1'>個人資料蒐集聲明及授權同意書</h1>
                    <p className="P">
                        歡迎使用遺囑管家系統，本系統所提供之部分服務，需要您提供個人資料，為遵守個人資料保護法規定，
                        在您提供個人資料前，依法告知下列事項：
                    </p>
                    <h4 className="H4">一、蒐集單位：本公司</h4>

                    <h4 className="H4">二、蒐集目的：提供遺產規劃、寄送遺囑等相關服務</h4>

                    <h4 className="H4">三、個人資料類別：</h4>
                    <p className="P">
                        1.識別類個人資料（含中英姓名、身分證字號、出生年月日、連絡電話、通訊地址、家族人數）。
                        <br />
                        2.財務細節類（例如：銀行帳號、戶名或與本蒐集目的相關之財務資訊）等。本系統將依個人資料保護法及相關法令之規定下，
                        依隱私權保護政策，蒐集、處理及合理利用您的個人資料。
                    </p>

                    <h4 className="H4">四、依個人資料保護法，您得行使之權利及方式</h4>
                    <p className="P">
                        1.查詢或請求閱覽其個人資料。<br />
                        2.請求製給個人資料之複製本。<br />
                        3.請求補充或更正個人資料。<br />
                        4.請求停止蒐集、處理或利用其個人資料。<br />
                        5.請求刪除個人資料。
                    </p>

                    <h4 className="H4">五、若不提供或提供不正確（含不完整）之個人資料，本系統將無法為您提供遺產規劃、寄送遺囑等相關服務。</h4>

                    <h4 className="H4">六、以上個人資料僅限於使用本系統提供的服務所必要之範圍內。您的個資將採取安全妥適之保護措施與銷毀程序，
                    非經您同意或法律規定，不會揭露於第三者(承製廠商除外)或散佈。</h4>
                </div>

                <div className="buttons">
                    <Button type="button" tag={Link} to='/second-page'>
                        同意
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="button" tag={Link} to='/'>
                        不同意
                    </Button>
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
