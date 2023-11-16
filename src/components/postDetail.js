import axios from "axios";
import React from "react";

class postDetail extends React.Component {
    state={
        article:{}
    };
    componentDidMount(){
        axios.get(this.props.link)
        .then(res=>{
            if(res.data!=null){this.setState({article:res.data})}
        }).catch(error=>console.log(error));
    }
    render() {
        return (
            <div className="py-5 w-full">
                <h1 className=" text-2xl">{this.state.article['article_heading']}</h1>
                <p className="text-end">({new Date(this.state.article['createdAt']).toLocaleString('vn-VN', { day: "2-digit", month: "2-digit", year: "2-digit" })})</p>
                {this.state.article['article_content']}
            </div>
        );
    }
}

export default postDetail;