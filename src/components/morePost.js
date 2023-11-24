import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
class morePost extends React.Component{
    state={
        article:[]
    }
    componentDidUpdate(){
        if(this.props.id&&this.props.id_catalogue)
        {
        let link="http://localhost:8080/api/moreArticle?id="+this.props.id+"&catalogue="+this.props.id_catalogue;
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
                    {this.state.article.map((a,key)=><li className="hover:text-blue-500"><a href={"/"+this.props.catalogue+"/"+a.article_link}><FontAwesomeIcon icon={faPlus}/> {a.article_heading}</a></li>)}
                </ul>
            </div>
        );
    }
}
export default morePost;