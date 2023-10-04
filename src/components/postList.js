import React from "react";
import CardPost from "./cardPost";

class postList extends React.Component{
    render(){
        return(
            <div className="w-full grid grid-cols-1 md:grid-cols-3">
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
            </div>
        );
    }
}

export default postList;