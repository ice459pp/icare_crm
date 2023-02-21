import React, { Fragment, useState, useRef } from "react";
import { Route,useHistory } from "react-router-dom";


const UserLogin = () => {
    let emailRef = useRef()
    let passwordRef = useRef()
    const goPath = useHistory();//設常數接收useHistory()回傳的物件
    const submitHandler = (event) => {
        event.preventDefault();
        let email=emailRef.current.value
        let password=passwordRef.current.value
        if (!email || !password) {
            return
        }
        goPath.push(`/`)
    }
    // const [email, setEmail] = useState("");
    return (<div className="container h-100 d-flex justify-content-center align-items-center">
        <form className="w-25" onSubmit={submitHandler} >
            <div className="mb-3">
                <label className="form-label"
                >Email address</label
                >
                <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label"
                >Check me out</label
                >
            </div>
            <button type="submit" className="btn btn-primary w-100">登入</button>
        </form>
    </div>)
}

export default UserLogin;


