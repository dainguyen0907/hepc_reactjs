import React from "react";

class cardPostHorizontalMini extends React.Component {
    render() {
        return (
            <div className="w-full p-2 ">
                <div className="border rounded-md bg-white max-h-20">
                    <a href={this.props.link}>
                        <div className="px-2 py-3 text-justify overflow-hidden">
                            <small className="">({new Date(this.props.date).toLocaleString('vn-VN', { day: "2-digit", month: "2-digit", year: "2-digit" })})</small>
                            <h4 className="uppercase font-medium text-center">{this.props.heading}</h4>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default cardPostHorizontalMini;