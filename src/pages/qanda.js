import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, Form, Tab, Tabs, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Qanda = () => {
    const dispatch = useDispatch();
    //const [ qaList, setQaList] = useState([]);
    //const { qaList } = useSelector((state) => state.qaSlice);
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
                    <div className="d-flex align-items-end visitorSelect">
                        <InputGroup className="input-group-textSearch" size="">
                            <Form.Control
                                placeholder="標題搜尋"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            // defaultValue={sessionStorage.getItem("searchText")}
                            // ref={clinicNameRef}
                            // onKeyPress={handleInputKeyPress}
                            />
                            <button
                                className="btn btn-secondary"
                                type="button"
                                id="button-addon2"
                            //onClick={searchTextHandler}
                            >
                                <FontAwesomeIcon icon="fas fa-search" />
                            </button>
                        </InputGroup>
                    </div>
                </div>
            </form>
            <div className="w-100 padding-RWD mt-3">
                <h4 className="text-center fw-bolder "> Q & A </h4>
                <div className="d-flex align-items-end tableSort mb-2">
                    <button className="btn btn-outline-primary mt-3 reload_btn">新增</button>
                </div>
                <div>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="全部">
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th >標題</th>
                                        <th >修改時間</th>
                                        <th> 是否啟用</th>
                                        <th >編輯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>
                                            <Form>
                                                <Form.Check // prettier-ignore
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                />
                                            </Form>
                                        </td>
                                        <td>
                                            <button
                                                //onClick={moreDetailHandler}
                                                className="btn w-100 btn-sm btn-dark"
                                            >
                                                編輯內文
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="profile" title="已啟用">
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="bg-secondary text-white tr-only-hide">
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="contact" title="未啟用" disabled>
                            未啟用
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    );
};
export default Qanda;
