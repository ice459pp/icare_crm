import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
// import ClinicDetail from "../component/home/clinic-list"
import ClinicDetailLog from "./clinicDetail-log";
import ClinicInformation from "./clinicInformation";
let arrayLog = [
    {
        id: "qwdqwqwde",
        name: "sdssaf"
    },
    {
        id: "qwdqwqwdwqeqweqweqe",
        name: "sdssaf"
    },
    {
        id: "qwdqwqwderqwwqqwrqwerqe",
        name: "sdssaf"
    },
    {
        id: "qwdqwqwdqwerqwere",
        name: "sdssaf"
    },
    {
        id: "qwdqwqwdffffffffffe",
        name: "sdssaf"
    },
]
const style = {
    height: `300px`
}
const ClinicDetail = () => {
    // ClinicDetail13
    let params = useParams()


    return (<Fragment>
        <div className="w-100 px-5">
            <div className="py-2 -100">
                <div className="h5 text-dark fw-bolder">基本資料:</div>
                <ClinicInformation></ClinicInformation>
            </div>
            <div className="py-2 w-100">
                <div className="h5 text-dark fw-bolder">Log:</div>
                {arrayLog.map(item => <ClinicDetailLog key={item.id}></ClinicDetailLog>)}
            </div>
            <div className="py-2">
                <div className="form-floating">
                    <div className="h5 text-dark fw-bolder">新增內容:</div>
                    <textarea style={style} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100 py-2"><button type="button" className="btn btn-primary w-25">送出</button></div>
        </div>
    </Fragment>)


    // list listItem
}
export default ClinicDetail