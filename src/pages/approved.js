import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../scss/home.scss"
import "../scss/approved.scss";
import ApprovedItem from "../component/approved/approved-item";
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
const Approved = () => {
    return (
            <div className="w-100 px-4 mt-3">
            <h4 className="text-center fw-bolder text-dark">診所列表</h4>
            {/* map */}
            <table className="table table-striped table-hover border-dark">
                <thead className="table-dark text-white">
                    <tr >
                        <th scope="col">診所名(機構代碼)</th>
                        <th scope="col">拜訪日期</th>
                        <th scope="col">推薦人</th>
                        <th scope="col">狀態列</th>
                        <th scope="col" className="text-center" >查看更多</th>
                        <th scope="col" className="text-center" >其他</th>
                        <th scope="col" className="text-center" >核可</th>
                    </tr>
                </thead>
                <tbody>
                {arrayLog.map(item=><ApprovedItem item={item} key={item.id}></ApprovedItem>)}
                </tbody>
            </table>
        </div>
    )
}
export default Approved