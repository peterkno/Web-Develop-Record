import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Input,
    Button,
    Collapse,
    Card,
    CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import axios, {post} from 'axios';
import request from 'superagent';
import {
    listPerson as listPersonFromApi,
    createPerson as createPersonFromApi,
} from 'api/persons.js';


import './ThirdPage.css';

const testamentBaseUrl = 'http://localhost:9487/api';

export default class ThirdPage extends React.Component {
    static propTypes = {
        OpenNavbar: PropTypes.func,
        heritage: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            mateLegitime: Number(0),
            childLegitime: Number(0),
            grandChildLegitime: Number(0),
            parentLegitime: Number(0),
            siblingLegitime: Number(0),
            grandFatherLegitime: Number(0),
            grandMotherLegitime: Number(0),
            testamentFormCollapse: false,
            testamentFormChecked: false,
            remindCollapse: false,
            remindChecked: false,
            testament: new FormData()
        };

        this.calculateLegitime = this.calculateLegitime.bind(this);
        this.handleTestamentFormCollapse = this.handleTestamentFormCollapse.bind(this);
        this.handleTestamentFormCheck = this.handleTestamentFormCheck.bind(this);
        this.handleRemindCollapse = this.handleRemindCollapse.bind(this);
        this.handleRemindCheck = this.handleRemindCheck.bind(this);
        this.handleTestamentFile = this.handleTestamentFile.bind(this);
        this.handleTestamentFileUpload = this.handleTestamentFileUpload.bind(this);
        // this.handleList = this.handleList.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        // this.handleCreatePost = this.handleCreatePost.bind(this);
        // this.handleCreateVote = this.handleCreateVote.bind(this);
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
        const {heritage} = this.props;
        const {mateLegitime, childLegitime, grandChildLegitime, parentLegitime, siblingLegitime, grandFatherLegitime, grandMotherLegitime, 
                testamentFormCollapse, testamentFormChecked, remindCollapse, remindChecked, testament} = this.state;
        return (
            <div>
                <div className='third-page'>
                    <h1>計算結果</h1>
                    <p>遺產總額：{heritage}元</p>
                    <p>特留分</p>
                    <p>
                        {/* <!--特留分我想說全部列出來(雖然通常只會有配偶+最先繼承順序會有特留分)一是比較簡單，二是使用者可以更一目了然--> */}
                        1.配偶：{mateLegitime}元
                        <br />
                        2.子女：各{childLegitime}元/人
                        <br />
                        3.孫子女：各{grandChildLegitime}元/人
                        <br />
                        4.父母：各{parentLegitime}元/人
                        <br />
                        5.兄弟姊妹：各{siblingLegitime}元/人
                        <br />
                        6.祖父：各{grandFatherLegitime}元/人
                        <br />
                        7.祖母：各{grandMotherLegitime}元/人
                        <br />
                    </p>

                    <div>
                    <h1>遺囑格式</h1>
                    <Button color="primary" onClick={this.handleTestamentFormCollapse} style={{ marginBottom: '1rem' }}>點擊顯示</Button>
                        <Collapse className='testament-form-collapse' isOpen={testamentFormCollapse}>
                            <Card>
                                <CardBody>
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
                                <Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={testamentFormChecked} onChange={this.handleTestamentFormCheck} />
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    
                    <div>
                    <h1>貼心小提醒</h1>
                    <Button color="primary" onClick={this.handleRemindCollapse} style={{ marginBottom: '1rem' }}>點擊顯示</Button>
                        <Collapse className="" isOpen={remindCollapse}>
                            <Card>
                                <CardBody>
                                小提醒
                                <Input className = 'ml-sm-1 mt-sm-1' type="checkbox" checked={remindChecked} onChange={this.handleRemindCheck} />
                                </CardBody>
                                {/* <ListGroup>
                                    <ListGroupItem tag="a" href="https://reactstrap.github.io/components/form/" action>
                                        Reactstrap: Forms
                                    </ListGroupItem>
                                </ListGroup> */}
                                
                            </Card>
                        </Collapse>
                    </div>

                    <Input type="file" name="file" onChange={this.handleTestamentFile} ></Input>
                    <Button onClick={this.handleTestamentFileUpload}>上傳遺囑</Button>
                </div>
            </div>
        );
    }

    calculateLegitime() {

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
    handleRemindCheck() {
        this.setState((prevState, props) => ({
            remindChecked: !prevState.remindChecked
        }));
    }

    handleTestamentFile(e) {
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
        setTimeout(() => {this.handleCreate(this.props)}, 2000);
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

    handleCreate() {
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
