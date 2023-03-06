import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <Fragment>
      <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
        <div className="h4 m-0">iCare_CRM</div>
      </div>

      <div className="w-100 d-flex">
        <div className="h-100 Navbar"></div>
      </div>
    </Fragment>
  );
};

export default NavBar;
