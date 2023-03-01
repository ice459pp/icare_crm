import React, { Fragment,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from "../component/home/search";
import "../scss/home.scss"
import ClinicListItem from "../component/home/clinic-list-item";
import PaginationUI from "../component/home/Pagination";
import { Button } from "react-bootstrap";
const qqq = [
    {
        id: "qqqq",
        name: "ereede"
    },
    {
        id: "qqqggeq",
        name: "ereede"
    },
    {
        id: "qqqweqq",
        name: "ereede"
    },
    {
        id: "qqtgqweqq",
        name: "ereede"
    },
    {
        id: "qqqwqewqeweqweqq",
        name: "ereede"
    },
    {
        id: "qqqqfffffffffqwqwe",
        name: "ereede"
    },
]
const w25 = {
    width: "25%"
}
const w10 = {
    width: "10%"
}
const w5 = {
    width: "5%"
}
const Home = () => {
    const [dateSort, setDateSort] = useState(false);
    const dateSortHandler=()=>{
        setDateSort(!dateSort)
    }
    // search13
    return (<Fragment>
        <div className="w-100 mt-3 padding-RWD">
            <Search></Search>
        </div>
        <div className="w-100 padding-RWD mt-3">
            <h4 className="text-center fw-bolder text-dark">診所列表</h4>
            <div className="d-flex align-items-end tableSort mb-2">
                <div className="me-3 text-dark fw-bold">3 / 15 頁 ，共500筆</div>
                <Button variant="secondary" onClick={dateSortHandler}  size="sm">日期排序{dateSort ?<FontAwesomeIcon className="ms-2" icon="fas fa-arrow-down" />:<FontAwesomeIcon className="ms-2" icon="fas fa-arrow-up" />} </Button>{' '}
            </div>
            <table className="table table-striped table-hover table-bordered  border-dark table-rwd">

                <thead>
                    <tr className="bg-secondary text-white tr-only-hide">
                        <th scope="col">診所名(機構代碼)</th>
                        <th scope="col">地址</th>
                        <th scope="col"  >電話</th>
                        <th scope="col" >拜訪人</th>
                        <th scope="col">日期</th>
                        <th style={{}}></th>
                    </tr>
                </thead>
                <tbody>
                    {qqq.map(item => <ClinicListItem key={item.id} item={item}></ClinicListItem>)}
                </tbody>
            </table>
        </div>
        <div className="d-flex justify-content-center w-100">
            <PaginationUI></PaginationUI>
        </div>
    </Fragment>)


    // list listItem
}
export default Home