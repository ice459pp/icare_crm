import React, { Fragment ,useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../scss/home.scss"
import "../scss/approved.scss";
import ApprovedItem from "../component/approved/approved-item";
import { useHistory } from "react-router-dom";
import appSlice from "../store/app-slice";
import { useSelector } from "react-redux";

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
// function getRowClassName(index) {
//     console.log(index,"index")
//     if ((Math.floor(index / 4) % 2) === 0) {
//       return 'table-primary';
//     } else {
//       return 'table-secondary';
//     }
//   }
const Approved = () => {
    const navigate = useHistory()
    const appSlice = useSelector(state => state.appSlice)
    useEffect(() => {
        if (!appSlice.isLogin) {
            navigate.push("/login");
        }    
    }, [])
    return (
        <div className="w-100 approved-page mt-3">
            <h4 className="text-center fw-bolder text-dark">待核可列表</h4>
            {/* map */}
            {/* <table className="table table-striped table-hover border-dark">
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
                    {arrayLog.map((item, index) => <ApprovedItem item={item} key={item.id} index={index}></ApprovedItem>)}
                </tbody>
            </table> */}
            {arrayLog.map((item, index) => <ApprovedItem item={item} key={item.id} index={index}></ApprovedItem>)}

            {/* <>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    click
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </> */}
        </div >
    )
}
export default Approved