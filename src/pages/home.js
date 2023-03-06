import React, { Fragment,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from "../component/home/Search";
import "../scss/home.scss"
import ClinicListItem from "../component/home/ClinicListItem";
import PaginationUI from "../component/home/Pagination";
import { Button } from "react-bootstrap";
const DUMMY_DATA = [
    {
        id: "c1",
        clinic: "沂河診所1",
        phone: "0912345678",
        address:"台北市內湖區瑞光路4段18號5-5", 
        code: "350030303",
        visit: {
            name: "許瑋芯", 
            datetime: "2022/11/23 10:30"
        }, 
        extra: {
            his: '1', 
            use_video: false,
            is_visit: false,
            is_join_care: false,
            is_dr_decide: false, 
            queue: '',
            license: '',
            group: '',
            people: 0
        }
    },
    {
        id: "c2",
        clinic: "沂河診所2",
        phone: "0912345678",
        address:"台北市內湖區瑞光路4段18號5-5", 
        code: "350030303",
        visit: {
            name: "許瑋芯", 
            datetime: "2022/11/21 09:30"
        }, 
        extra: {
            his: '1', 
            use_video: false,
            is_visit: true,
            is_join_care: false,
            is_dr_decide: false, 
            queue: '',
            license: '',
            group: '',
            people: 0
        }
    }
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
        // false 順
        // true 逆
        setDateSort(!dateSort)
    }
    return (
    <Fragment>
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
                        <th scope="col">名稱</th>
                        <th scope="col">資訊</th>
                        <th scope="col">使用系統</th>
                        <th scope="col">預約拜訪</th>
                        <th scope="col">視訊</th>
                        <th scope="col">其他</th>
                        <th scope="col">最新拜訪</th>
                        <th style={{}}></th>
                    </tr>
                </thead>
                <tbody>
                    {DUMMY_DATA.map(item => <ClinicListItem key={item.id} item={item}></ClinicListItem>)}
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