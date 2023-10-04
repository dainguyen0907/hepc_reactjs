import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
class rightNavbar extends React.Component {
    render() {
        return (
            <div className="w-full">
                <div className="text-center py-5">
                    <span className="text-2xl font-bold">CHUYÊN MỤC</span>
                </div>
                <div className="px-5">
                    <ul>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Giới thiệu</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tin tức</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Thông báo</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển sinh</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển dụng</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Hoạt động đoàn</Link></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Công đoàn</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default rightNavbar;