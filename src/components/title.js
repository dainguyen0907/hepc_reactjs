import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "../assets/image/banner_page.jpg"
import React from "react";
import { Link } from "react-router-dom";

class title extends React.Component {
    render() {
        return (
            <div className="text-center object-cover object-center text-white py-5" style={{backgroundImage:`url(${bgImage})`}}>
                <p><strong>{this.props.title}</strong></p>
                <p><strong><Link to="/">Trang chủ</Link> <FontAwesomeIcon icon={faAnglesRight} /><Link to={"../"+this.props.catalogue}>{this.props.title}</Link> </strong></p>
            </div>
        );
    }
}

export default title;