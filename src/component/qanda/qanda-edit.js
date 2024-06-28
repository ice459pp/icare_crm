import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
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
    // qaData.title
    const [title, setTitle] = useState("");
    // qaData.content
    const [content, setContent] = useState("");
    // qaData.edittime
    const [edittime, setEdittime] = useState("");
    const [open, setOpen] = useState();
    const [showCKEditor, setShowCKEditor] = useState(false);

    //console.log('QaEdit', title, content, edittime )

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
                    setEdittime(data.edittime)
                    setShowCKEditor(true)
                }
            )
        }
    }, []);

    // POST API-Info
    useEffect(() => {
        if (apiUpdate) {
            const token = appSlice.userToken;
            console.log({ id, title, content, edittime, open })
            apiQaUpdate(
                token,
                id,
                title,
                content,
                edittime,
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
    }, [apiUpdate])

    const apiUpdateHandler = () => {
        const newDate = new Date();
        setEdittime(newDate);
        setApiUpdate(true)
    };

    const handlerEditorChange = (value) => {
        setContent(value);
    };

    const closeHandler = () => {
        navigate.push(`/qanda`);
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
                                defaultValue={title}
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </div>
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

