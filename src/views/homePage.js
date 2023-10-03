import React from "react";
import Carousel from "../components/caroulse";
import Introduce from "../components/introduce";
import Catalogue from "../components/catalogue";
import Admission from "../components/admission";
import Videos from "../components/videos";

class homePage extends React.Component{
    render(){
        return (
            <>
            <Carousel/>
            <Introduce/>
            <Catalogue catalogueName="Tin tức"/>
            <Catalogue catalogueName="Thông báo"/>
            <Admission />
            <Videos/>
            </>
            
        )
        
    }
    
}

export default homePage;