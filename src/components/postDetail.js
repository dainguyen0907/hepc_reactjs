import React from "react";
import parse from "html-react-parser";

class postDetail extends React.Component {
    render() {
        return (
            <div className="py-5 w-full">
                <h1 className=" text-2xl uppercase">{this.props.heading}</h1>
                <p className="text-end">({new Date(this.props.createdAt).toLocaleString('vn-VN', { day: "2-digit", month: "2-digit", year: "numeric" })})</p>
                {parse(this.props.content)}
                {this.props.file?<iframe src={this.props.file} width="100%" height="1080" title="File bài viết"></iframe>:''}
            </div>
        );
    }
}

export default postDetail;