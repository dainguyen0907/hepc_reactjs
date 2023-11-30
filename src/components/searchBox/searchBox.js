import React, { useState } from "react";
import "./searchbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { toggle } from "../../reducers/setStatusSearchBox";
import { useNavigate } from "react-router-dom";
import { search } from "../../reducers/searchArticles";


const App = () => {
    const status = useSelector((state) => state.statusSearchBox.value);
    const dispatch = useDispatch();
    let keyword=useSelector((state) => state.searchArticles.value);
    const [searchValue,setSearchValue]=useState(keyword);
    const navigate=useNavigate();
    const handleSumit=(e)=>{
        dispatch(search(searchValue));
        navigate('/tim-kiem/'+searchValue);
    }
    return (
        <div className={"searchBox " + status}>
            <form onSubmit={(e)=>handleSumit(e)}>
                <div className="relative">
                    <div className="absolute text-white top-3 right-3 cursor-pointer text-5xl"><FontAwesomeIcon icon={faX} onClick={() => { dispatch(toggle()) }} /></div>
                    <input type="text" placeholder="Tìm kiếm" className="searchInput" value={searchValue} onInput={e=>setSearchValue(e.target.value)}/>
                    <button type="submit" className="searchIcon"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>

        </div>
    );

}

export default App;