import React from "react";
import Header from "../components/header";
import Carousel from "../components/caroulse";
import Introduce from "../components/introduce";
import Catalogue from "../components/catalogue";
import Admission from "../components/admission";
import Videos from "../components/videos";
import Footer from "../components/footer";

class homePage extends React.Component{
    render(){
        return (
            <>
            <Header/>
            <Carousel/>
            <Introduce/>
            <Catalogue catalogueName="Tin tức"/>
            <Catalogue catalogueName="Thông báo"/>
            <Admission />
            <Videos/>
            <Footer/>
            
            </>
            
        )
        
    }
    
}

export default homePage;