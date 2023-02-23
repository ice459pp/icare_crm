import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from "../component/home/search";
import "../scss/home.scss"
import ClinicListItem from "../component/home/clinic-list-item"
const qqq = [
    {
        id: "qqqq",
        name: "ereede"
    },
    {
        id: "qqqggeq",
        name: "ereede"
    },
    // {
    //     id: "qqqweqq",
    //     name: "ereede"
    // },
    // {
    //     id: "qqtgqweqq",
    //     name: "ereede"
    // },
    // {
    //     id: "qqqwqewqeweqweqq",
    //     name: "ereede"
    // },
    // {
    //     id: "qqqqfffffffffqwqwe",
    //     name: "ereede"
    // },
]
const Home = () => {
    // search13
    return (<Fragment>
        <div className="w-100 px-4">
            <Search></Search>
        </div>
        <div className="w-100 px-4 mt-3">
            <h4 className="text-center fw-bolder text-dark">診所列表</h4>
            <table className="table table-striped table-hover table-bordered  border-dark table-rwd">
                <thead>
                    <tr className="bg-secondary text-white tr-only-hide">
                        <th scope="col">診所名(機構代碼)</th>
                        <th scope="col">地址</th>
                        <th scope="col">電話</th>
                        <th scope="col">拜訪人</th>
                        <th scope="col">日期</th>
                        <th width="5"></th>
                    </tr>
                </thead>
                <tbody>
                    {qqq.map(item => <ClinicListItem key={item.id} item={item}></ClinicListItem>)}
                </tbody>
            </table>
        </div>
    </Fragment>)


    // list listItem
}
export default Home