import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

class navbar extends React.Component {
    state={
        active:false,
        position:-1,
    };
    onHandleItem=(index)=>{
        this.setState({
            active:true,
            position:index,
        })
    }
    render() {
        return (
            <div  className="bg-sky-500">
                <nav className='container mx-auto 2xl:px-40'>
                    <ul className="flex items-center uppercase text-white justify-center">
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out "><a href="#"><FontAwesomeIcon icon={faHome}/></a></li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Giới thiệu
                            <ul className="dropdown-menu">
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Sơ đồ tổ chức</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Lịch sử hình thành</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Thành tích</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Sứ mạng</li>
                            </ul>
                        </li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Chuyên trang
                            <ul className="dropdown-menu">
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Thời khoá biểu</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Lịch thi</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Biểu mẫu</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">3 Công khai</li>
                            </ul>
                        </li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Khoa chuyên ngành
                            <ul className="dropdown-menu">
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa hệ thống điện</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa kỹ thuật cơ sở</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa điện công nghiệp</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa khoa học cơ bản -kinh tế</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa kỹ thuật cơ sở</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa công nghệ điện tử - tự động hoá</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Khoa đào tạo nâng cao</li>
                            </ul>
                            </li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Phòng - trung tâm
                            <ul className="dropdown-menu">
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Phòng đào tạo</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Phòng tổ chức</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Phòng kế hoạch tài chính</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Phòng quản lý khách hàng - quan hệ quốc tế</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Phòng quản lý sinh viên - học sinh</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Trung tâm ngoại ngữ - tin học</li>
                                <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out">Trung tâm công nghệ năng lượng</li>
                            </ul>
                            </li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out">Tuyển sinh</li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out">Tra cứu văn bằng</li>
                        <li className="border-r-2 border-dashed border-white p-2 hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out">liên hệ</li>
                        <li className="p-2 hover:bg-blue-500 hover:scale-105 duration-300 ease-in-out"><FontAwesomeIcon icon={faSearch}/></li>    
                    </ul>
                </nav>

            </div>
        );
    }
}

export default navbar;