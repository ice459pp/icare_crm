import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Tab, Tabs, Table, Button } from "react-bootstrap";
import QaFilter from "../component/qanda/qa-filter";
import { apiQaList } from "../api/api-qa-list";

const Qanda = () => {
    const appSlice = useSelector((state) => state.appSlice);
    const navigate = useHistory();
    const [qaList, setQaList] = useState([]);
    const [category, setcategory] = useState('');
    const [keyword, setkeyword] = useState('');
    const [key, setKey] = useState('open');

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
                    console.log(qaList)
                }
            )
        }
    }, [
        appSlice.isLogin
    ])

    const qandaEditHandler = (item) => {
        navigate.push(`/qaedit/${item.id}`);
    };

    const renderTableRows = (filterItems) => (
        filterItems.map((item) => (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.edittime}</td>
                <td>
                    <Form>
                        <Form.Check
                            type="switch"
                            id={`custom-switch-${item.id}`}
                            label={item.open ? "啟用" : "未啟用"}
                            defaultChecked={item.open}
                        />
                    </Form>
                </td>
                <td>
                    <Button
                        onClick={() => qandaEditHandler(item)}
                        className="btn-sm w-100 text-light"
                    >
                        編輯
                    </Button>
                </td>
            </tr>
        ))
    );

    const openItems = qaList.filter(item => item.open);
    const closedItems = qaList.filter(item => !item.open);

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
                    <QaFilter />
                </div>
            </form>
            <div className="w-100 padding-RWD mt-3">
                <h4 className="text-center fw-bolder "> Q & A </h4>
                <div className="d-flex align-items-end tableSort mb-2">
                    <button className="btn btn-outline-primary mt-3 reload_btn">新增Q & A </button>
                </div>
                <div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="all" title="全部">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>標題</th>
                                        <th>編輯時間</th>
                                        <th>狀態</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRows(qaList)}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="open" title="啟用">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>標題</th>
                                        <th>編輯時間</th>
                                        <th>是否啟用</th>
                                        <th>編輯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRows(openItems)}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="closed" title="未啟用">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>標題</th>
                                        <th>編輯時間</th>
                                        <th>是否啟用</th>
                                        <th>編輯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRows(closedItems)}
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    );
};
export default Qanda;
