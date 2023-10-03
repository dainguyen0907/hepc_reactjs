import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
class morePost extends React.Component{
    render(){
        return(
            <div className="w-full text-justify py-5">
                <hr className="border"/>
                Xem thêm:
                <ul>
                    <li><Link><FontAwesomeIcon icon={faPlus}/> Thông báo mới 1</Link></li>
                    <li><Link><FontAwesomeIcon icon={faPlus}/> Thông báo mới 1</Link></li>
                    <li><Link><FontAwesomeIcon icon={faPlus}/> Thông báo mới 1</Link></li>
                    <li><Link><FontAwesomeIcon icon={faPlus}/> Thông báo mới 1</Link></li>
                    <li><Link><FontAwesomeIcon icon={faPlus}/> Thông báo mới 1</Link></li>
                </ul>
            </div>
        );
    }
}
export default morePost;