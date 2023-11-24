import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
class rightNavbar extends React.Component {
    render() {
        return (
            <div className="w-full">
                <div className="text-center py-5">
                    <span className="text-2xl font-bold">CHUYÊN MỤC</span>
                </div>
                <div className="px-5">
                    <ul>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/gioi-thieu-HEPC"><FontAwesomeIcon icon={faAnglesRight}/> Giới thiệu</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/tin-tuc-HEPC"><FontAwesomeIcon icon={faAnglesRight}/> Tin tức</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/thong-bao-HEPC"><FontAwesomeIcon icon={faAnglesRight}/> Thông báo</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/tuyen-sinh"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển sinh</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/tuyen-dung"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển dụng</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/tin-tuc-doan-thanh-nien"><FontAwesomeIcon icon={faAnglesRight}/> Hoạt động đoàn</a></li>
                        <li className="border-t-2 py-2 hover:text-blue-500"><a href="/tin-tuc-cong-doan"><FontAwesomeIcon icon={faAnglesRight}/> Công đoàn</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default rightNavbar;