import Title from "../components/title";
import React, { useEffect, useState } from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import PostDetail from "../components/postDetail";
import MorePost from "../components/morePost";
import RightCatalogue from "../components/rightCatalogue";
import Clock from "../components/clock";
import { useParams } from "react-router-dom";
import axios from "axios";


const App=()=> {
    const articleLink=useParams();
    const linkgetArticle='http://localhost:8080/api/articles/'+articleLink.articleLink;
    const linkgetCatalogue='http://localhost:8080/api/catalogue/'+articleLink.catalogue;
    const [article,setArticle]=useState({});
    const [title,setTitle]=useState("Tin tức");
    const [department,setDepartment]=useState(null);
    useEffect(()=>{
        axios.get(linkgetArticle)
        .then(res=>{setArticle(res.data)})
        .catch(error=>console.log(error));
        axios.get(linkgetCatalogue)
        .then(res=>{
            if(res.data.length===1){
                setTitle(res.data[0].catalogue_name);
                setDepartment(res.data[0].id_department);
            }
        })
    });
    return (
        <div>
            <Title catalogue={articleLink.catalogue} title={title}/>
            <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    <PostDetail heading={article.article_heading} createdAt={article.createdAt}
                        content={article.article_content||''} file={article.article_file}/>
                    <MorePost id={article.id} id_catalogue={article.id_catalogue} catalogue={articleLink.catalogue}/>
                </div>
                <div className="md:col-span-1 ">
                    <Clock />
                    <RightCatalogue department={department}/>
                    <RightNavbar />
                    <NewAnouncement />
                </div>
            </div>
        </div>

    );
}
export default App;