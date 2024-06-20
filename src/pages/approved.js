import React, { useEffect } from "react";
import "../scss/home.scss";
import "../scss/approved.scss";
import ApprovedItem from "../component/approved/approved-item";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

let arrayLog = [
  {
    id: "qwdqwqwde",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdwqeqweqweqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwderqwwqqwrqwerqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdqwerqwere",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdffffffffffe",
    name: "sdssaf",
  },
];
const Approved = () => {
  const navigate = useHistory();
  const appSlice = useSelector((state) => state.appSlice);

  useEffect(() => {
    if (!appSlice.isLogin) {
      navigate.push("/login");
    }
  }, []);
  return (
    <div className="w-100 approved-page mt-3">
      <h4 className="text-center fw-bolder text-dark">待核可列表</h4>
      {arrayLog.map((item, index) => (
        <ApprovedItem item={item} key={item.id} index={index}></ApprovedItem>
      ))}
    </div>
  );
};
export default Approved;
