import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Tab, Tabs, Table, Button } from "react-bootstrap";
import  QaFilter  from "../component/qanda/qa-filter"
import { apiQaList } from "../api/api-qa-list";

const Qanda = () => {
    const appSlice = useSelector((state) => state.appSlice);
    const navigate = useHistory();
    const [qaList, setQaList] = useState([]);
    const [category, setcategory] = useState('');
    const [keyword, setkeyword] = useState('');
    useEffect(() => {
        if (appSlice.isLogin) {
            const token = appSlice.userToken;
            apiQaList(
                token,
                category,
                keyword,
                "0",
                (err) => {
                    console.log("err: " + err)
                },
                (data) => {
                    setQaList(data)
                }
            )
        }
    }, [
        appSlice.isLogin
    ])

    const qandaEditHandler = () => {
        navigate.push(`/qaedit`);
    }

    return (
        <Fragment>
            <form className="p-3 search m-3">
                <div className="d-flex align-items-center search-clinicStatus ">
                    <div className="clinicStatus">
                        <label className="">分類:</label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <QaFilter/>
                </div>
            </form>
            <div className="w-100 padding-RWD mt-3">
                <h4 className="text-center fw-bolder "> Q & A </h4>
                <div className="d-flex align-items-end tableSort mb-2">
                    <button className="btn btn-outline-primary mt-3 reload_btn">新增Q & A </button>
                </div>
                <div>
                    <Tabs
                        defaultActiveKey="all"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="all" title="全部">
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th >標題</th>
                                        <th >修改時間</th>
                                        <th > 是否啟用</th>
                                        <th >編輯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {qaList.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.edittime}</td>
                                            <td>                                          
                                                { item.open === true && <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                        label="啟用"
                                                        defaultChecked
                                                    />
                                                </Form>}
                                                { item.open === false && <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                        label="未啟用"
                                                    />
                                                </Form>}
                                               
                                            </td>
                                            <td>
                                                <Button
                                                    onClick={qandaEditHandler}
                                                    className="btn-sm w-100 text-light"
                                                >
                                                編輯
                                                </Button>
                                            </td>
                                        </tr>))
                                    }
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="active" title="已啟用">
                            <Table striped bordered hover>
                                <thead>
                                <tr className="bg-secondary text-white tr-only-hide">
                                        <th >標題</th>
                                        <th >修改時間</th>
                                        <th > 是否啟用</th>
                                        <th >編輯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="inactive" title="未啟用" >
                            未啟用
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    );
};
export default Qanda;
