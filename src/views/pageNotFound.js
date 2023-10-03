import React from "react";
import pageImage from "../assets/image/404.jpg";

class pageNotFound extends React.Component{
    render(){
        return(
            <div className="text-center text-5xl pb-10">
            <img src={pageImage} alt="Page not found" className="w-1/2 block mx-auto"/>
            <strong>Trang bạn đang tìm kiếm không tồn tại</strong>
            </div>
        );
    }
}

export default pageNotFound;