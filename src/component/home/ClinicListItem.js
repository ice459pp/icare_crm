import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClinicListItem = (props) => {
  const navigate = useNavigate();

  const { item } = props;
  const { extra } = item;

  const navigateHandler = () => {
    navigate(`/clinic/${item.id}`);
  };

  return (
    <Fragment>
      <tr className="align-middle">
        <th scope="row">
          <div>{item.clinic} </div>
        </th>
        <td>
          <div>{item.address}</div>
          <div>
            <a href={`${item.phone}`}>{item.phone}</a>
          </div>
        </td>
        <td data-th="">
          <div>HIS({extra.his})</div>
        </td>
        <td>
          <div>
            {extra.is_visit ? "可預約時間" : "不可預約"}
          </div>
        </td>
        <td>
          <div>{extra.use_video ? "使用中" : "未使用"}</div>
        </td>
        <td>
          <div>{extra.is_join_care ? "已加入照護網" : "未加入照護網"}</div>
          <div>{extra.queue && "叫號方式"}</div>
          <div>{extra.license && "其他醫院執業"}</div>
          <div>{extra.group && "醫療群"}</div>
          <div>醫師人數 : {extra.people > 0 ? `${extra.people}` : 0}</div>
        </td>
        <td>
          <div>{item.visit.name}</div>
          <div>{item.visit.datetime}</div>
        </td>
        <td className="buttonIcon">
          <button onClick={navigateHandler} className="btn w-100 btn-dark">
            拜訪紀錄
          </button>
        </td>
      </tr>
    </Fragment>
  );
};
export default ClinicListItem;
