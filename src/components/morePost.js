import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
class morePost extends React.Component{
    state={
        article:[]
    }
    componentDidUpdate(){
        if(this.props.id&&this.props.catalogue)
        {
        let link="http://localhost:8080/api/moreArticle?id="+this.props.id+"&catalogue="+this.props.catalogue;
        axios.get(link)
        .then(res=>this.setState({article:res.data}))
        .catch(error=>console.log(error));
        }
    }
    render(){
        return(
            <div className="w-full text-justify py-5">
                <hr className="border"/>
                Xem thêm:
                <ul>
                    {this.state.article.map((a,key)=><li className="hover:text-blue-500"><Link to={a.article_link}><FontAwesomeIcon icon={faPlus}/> {a.article_heading}</Link></li>)}
                </ul>
            </div>
        );
    }
}
export default morePost;