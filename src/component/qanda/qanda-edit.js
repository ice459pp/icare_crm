import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiQaEdit } from "../../api/api-qaEdit";
import CKEditor from "./CKEditor";

let qaData = {
    id:"",
    title:"",
    content:"",
    click:"",
    edittime:"",
    open:""
}

const QandaEdit = () => {
    const appSlice = useSelector((state) => state.appSlice);
    const navigate = useHistory();
    //const params = useParams();
    const id = 1;
    const [qaInfo, setQaInfo] = useState(qaData);

    const handlerEditorChange = (value) => {
        console.log(value)
      };

    const closeHandler = () =>{
        navigate.push(`/qanda`);
    };

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
        )}
    },[]);
    console.log(qaInfo) //陣列含全部物件
    
    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg m-3">儲存</Button>
                <Button className="btn btn-lg btn-success m-3">提交</Button>
                <Button className="btn btn-lg btn-dark m-3" onClick={closeHandler}>取消</Button>
            </div>
            <div className="search w-90 m-3">
                <div className="m-3">
                    <div className="w-50">
                        <InputGroup >
                            <Form.Control
                                placeholder={qaInfo.title}
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>
                <div className="p-3">
                    <CKEditor onValueChange={handlerEditorChange} content={qaInfo}/>
                </div>
            </div>
        </Fragment>
    )
};

export default QandaEdit;

