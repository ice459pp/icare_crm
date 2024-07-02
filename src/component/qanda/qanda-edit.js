import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiQaInfo } from "../../api/api-qa-info";
import { apiQaUpdate } from "../../api/api-qa-edit";
import CKEditor from "./CKEditor";

const QandaEdit = () => {
    const navigate = useHistory();
    const params = useParams();
    const id = params.id;
    const appSlice = useSelector((state) => state.appSlice);
    const [apiUpdate, setApiUpdate] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [open, setOpen] = useState("");
    const [showCKEditor, setShowCKEditor] = useState(false);

    // GET API-Info
    useEffect(() => {
        if (appSlice.isLogin) {
            const token = appSlice.userToken;
            apiQaInfo(
                token,
                id,
                (err) => {
                    console.log("err: " + err)
                },
                (data) => {
                    console.log(data)
                    setTitle(data.title)
                    setContent(data.content)
                    setCategory(data.category)
                    setOpen(data.open)
                    setShowCKEditor(true)
                }
            )
        }
    }, []);

    // POST API-Info
    useEffect(() => {
        if (apiUpdate) {
            const token = appSlice.userToken;
            const encodedContent = encodeURIComponent(content);
            console.log(id, title, encodedContent, category, open)
            apiQaUpdate(
                token,
                id,
                title,
                encodedContent,
                category,
                open,
                (err) => {
                    alert(err);
                },
                () => {
                    setApiUpdate(false);
                    navigate.push('/qanda')
                }
            );
        }
    }, [apiUpdate]);

    const apiUpdateHandler = () => {
        setApiUpdate(true)
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handlerEditorChange = (value) => {
        setContent(value);
    };

    const fileUploadHandler = () => {
        console.log('ok')
    };

    const closeHandler = () => {
        navigate.push(`/qanda`);
    };

    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg  m-3" variant="success" onClick={apiUpdateHandler} >送出</Button>
                <Button className="btn btn-lg  m-3" variant="secondary"  onClick={closeHandler}>取消</Button>
            </div>
            <div className="search m-3">
                <Row className="m-3 search-clinicStatus ">
                    <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0 px-0">
                        <label className="me-2">
                            <span className="name">標題</span>
                            <span className="bit">:</span>
                        </label>
                        <InputGroup className="" >
                            <Form.Control
                                defaultValue={title}
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </Col>
                    <Col  xs={12} md={6} className="d-flex align-items-center justify-content-md-end px-md-5">
                        <label className="me-2 d-flex align-items-center">
                            <span className="name">是否啟用</span>
                            <span className="bit">:</span>
                        </label>
                        <Form.Check
                        type="switch"
                        id={`custom-switch-${id}`}                       
                        checked={open}
                        onChange={(e) => setOpen(e.target.checked)}
                        />
                    </Col>
                </Row>
                <div className="m-3 search-clinicStatus ">
                    <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0">
                        <label className="me-2">
                            <span className="name">分類</span>
                            <span className="bit">:</span>
                        </label>
                        <Form.Select 
                            aria-label="Default select example"
                            value={category} 
                            onChange={handleCategoryChange}>
                            <option value="iHealAPP">iHealAPP</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-md-end px-md-5">
                    <button className="btn btn-outline-warning" onClick={fileUploadHandler}>照片上傳</button>
                    </Col>
                </div>
                
                {showCKEditor && (
                    <div className="p-3">
                        <CKEditor onValueChange={handlerEditorChange} content={content} />
                    </div>
                )}
            </div>
        </Fragment>
    )
};

export default QandaEdit;

