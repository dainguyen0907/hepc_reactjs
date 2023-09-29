import React from "react";
import CardPost from "./cardPost";
import { Link } from "react-router-dom";

class catalogue extends React.Component {
    state = {
        catalogueName: this.props.catalogueName,
    }
    render() {
        return (
            <>
                <div className="bg-sky-500 text-center">
                    <strong className="text-2xl text-white">{this.state.catalogueName}</strong>
                </div>
                <div className="container mx-auto 2xl:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>

                    <div className="my-5 text-center">
                        <Link to="/" className="hover:bg-white hover:text-sky-500 duration-300 ease-in-out border 
                        border-sky-500 rounded-lg p-2 my-2 text-white bg-sky-500 font-bold">
                            Xem thêm</Link>
                    </div>
                </div>

            </>

        )
    }
}

export default catalogue;