import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Tab, Tabs, Table, Button } from "react-bootstrap";
import QaFilter from "../component/qanda/qa-filter";
import { qaFilterAction } from "../store/qa-filter-slice";
import { apiQaList } from "../api/api-qa-list";
import { apiQaUpdate } from "../api/api-qa-edit";
import { apiQaDelete } from "../api/api-qa-delete";

const Qanda = () => {
    const dispatch = useDispatch();
    const navigate = useHistory();
    const appSlice = useSelector((state) => state.appSlice);
    const qaFilterSlice = useSelector((state) => state.filterSlice);
    const [qaList, setQaList] = useState([]);
    const [switchChange, setSwitchChange] = useState(null);
    const [keyword, setKeyword] = useState(qaFilterSlice.searchText);
    const [category, setCategory] = useState('');
    const [key, setKey] = useState('all');

    const searchTextHandler = (value) => {
        dispatch(qaFilterAction.onSearchText(value));
        setKeyword(value);
    };

    const categoryHandler = (value) =>{
        dispatch(qaFilterAction.onCategory(value));
        console.log(value) //1
        setCategory(value);
    };

    const fetchQaList = () => {
        if (appSlice.isLogin) {
            const token = appSlice.userToken;
            apiQaList(
                token,
                category,
                keyword,
                "0",
                (err) => {
                    console.log("err: " + err);
                },
                (data) => {
                    setQaList(data);
                }
            );
        }
    };

    // GET API-QaList
    useEffect(() => {
        if (appSlice.isLogin) {
            fetchQaList();
        }
    }, [
        appSlice.isLogin, category, keyword ]);

    // POST switchStatus
    useEffect(()=>{
        if(switchChange){
            const token = appSlice.userToken;
            const { id, title, content, category, open } = switchChange; 
            apiQaUpdate(
                token,
                id,
                title,
                encodeURIComponent(content),
                category,
                open,
                (err) => {
                    alert(err);
                },
                () => {
                    setSwitchChange(null);
                    fetchQaList();
                }
            );
        }
    }, [switchChange]);

    const setOpen = (item, openStatus) => {
        console.log(item);
        setSwitchChange({
            id: item.id,
            title: item.title,
            content: item.content,
            category: item.category,
            open: openStatus,
        });
    };

    const qandaAddHandler = () => {
        navigate.push(`/qaadd`)
    };

    const qandaEditHandler = (item) => {
        navigate.push(`/qaedit/${item.id}`);
    };

    // Delete Item
    const qandaDeleteHandler = (id) =>{
        const token = appSlice.userToken;
        apiQaDelete(
            token,
            id,
            (err) => {
                alert(err);
            },
            () => {
                fetchQaList();
            }
        );
    };

    const renderTableRows = (filterItems) => (
        filterItems.map((item) => (
            <tr key={item.id}>
                <td data-th="標題:" className="data-th">{item.title}</td>
                <td data-th="分類:">{item.category}</td>
                <td data-th="編輯時間:">{item.edittime}</td>
                <td  data-th="是否啟用:">
                    <Form>
                        <Form.Check
                            type="switch"
                            id={`custom-switch-${item.id}`}
                            label={item.open ? "啟用" : "未啟用"}
                            checked={item.open}
                            onChange={(e) => setOpen(item, e.target.checked)}
                        />
                    </Form>
                </td>
                <td>
                    <Button
                        className="btn-sm w-100 text-light"
                        variant="success"
                        onClick={() => qandaEditHandler(item)}
                    >
                        編輯
                    </Button>
                </td>
                <td>
                    <Button
                        className="btn-sm btn-dark w-100 text-light"
                        variant="secondary"
                        onClick={() => qandaDeleteHandler(item.id)}
                    >
                        刪除
                    </Button>
                </td>
            </tr>
        ))
    );

    const openItems = qaList.filter(item => item.open);
    const closedItems = qaList.filter(item => !item.open);

    return (
        <Fragment>
                <div className="w-100 mt-3 padding-RWD">
                    <QaFilter
                        onCategoryChange={categoryHandler}
                        onSearchText={searchTextHandler}
                    />
                </div>

            <div className="w-100 padding-RWD mt-3">
                <h4 className="text-center fw-bolder "> Q & A </h4>
                <div className="d-flex align-items-end tableSort mb-2">
                    <button className="btn btn-outline-warning  reload_btn" onClick={qandaAddHandler}>新增Q & A </button>
                </div>
                <div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="all" title="全部">
                            <Table striped bordered hover className="table-rwd">
                                <thead>
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th>標題</th>
                                        <th>分類</th>
                                        <th>編輯時間</th>
                                        <th>狀態</th>
                                        <th>編輯</th>
                                        <th>刪除</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRows(qaList)}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="open" title="啟用">
                            <Table striped bordered hover className="table-rwd">
                                <thead>
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th>標題</th>
                                        <th>分類</th>
                                        <th>編輯時間</th>
                                        <th>是否啟用</th>
                                        <th>編輯</th>
                                        <th>刪除</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRows(openItems)}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="closed" title="未啟用">
                            <Table striped bordered hover className="table-rwd">
                                <thead >
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th>標題</th>
                                        <th>分類</th>
                                        <th>編輯時間</th>
                                        <th>是否啟用</th>
                                        <th>編輯</th>
                                        <th>刪除</th>
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
