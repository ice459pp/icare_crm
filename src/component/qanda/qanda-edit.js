import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiQaInfo } from "../../api/api-qa/api-qa-info";
import { apiQaUpdate } from "../../api/api-qa/api-qa-edit";
import { apiQaCategory } from "../../api/api-qa/api-qa-category";
import { apiQaImage } from "../../api/api-qa/api-qa-img";
import CKEditor from "./CKEditor";

const QandaEdit = () => {
    const navigate = useHistory();
    const params = useParams();
    const id = params.id;
    const appSlice = useSelector((state) => state.appSlice);
    const [apiUpdate, setApiUpdate] = useState(false);
    const [categoryArr, setCategoryArr] = useState([]);
    const [subcategoryArr, setSubcategoryArr] = useState([]);
    const [file, setSelectedFile] = useState(null);
    const [showImgModal, setShowImgModal] = useState(false);
    const [preview, setPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
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
                    setTitle(data.title)
                    setContent(data.content)
                    setCategory(data.category)
                    setOpen(data.open)
                    setSubCategory(data.subcategory)
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
            console.log(id, title, encodedContent, category, open, subCategory)
            apiQaUpdate(
                token,
                id,
                title,
                encodedContent,
                category,
                open,
                subCategory,
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

    useEffect(() => {
        const token = appSlice.userToken;
        apiQaCategory(
            token,
            (err) => {
                alert(err);
            },
            (data) => {
                setCategoryArr(data);
                const subcategories = data
                    .flatMap(item => item.subcategory)
                    .filter((sub, index, self) => sub && self.indexOf(sub) === index); 
                setSubcategoryArr(subcategories);
            }
        );
    }, [])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubCategoryChange = (event) => {
        setSubCategory(event.target.value);
    };

    // POST ImgUpload
    const handleUpload = () => {
        if (!file) return;
        const token = appSlice.userToken;
        apiQaImage(
            token,
            file,
            (err) => {
                alert(err);
            },
            (data) => {
                setPreview(data);
                setShowImgModal(true);
            }
        );
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const copyClipboard = () => {
        navigator.clipboard.writeText(preview).then(() => {
            alert('已複製連結');
        }, (err) => {
            console.error('Error: ', err);
        });
    };

    const closeImgModal = () => {
        setShowImgModal(false);
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
                <Button className="btn btn-lg m-3" variant="success" onClick={apiUpdateHandler} >送出</Button>
                <Button className="btn btn-lg m-3" variant="secondary" onClick={closeHandler}>取消</Button>
            </div>
            <div className="search qa-search-container p-3">
                <div className=" search-qaStatus ">
                    <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0">
                        <label className="me-2">
                            <span className="name">系統分類</span>
                            <span className="bit">:</span>
                        </label>
                        <Form.Select
                            aria-label="Default select example"
                            value={category}
                            onChange={handleCategoryChange}>
                            <option value={category} hidden>{category}</option>
                            {categoryArr.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-md-end px-md-5">
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
                </div>
                <div className="mt-3 search-qaStatus ">
                    <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0">
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
                </div>
                <div className="mt-3 search-qaStatus ">
                    <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0">
                        <label className="me-2">
                            <span className="name">問題分類</span>
                            <span className="bit">:</span>
                        </label>
                        <Form.Select
                            aria-label="Default select example"
                            value={subCategory}
                            onChange={handleSubCategoryChange}>
                            <option value={subCategory} hidden>{subCategory}</option>
                            {subcategoryArr.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </Form.Select>
                    </Col>
                </div>
                <div className="m-3 ">
                    <Col xs={12} md={6} className="d-flex justify-content-between">
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-outline-warning" onClick={handleUpload}>圖片上傳</button>
                    </Col>
                </div>

                {showCKEditor && (
                    <div className="p-3">
                        <CKEditor onValueChange={handlerEditorChange} content={content} />
                    </div>
                )}
            </div>

            <Modal
                className="radio-custom"
                show={showImgModal}
                onHide={closeImgModal}
                centered
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header className="bg-secondary text-white" closeButton>
                    <Modal.Title>圖片上傳</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                {preview && (
                                    <div>
                                        <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                                    </div>
                                )}
                            </div>
                            <div className="col-md-6 ">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder={preview}
                                        aria-label="連結"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" onClick={copyClipboard}>
                                        複製連結
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
};

export default QandaEdit;

