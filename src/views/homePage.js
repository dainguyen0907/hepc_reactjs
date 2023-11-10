import React from "react";
import Carousel from "../components/caroulse";
import Introduce from "../components/introduce";
import Catalogue from "../components/catalogue";
import Admission from "../components/admission";
import Videos from "../components/videos";
import axios from "axios";

class homePage extends React.Component{
    state={
        article:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/hot-articles')
        .then(res=>{
            console.log(res.data);
            const article=res.data;
            this.setState({article});
        }).catch(error=>console.log(error));
    }
    render(){
        return (
            <>
            <Carousel/>
            <Introduce/>
            <Catalogue catalogueName="Tin tức" article={this.state.article}/>
            <Catalogue catalogueName="Thông báo"/>
            <Admission />
            <Videos/>
            </>
            
        )
        
    }
    
}

export default homePage;