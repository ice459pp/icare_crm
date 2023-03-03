import React,{Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Navbar=(props)=>{
    // console.log(props,"psss")
    const showMenuHandler=()=>{
        props.showMenu()
    }
    return (
        <Fragment>
            
        <nav className="py-2 px-1">
            <NavLink activeClassName="btn-info text-white" onClick={showMenuHandler}
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder "
                exact to="/icare_crm/"> <FontAwesomeIcon className="pe-2" icon="fas fa-search" />搜尋</NavLink>
            <NavLink activeClassName="btn-info text-white" onClick={showMenuHandler}
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder "
                to="/icare_crm/approved"><FontAwesomeIcon className="pe-2" icon="far fa-check-circle" />核可</NavLink>
        </nav>

        </Fragment>
    )
}
export default Navbar