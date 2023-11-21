
import { faFireAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class newAnouncement extends React.Component {
    state={
        article:[],
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/announcement?value=5")
        .then(res=>{
            if(res.data!=null){this.setState({article:res.data})}
        }).catch(error=>console.log(error));
    }
    render() {
        return (
            <div className="w-full">
                <div className="text-center py-5">
                    <span className="text-2xl font-bold">THÔNG BÁO MỚI NHẤT</span>
                </div>
                <div className="px-5">
                    <ul>
                        {this.state.article.map((value)=>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to={"/"+value.article_link}><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> {value.article_heading}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default newAnouncement;