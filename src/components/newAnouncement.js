
import { faFireAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

class newAnouncement extends React.Component {
    render() {
        return (
            <div className="w-full">
                <div className="text-center py-5">
                    <span className="text-2xl font-bold">THÔNG BÁO MỚI NHẤT</span>
                </div>
                <div className="px-5">
                    <ul>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> Thông báo mới</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> Thông báo mới</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> Thông báo mới</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> Thông báo mới</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faFireAlt} className="text-red-500"/> Thông báo mới</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default newAnouncement;