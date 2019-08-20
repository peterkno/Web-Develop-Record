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


import './ThirdPage.css';

export default class ThirdPage extends React.Component {
    static propTypes = {
        heritage: PropTypes.number
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
        const {heritage} = this.props;
        return (
            <div>
                <div className='third-page'>
                    <h1>計算結果</h1>
                    <p>遺產總額：800元</p>
                    <p>特留分</p>
                    <p>
                        {/* <!--特留分我想說全部列出來(雖然通常只會有配偶+最先繼承順序會有特留分)一是比較簡單，二是使用者可以更一目了然--> */}
                        1.配偶：200元
                        <br />
                        2.子女：各200元/人
                        <br />
                        3.孫子女：各0元/人
                        <br />
                        4.父母：各0元/人
                        <br />
                        5.兄弟姊妹：各0元/人
                        <br />
                        6.祖父：各0元/人
                        <br />
                        7.祖母：各0元/人
                        <br />
                    </p>

                    <h1>遺囑格式</h1>
                    <button type="button">點擊顯示</button>
                    <p>
                        立遺囑人○○○，民國○○年○月○日生，○○市(縣)人，身分證字號○○○，茲依民法之相關規定，自書遺囑內容如下：
                        <br />    
                        一、不動產部份
                        <br />
                        (一)座落於台北市○○區○○段○○地號土地及地上建物〈門牌號碼○○○○〉○樓住宅，所有持分由配偶○○單獨全部繼承。
                        <br />
                        (二)座落於台北市○○區○○段○○地號土地，面積○○平方公尺，所有持分由長子○○〈民國○○年○月○日生，台北市人，身分證字號○○○〉單獨全部繼承。
                        <br />
                        二、動產部份
                        (一)本人所有股票及名下汽車由長女○○〈民國○○年○月○日生，台北市人，身分證字號○○○〉單獨全部繼承。
                        <br />    
                        (二)銀行存款及其他一切財產，由全體繼承人平均繼承。
                        <br />     
                        三、本人指定配偶○○為遺囑執行人。
                        <br />
                        立遺囑人：○○○(一定要親自簽名)
                        <br />
                        中華民國○○年○月○日
                        <br />
                    </p>

                    <h1>貼心小提醒</h1>
                    <button type="button">點擊顯示</button>
                    <p>
                        <br />
                    </p>
                    <button type="button">上傳遺囑</button>
                </div>

                <br />
                
                {/* <div>
                    <Link to="/">
                        <button type="button">
                            首頁
                        </button>
                    </Link>
                    <Link to="/second-page">
                        <button type="button">
                            填寫資料
                        </button>
                    </Link>
                    <Link to="/fourth-page">
                        <button type="button">
                            寄出遺囑
                        </button>
                    </Link>
                </div> */}
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
