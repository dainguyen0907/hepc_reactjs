import React from "react";
import image from "../assets/image/logo.png";
import { Link } from "react-router-dom";

class cardPost extends React.Component {
    render() {
        return (
            <div className="w-full p-2 ">
                <div className="border rounded-md bg-white border-gray-300">
                    <img src={this.props.img?this.props.img:image} alt={this.props.heading} className="w-full aspect-[2/1] object-cover" />
                    <Link to="/">
                        <div className="p-5 text-justify">
                            <small className="">({this.props.date?this.props.date:'01/01/2023'})</small>
                            <h4 className="uppercase font-medium text-center">{this.props.heading}</h4>
                            <div className="max-h-48 overflow-hidden">
                                {this.props.summarize?this.props.summarize:'Không có nội dung'}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default cardPost;