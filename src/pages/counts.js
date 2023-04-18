import { useEffect } from "react";
import { apiClinicCounts } from "../api/api-clinic-counts";
import { useSelector } from "react-redux";
import { useState } from "react";
const Counts = () => {
  const appSlice = useSelector((state) => state.appSlice);
  const [clinic, setClinic] = useState(0);
  const [patient, setpatient] = useState(0);
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
        }
      );
    }
  }, [clinic, patient]);

  return (
    <div className="px-3 py-3 text-dark fw-bolder bg-light fs-5">
      <div>
        診所數: <span className="px-1">{clinic}</span>
      </div>
      <div>
        病患人數: <span className="px-1">{patient}</span>
      </div>
    </div>
  );
};
export default Counts;
