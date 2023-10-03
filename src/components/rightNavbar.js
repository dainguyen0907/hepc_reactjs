import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
class rightNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toLocaleString('vn-VN', { weekday: "long", day: "2-digit", month: "2-digit", year: "2-digit" }) + " " + new Date().toLocaleTimeString(),
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    updateClock() {
        this.setState({
            now: new Date().toLocaleString('vn-VN', { weekday: "long", day: "2-digit", month: "2-digit", year: "2-digit" }) + " " + new Date().toLocaleTimeString(),
        });
    }
    render() {
        return (
            <div className="w-full">
                <div className="text-center py-5">
                    <p>{this.state.now}</p>
                    <span className="text-2xl font-bold">CHUYÊN MỤC</span>
                </div>
                <div className="px-5">
                    <ul>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Giới thiệu</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tin tức</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Thông báo</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển sinh</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Tuyển dụng</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Hoạt động đoàn</Link></li>
                        <li className="border-t-2 py-2"><Link to="/#"><FontAwesomeIcon icon={faAnglesRight}/> Công đoàn</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default rightNavbar;