import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class rightCatalogue extends React.Component{
    state={
        catalogue:[]
    }
    componentDidUpdate(){
        if(this.props.department){
            axios.get("http://localhost:8080/api/catalogue?id_department="+this.props.department)
            .then(res=>this.setState({catalogue:res.data}))
            .catch(error=>console.log(error));
        }
    }
    render(){
        return (
            <div className="w-full bg-gray-200 border rounded-lg ml-3">
                <div className="px-5">
                    <ul>
                        {this.state.catalogue.map((data,key)=><li className="border-t-2 first:border-0 border-gray-300 py-2 hover:text-blue-500"><Link to={"/"+data.catalogue_link}><FontAwesomeIcon icon={faAnglesRight}/>{data.catalogue_name}</Link></li>)}  
                    </ul>
                </div>
            </div>
        );
    }
}

export default rightCatalogue;