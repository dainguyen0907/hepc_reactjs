import Title from "../components/title";
import React, { useEffect, useState } from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import RightCatalogue from "../components/rightCatalogue";
import PageNotfound from "./pageNotFound";
import Pagination from "../components/pagination";
import Clock from "../components/clock";
import CataloguePost from "../components/cataloguePost";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";


const App=()=> {
    const param=useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [exits,setExits]= useState(true);
    const [articles,setArticles]= useState([]);
    const [articlesValue,setArticlesValue]=useState(0);
    const [catalogue,setCatalogue]=useState({});
    const currentPage=Number(searchParams.get('page'))||1;
    const limit=9;
    useEffect(()=>{
        const linkgetCatalogue='http://localhost:8080/api/catalogue/'+param.catalogue;
        axios.get(linkgetCatalogue)
        .then(res=>{
            if(res.data.length===1){
                setCatalogue(res.data[0]);
            }else{ setExits(false)}
        }).catch(error=>console.log(error));
        if(catalogue.id)
        {
            let linkgetArticle="http://localhost:8080/api/articles?id_catalogue="+catalogue.id;
            axios.get(linkgetArticle)
            .then(res=>{
                setArticlesValue(res.data.length);
            }).catch(error=>console.log(error));
            let offset=(currentPage-1)*limit;
            let linkgetArticles="http://localhost:8080/api/articles?id_catalogue="+catalogue.id+"&limit="+limit+"&offset="+offset;  
            axios.get(linkgetArticles)
            .then(res=>{
                setArticles(res.data);
            }).catch(error=>console.log(error));
        }
    });
    return exits?
        <div>
            <Title catalogue={param.catalogue} title={catalogue.catalogue_name}/>
            <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    <CataloguePost article={articles} catalogue={param.catalogue}/>
                    <Pagination currentPage={currentPage} param={param.catalogue} length={articlesValue%limit==0?Math.floor(articlesValue/limit):Math.floor(articlesValue/limit)+1}/>
                </div>
                <div className="md:col-span-1 ">
                    <Clock />
                    <RightCatalogue department={catalogue.id_department}/>
                    <RightNavbar />
                    <NewAnouncement />
                </div>
            </div>
        </div>
        :<PageNotfound/>

    ;
}
export default App;