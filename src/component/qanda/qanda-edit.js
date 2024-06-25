import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiQaEdit } from "../../api/api-qa-info";
import { apiQaUpdate } from "../../api/api-qa-edit";
import { scrollTopAction } from "../../store/scrollTop-slice";
import CKEditor from "./CKEditor";

let qaData = {
    id: "",
    title: "",
    content: "",
    click: "",
    edittime: "",
    open: ""
}

const QandaEdit = () => {
    let dispatch=useDispatch();
    const appSlice = useSelector((state) => state.appSlice);
    const navigate = useHistory();
    const params = useParams();
    const id = params.id;
    const [qaInfo, setQaInfo] = useState(qaData);
    const [apiUpdate, setApiUpdate] = useState(false);
    const [title, setTitle] = useState(qaData.title);
    const [content, setContent] = useState(qaData.content);
    const [edittime, setEdittime] = useState(qaData.edittime);
    const [open, setOpen] = useState();
    
    console.log('QaEdit', title, content, edittime ) //SUCCESS

    const handlerEditorChange = (value) => {
        console.log(value);
        setContent(value);
    };

    const closeHandler = () => {
        navigate.push(`/qanda`);
    };

    // GET API-Info
    useEffect(() => {
        if (appSlice.isLogin) {
            const token = appSlice.userToken;
            apiQaEdit(
                token,
                id,
                (err) => {
                    console.log("err: " + err)
                },
                (data) => {
                    console.log("response: " + data)
                    setQaInfo(data)
                }
            )
        }
    }, []);

    // POST API-Info
    useEffect(() => {
        if (apiUpdate) {
            const token = appSlice.userToken;
            apiQaUpdate(
                token,
                id,
                title,
                content,
                edittime,
                open,
                (err) =>{
                    alert(err);
                },
                () =>{
                    setApiUpdate(false);
                    navigate.push('/qanda')
                }
            );
        }
    }, [apiUpdate])

    const apiUpdateHandler = () => {
        const newDate = new Date();
        setEdittime(newDate);
        setApiUpdate(true)
    };

    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg m-3">儲存</Button>
                <Button className="btn btn-lg btn-success m-3" onClick={apiUpdateHandler} >送出</Button>
                <Button className="btn btn-lg btn-dark m-3" onClick={closeHandler}>取消</Button>
            </div>
            <div className="search w-90 m-3">
                <div className="m-3">
                    <div className="w-50">
                        <InputGroup >
                            <Form.Control
                                defaultValue={qaInfo.title}
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </div>
                </div>
                <div className="p-3">
                    <CKEditor onValueChange={handlerEditorChange} content={qaInfo.content} />
                </div>
            </div>
        </Fragment>
    )
};

export default QandaEdit;

