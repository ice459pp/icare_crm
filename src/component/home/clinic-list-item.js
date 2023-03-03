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
        goPath.push(`/clinic/${item.id}`)
    }
    return (<Fragment>
        <tr className="align-middle">
            <th data-th="診所名(機構代碼):" scope="row">
                <div>沂河診所</div>
                <div>1115127</div>
            </th>
            <td className="td-address" data-th="地址:">
                <section>
                    <div>台北市/大安區</div>
                    <div>瑞光路4段18號5-5</div>
                </section>
            </td>
            <td data-th="電話:">(02)5566-8844</td>
            <td data-th="拜訪人:">嗚嗚嗚</td>
            <td data-th="日期:">2022/09/25</td>
            <td className="buttonIcon">
                  <button onClick={pushClinicDetail} className="btn w-100 btn-dark">查看更多 <FontAwesomeIcon icon="fas fa-plus" /></button></td>
        </tr>
    </Fragment>)


    // list listItem
}
export default ClinicListItem