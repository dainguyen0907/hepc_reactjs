import React from "react";
import { Link } from "react-router-dom";

class cardPostHorizontalMini extends React.Component {
    render() {
        return (
            <div className="w-full p-2 ">
                <div className="border rounded-md bg-white max-h-20">
                    <Link to="/">
                        <div className="px-2 py-3 text-justify overflow-hidden">
                            <small className="">(01/01/2023)</small>
                            <h4 className="uppercase font-medium text-center">Tiêu đề</h4>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default cardPostHorizontalMini;