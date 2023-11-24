import React from "react";
import image from "../assets/image/logo.png";

class cardPost extends React.Component {
    render() {
        return (
            <div className="w-full p-2 ">
                <div className="border rounded-md bg-white border-gray-300">
                    <img src={this.props.img?this.props.img:image} alt={this.props.heading} className="w-full aspect-[2/1] object-cover" />
                    <a href={this.props.link}>
                        <div className="p-5 text-justify">
                            <small className="">({new Date(this.props.date).toLocaleString('vn-VN', { day: "2-digit", month: "2-digit", year: "2-digit" })})</small>
                            <h4 className="uppercase font-medium text-center">{this.props.heading}</h4>
                            <div className="max-h-48 overflow-hidden">
                                {this.props.summarize?this.props.summarize:'Không có nội dung'}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default cardPost;