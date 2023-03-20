import React,{Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { appAction } from "../store/app-slice";
const Navbar=(props)=>{
    // console.log(props,"psss")
    const appSlice = useSelector(state => state.appSlice)
    const dispatch = useDispatch()
    const showMenuHandler=()=>{
        props.showMenu()
    }

    const logoutHandler = () => {
        dispatch(appAction.logout())
    }

    return (
        <Fragment>
            
        <nav className="py-2 px-1">
            <NavLink activeClassName="btn-info text-white" onClick={showMenuHandler}
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder "
                exact to="/"> <FontAwesomeIcon className="pe-2" icon="fas fa-search" />搜尋</NavLink>
            <NavLink activeClassName="btn-info text-white" onClick={showMenuHandler}
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder "
                to="/approved"><FontAwesomeIcon className="pe-2" icon="far fa-check-circle" />核可</NavLink>

            {appSlice.isLogin && <NavLink activeClassName="btn-info text-white" onClick={logoutHandler}
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder "
                to="/login"><FontAwesomeIcon className="pe-2" icon="far fa-check-circle" />登出</NavLink>}
        </nav>

        </Fragment>
    )
}
export default Navbar