import React from "react";
import CardPost from "./cardPost";

class catalogue extends React.Component {
    render() {
        return (
            <>
                <div className="bg-sky-500 text-center">
                    <strong className="text-2xl text-white">Tin tức</strong>
                </div>
                <div className="container mx-auto 2xl:px-40 grid grid-cols-4">
                    <CardPost/>
                </div>
            </>

        )
    }
}

export default catalogue;