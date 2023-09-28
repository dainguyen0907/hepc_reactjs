import React from "react";
import Header from "../components/header";
import Carousel from "../components/caroulse";
import Introduce from "../components/introduce";
import Catalogue from "../components/catalogue";

class homePage extends React.Component{
    render(){
        return (
            <>
            <Header/>
            <Carousel/>
            <Introduce/>
            <Catalogue/>

            </>
            
        )
        
    }
    
}

export default homePage;