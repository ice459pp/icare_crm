import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button, Modal } from 'react-bootstrap';
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
// import { useHistory, Link } from "react-router-dom";
// const style={
//     border:`2px solid gray`,
//     padding:`15px`
// }
const ClinicInformation = (props) => {
    // ClinicInformation13
    const [visitRadio, setVisitRadio] = useState(false);
    const [careNetworkRadio, setCareNetworkRadio] = useState(false);
    // const [showModal, setShowModal] = useState(false);
    // const handleModal = () => {
    //     setShowModal(!showModal);
    // };

    // let { item } = props
    // const goPath = useHistory();//設常數接收useHistory()回傳的物件
    // const pushClinicDetail = () => {
    //     console.log("qwqwedqed")
    //     goPath.push(`/clinic_Detail/${item.id}`)
    // }
    const visitRadioHandler = (e) => {
        const value = e.target.value === "true";
        setVisitRadio(value)
    }
    const careNetworkRadioHandler = (e) => {
        const value = e.target.value === "true";
        setCareNetworkRadio(value)
    }

    return (<Fragment>
        <div className="basicInform">

            <section className=" pb-2 title">
                <div className="w-25 ">
                    <label htmlFor="clinicName" className="form-label">診所名稱:</label>
                    <input type="text" className="form-control" id="clinicName" placeholder="怡和診所" />
                </div>
                <div className="w-25">
                    <label htmlFor="clinicCode" className="form-label">機構代碼:</label>
                    <input type="text" className="form-control" id="clinicCode" placeholder="3501183547" />
                </div>
                <div className="w-25 ">
                    <label htmlFor="clinicTelephone" className="form-label">電話:</label>
                    <input type="tel" className="form-control" id="clinicTelephone" placeholder="02-2362-5100" />
                </div>
            </section>
            <section className=" pb-3 border-bottom inform-address">
                <div className="w-25 d-flex">
                    <div className="w-100 pe-2">
                        <label htmlFor="city" className="form-label">城市:</label>
                        <input type="text" className="form-control" id="city" placeholder="台北市" />
                    </div>
                    <div className="w-100 ">
                        <label htmlFor="district" className="form-label">區域:</label>
                        <input type="text" className="form-control" id="district" placeholder="內湖區" />
                    </div>
                </div>
                <div className="address ">
                    <label htmlFor="address" className="form-label">地址:</label>
                    <input type="text" className="form-control" id="address" placeholder="汀州路二段212號" />
                </div>
            </section>
            <section className="inform-his pt-2">
                <div className="inform-his-item">
                    <div className="w-100  ">
                        <label htmlFor="HIS-system" className="form-label">HIS系統:</label>
                        <select id="HIS-system" className="form-select" aria-label="Default select example">
                            <option selected>請選擇</option>
                            <option value="1">展望</option>
                            <option value="2">耀聖</option>
                            <option value="3">其他</option>
                        </select>
                    </div>
                    <div className="w-100 ">
                        <label htmlFor="callMode" className="form-label">叫號方式:</label>
                        <input type="email" className="form-control" id="callMode" placeholder="??" />
                    </div>
                </div>
                <div className="inform-his-item">
                    <div className="w-100">
                        <label htmlFor="otherDoctor" className="form-label">其他醫院執業:</label>
                        <input type="text" className="form-control" id="otherDoctor" placeholder="??" />
                    </div>
                    <div className="w-100">
                        <label htmlFor="doctorNumber" className="form-label">醫生人數:</label>
                        <input type="text" className="form-control" id="doctorNumber" placeholder="12" />
                    </div>
                </div>
            </section>
            <section className="d-flex  pt-2">
                <div className="w-100 d-flex inform-radio1">
                    <div className="w-50 pe-4  ">
                        <label className="form-label">有無視訊:</label>
                        <div className="d-flex">
                            <div className="form-check pe-5 ">
                                <input className="form-check-input" type="radio" name="video" id="videoTrue" />
                                <label className="form-check-label text-dark" htmlFor="videoTrue">
                                    有
                                </label>
                            </div>
                            <div className="form-check pe-5 ">
                                <input className="form-check-input" type="radio" name="video" id="videoFalse" />
                                <label className="form-check-label" htmlFor="videoFalse">
                                    無
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-50  pe-4 ">
                        <label className="form-label">醫生能不能做主:</label>
                        <div className="d-flex">
                            <div className="form-check pe-5">
                                <input className="form-check-input" type="radio" name="mainDoctor" id="mainDoctorTrue" />
                                <label className="form-check-label" htmlFor="mainDoctorTrue">
                                    有
                                </label>
                            </div>
                            <div className="form-check pe-5">
                                <input className="form-check-input" type="radio" name="mainDoctor" id="mainDoctorFalse" />
                                <label className="form-check-label" htmlFor="mainDoctorFalse">
                                    無
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 ">
                        <label htmlFor="doctorGroup" className="form-label">醫療群:</label>
                        <input type="text" className="form-control form-control-sm" id="doctorGroup" placeholder="??" />
                    </div>
                </div>

            </section>
            <section className="pt-2 inform-radio2">
                <div className="w-100 ">
                    <label className="form-label">可否預約拜訪醫師時間:</label>
                    <div className="d-flex align-items-center flex-wrap overflow-hidden ">
                        <div className="form-check py-2 pe-5">
                            <input onChange={visitRadioHandler} value="true" className="form-check-input" type="radio" name="visitTime" id="visitTimeTrue" />
                            <label className="form-check-label" htmlFor="visitTimeTrue">
                                可
                            </label>
                        </div>
                        <div className="form-check py-2 pe-5">
                            <input onChange={visitRadioHandler} value="false" className="form-check-input" type="radio" name="visitTime" id="visitTimeFalse" />
                            <label className="form-check-label" htmlFor="visitTimeFalse">
                                否
                            </label>
                        </div>
                        {visitRadio ? <div className=" input-group-sm ">
                            <input type="text" className="form-control" placeholder="時間" />
                        </div> : ""}

                    </div>

                </div>
            </section>
            <section className="pt-2  inform-care-network">
                <label className="form-label">有無加入照護網:</label>
                <div className="d-flex align-items-center flex-wrap">
                    <div className="form-check py-2  pe-5">
                        <input onChange={careNetworkRadioHandler} value="true" className="form-check-input" type="radio" name="CareNetwork" id="CareNetworkTrue" />
                        <label className="form-check-label" htmlFor="CareNetworkTrue">
                            有
                        </label>
                    </div>
                    <div className="form-check py-2  pe-5">
                        <input onChange={careNetworkRadioHandler} value="false" className="form-check-input" type="radio" name="CareNetwork" id="CareNetworkFalse" />
                        <label className="form-check-label" htmlFor="CareNetworkFalse">
                            無
                        </label>
                    </div>
                    {careNetworkRadio &&
                        <div className=" d-flex CareNetwork">
                            {/* 多選區 */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="1" id="1" />
                                <label className="form-check-label" htmlFor="1">
                                    糖尿病
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="2" id="2" />
                                <label className="form-check-label" htmlFor="2">
                                    慢性腎臟病
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="3" id="3" />
                                <label className="form-check-label" htmlFor="3">
                                    氣喘
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="4" id="4" />
                                <label className="form-check-label" htmlFor="4">
                                    BC肝
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="5" id="5" />
                                <label className="form-check-label" htmlFor="5">
                                    慢性阻塞性肺病
                                </label>
                            </div>

                            {/* 多選區 */}
                        </div>
                    }

                </div>

            </section>
        </div>
    </Fragment>)


    // list listItem
}
export default ClinicInformation