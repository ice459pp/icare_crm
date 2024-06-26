import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { qaFilterAction } from "../../store/qa-filter-slice";

const QaSearchFilter = (props) => {
    let dispatch = useDispatch();
    let qaKeywordRef = useRef(null);
    const [isKeyword, setIsKeyword] = useState(false);
    let qaFilterSlice = useSelector((state) => state.qaFilterSlice);
    let { searchText } =  qaFilterSlice;

    useEffect(()=>{
        if (searchText){
            qaKeywordRef.current.value = searchText;
            setIsKeyword(true);        
        } else {
            setIsKeyword(false);
        }
    },[searchText]);

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          searchTextHandler();
        }
    };

    const searchTextHandler = () => {
        if(!qaKeywordRef.current.value) {
            return;
        }
        let value = qaKeywordRef.current.value || "";
        props.onSearchText(value);
        setIsKeyword(true);
    };

    const resetHandler = () =>{
        qaKeywordRef.current.value = "";
        props.onSearchText("");
        dispatch(qaFilterAction.resetState());
        setIsKeyword(false);
    };

    return (
        <Fragment>
            <InputGroup className="input-group-textSearch" size="">
                <Form.Control
                    placeholder="搜尋標題"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    defaultValue={sessionStorage.getItem("searchText")}
                    ref={qaKeywordRef}
                    onKeyPress={handleInputKeyPress}
                />
            <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={searchTextHandler}
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
          {isKeyword && (
            <button
              className="btn btn-danger text-white "
              type="button"
              id="button-addon2"
              onClick={resetHandler}
            >
              <FontAwesomeIcon className="" icon="fa-solid fa-xmark" />
            </button>
          )}
            </InputGroup>
        </Fragment>
    )
};

export default QaSearchFilter;