import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
import { useHistory, Link } from "react-router-dom";
const ClinicListItem = (props) => {
    // ClinicListItem13
    let { item } = props
    const goPath = useHistory();//設常數接收useHistory()回傳的物件
    const pushClinicDetail = () => {
        console.log("qwqwedqed")
        goPath.push(`/clinic_Detail/${item.id}`)
    }
    return (<Fragment>
        <tr className="align-middle">
            <th scope="row">
                <div>沂河診所</div>
                <div>1115127</div>
            </th>
            <td>
                <div>
                    <div>台北市/大安區</div>
                    <div>瑞光路4段18號5-5</div>
                </div>
            </td>
            <td>(02)5566-8844</td>
            <td>嗚嗚嗚</td>
            <td>2022/09/25</td>
            <td>  <button onClick={pushClinicDetail} className="btn btn-dark rounded-circle"><FontAwesomeIcon icon="fas fa-plus" /></button></td>
        </tr>
    </Fragment>)


    // list listItem
}
export default ClinicListItem