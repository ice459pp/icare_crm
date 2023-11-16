import { useEffect } from "react";
import { apiClinicCounts } from "../api/api-clinic-counts";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../scss/count.scss";
const Counts = () => {
  const appSlice = useSelector((state) => state.appSlice);
  const [clinic, setClinic] = useState(0);
  const [patient, setpatient] = useState(0);
  const [register, setRegister] = useState(0);
  
  // const [reloadPage, setReloadPage] = useState(false);
  
  useEffect(() => {
    if (appSlice.isLogin) {
      // fetch log api
      const token = appSlice.userToken;
      apiClinicCounts(
        token,
        (err) => {
          alert(err);
        },
        (data) => {
          setClinic(data.clinic);
          setpatient(data.patient);
          setRegister(data.register)
        }
      );
    }
  }, [clinic, patient,register]);
  const reLoadHandler=()=>{
    window.location.reload()
  }
  return (
    <div className="px-3 py-3 text-dark fw-bolder bg-light fs-5">
      <div>
        診所數: <span className="px-1">{clinic}</span>
      </div>
      <div>
        病患數: <span className="px-1">{patient}</span>
      </div>
      <div>
        每日預約數: <span className="px-1">{register}</span>
      </div>
      <button className="btn btn-outline-primary mt-3 reload_btn" onClick={reLoadHandler}>重新載入</button>
    </div>
  );
};
export default Counts;
