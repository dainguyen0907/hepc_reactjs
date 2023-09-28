import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.scss";

class navbar extends React.Component {
    state={
        statusButton:true,
        class:"items-center uppercase text-white justify-center lg:flex hidden",
        navbarClass:"bg-sky-500 relative z-50 ",
    }

    onHandleButton=()=>{
        this.setState({
            statusButton:!this.state.statusButton
        })
        if(this.state.statusButton)
        {
            this.setState({class:"items-center uppercase text-white justify-center lg:flex block"});
        }else
        {
            this.setState({class:"items-center uppercase text-white justify-center lg:flex hidden"});
        }
    }
    onScrollWindow=()=>{
        if(window.scrollY>=150)
        {
            this.setState({navbarClass:"bg-sky-500 w-full z-50 fixed top-0 left-0"});
        }
        else{
            this.setState({navbarClass:"bg-sky-500 relative z-50"});
        }
    }

    componentDidMount=()=>{
        window.addEventListener('scroll',this.onScrollWindow)
    }

    componentWillUnmount=()=>{
        window.removeEventListener('scroll',this.onScrollWindow)
    }

    render() {
        return (
            <div className={this.state.navbarClass} >
                <nav className='container mx-auto 2xl:px-40'>
                    <button className="text-white lg:hidden p-4 button-menu" onClick={(e)=>this.onHandleButton()}><FontAwesomeIcon icon={faBars}/></button>
                    <ul className={this.state.class} >
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out "><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Giới thiệu
                            <ul className="dropdown-menu">
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Sơ đồ tổ chức</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Lịch sử hình thành</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Thành tích</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Sứ mạng</li>
                            </ul>
                        </li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Chuyên trang
                            <ul className="dropdown-menu">
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Thời khoá biểu</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Lịch thi</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Biểu mẫu</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">3 Công khai</li>
                            </ul>
                        </li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Khoa chuyên ngành
                            <ul className="dropdown-menu">
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa hệ thống điện</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa kỹ thuật cơ sở</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa điện công nghiệp</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa khoa học cơ bản -kinh tế</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa kỹ thuật cơ sở</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa công nghệ điện tử - tự động hoá</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Khoa đào tạo nâng cao</li>
                            </ul>
                        </li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Phòng - trung tâm
                            <ul className="dropdown-menu">
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Phòng đào tạo</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Phòng tổ chức</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Phòng kế hoạch tài chính</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Phòng quản lý khách hàng - quan hệ quốc tế</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Phòng quản lý sinh viên - học sinh</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Trung tâm ngoại ngữ - tin học</li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out">Trung tâm công nghệ năng lượng</li>
                            </ul>
                        </li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out">Tuyển sinh</li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out">Tra cứu văn bằng</li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out">liên hệ</li>
                        <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><FontAwesomeIcon icon={faSearch} /></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default navbar;