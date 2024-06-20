import React, { Fragment } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import CKEditor from '../home/CKEditor';

const QandaEdite = () => {
    const handlerEditorChange = (value) => {
        console.log(value)
      };

    return (
        <Fragment>
            <div className="d-flex justify-content-end border-bottom ">
                <Button className="btn btn-lg m-3">儲存</Button>
                <Button className="btn btn-lg btn-success m-3">提交</Button>
                <Button className="btn btn-lg btn-dark m-3">取消</Button>
            </div>
            <div className="search w-90 m-3">
                <div className="m-3">
                    <div className="w-50">
                        <InputGroup >
                            <Form.Control
                                placeholder="輸入標題"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>
                <div className="p-3">
                    <CKEditor onValueChange={handlerEditorChange} />
                </div>
            </div>
        </Fragment>
    )
};

export default QandaEdite;

