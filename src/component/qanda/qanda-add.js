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
    const [title, setTitle] = useState( "新增標題!!");
    const [category, setCategory] = useState("IHealApp")
    const [content, setContent] = useState( "新增內容!!!");
    const [open, setOpen] = useState("");

    // POST API-Info
    useEffect(() =>{
        if(apiUpdate) {
            const token = appSlice.userToken;
            const encodedContent = encodeURIComponent(content);
            console.log(title, encodedContent, category, open)
            apiQaCreate(
                token,
                title,
                category,
                encodedContent,
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
        setApiUpdate(true);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handlerEditorChange = (value) => {
        //console.log(value);
        setContent(value);
    };

    const closeHandler = () => {
        navigate.push(`/qanda`);
    };


    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg btn-success m-3" variant="success" onClick={apiUpdateHandler}>送出</Button>
                <Button className="btn btn-lg btn-dark m-3" variant="secondary" onClick={closeHandler}>取消</Button>
            </div>
            <div className="search m-3">
                <div className="m-3 search-clinicStatus">
                    <div className=" w-50  d-flex  align-items-center ">
                    <label className="">
                            <span className="name">標題</span>
                            <span className="bit">:</span>
                        </label>
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
                    <div className="switch  w-50 d-flex  align-items-center justify-content-center ">
                        <label className=" d-flex align-items-center ">
                            <span className="name">是否啟用</span>
                            <span className="bit">:</span>
                        </label>
                        <Form.Check
                        type="switch"         
                        checked={open}
                        onChange={(e) => setOpen(e.target.checked)}
                        />
                    </div>
                </div>
                <div className="m-3 search-clinicStatus ">
                    <div className="title w-50  d-flex  align-items-center ">
                        <label className="">
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