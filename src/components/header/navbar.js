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
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-HTD">Khoa hệ thống điện</a> </li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-KTCS">Khoa kỹ thuật cơ sở</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-DCN">Khoa điện công nghiệp</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-KHCB-KT">Khoa khoa học cơ bản -kinh tế</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-CNDT-TDH">Khoa công nghệ điện tử - tự động hoá</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-khoa-DTNC">Khoa đào tạo nâng cao</a></li>
                            </ul>
                        </li>
                        <li className="lg:border-r-2 border-dashed border-white p-2 lg:hover:bg-blue-500 lg:hover:scale-105 transition duration-300 ease-in-out cursor-pointer dropdown">
                            Phòng - trung tâm
                            <ul className="dropdown-menu">
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-phong-dao-tao">Phòng đào tạo</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-phong-KHTC">Phòng kế hoạch tài chính</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-phong-QLKH-QHQT">Phòng quản lý khách hàng - quan hệ quốc tế</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-phong-QLHSSV">Phòng quản lý sinh viên - học sinh</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-TT-NNTH">Trung tâm ngoại ngữ - tin học</a></li>
                                <li className="p-2 lg:hover:bg-blue-500 lg:hover:scale-105 duration-300 ease-in-out"><a href="/Tin-tuc-TT-CNNL">Trung tâm công nghệ năng lượng</a></li>
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