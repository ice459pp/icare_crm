import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux"; 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { apiQaCreate } from "../../api/api-qa-add";
import CKEditor from "./CKEditor";

const QandaAdd = () =>{
    const navigate = useHistory();
    const [apiUpdate, setApiUpdate] = useState(false);
    const appSlice = useSelector((state) => state.appSlice);
    const id = 1;
    const [title, setTitle] = useState( "新增標題!!");
    const [category, setcategory] = useState("IHealApp")
    const [content, setContent] = useState( "新增內容!!!");
    const [click, setClick] = useState( "");
    const [edittime, setEdittime] = useState( "");
    const [open, setOpen] = useState( "");

    // POST API-Info
    useEffect(() =>{
        if(apiUpdate) {
            const token = appSlice.userToken;
            console.log({ id, title, category, content, click, edittime, open })
            apiQaCreate(
                token,
                id,
                title,
                category,
                content,
                click,
                edittime,
                open,
                (err) =>{
                    alert(err);
                },
                () =>{
                    setApiUpdate(false);
                    navigate.push('/qanda')
                }
            )
        }
    },[apiUpdate]);

    const apiUpdateHandler = () =>{
        const newDate = new Date();
        setEdittime(newDate);
        console.log(content); 
        setApiUpdate(true);
    }

    const closeHandler = () => {
        navigate.push(`/qanda`);
    };

    const handlerEditorChange = (value) => {
        console.log(value);
        setContent(value);
    };

    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg m-3">儲存</Button>
                <Button className="btn btn-lg btn-success m-3" onClick={apiUpdateHandler}>送出</Button>
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
                <div className="p-3">
                    <CKEditor onValueChange={handlerEditorChange} content={content} />
                </div>
            </div>       
        </Fragment>
    )
};

export default QandaAdd;