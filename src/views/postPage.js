import Title from "../components/title";
import React, { useEffect, useState } from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import PostDetail from "../components/postDetail";
import MorePost from "../components/morePost";
import Clock from "../components/clock";
import { useParams } from "react-router-dom";
import axios from "axios";


const App=()=> {
    const articleLink=useParams();
    const link='http://localhost:8080/api/articles/'+articleLink.articleLink;
    const [article,setArticle]=useState({});
    useEffect(()=>{
        axios.get(link)
        .then(res=>{setArticle(res.data)})
        .catch(error=>console.log(error));
    });
    return (
        <div>
            <Title title="Tin tức" />
            <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    <PostDetail heading={article.article_heading} createdAt={article.createdAt}
                        content={article.article_content||''} file={article.article_file}/>
                    <MorePost id={article.id} catalogue={article.id_catalogue}/>
                </div>
                <div className="md:col-span-1 ">
                    <Clock />
                    <RightNavbar />
                    <NewAnouncement />
                </div>
            </div>
        </div>

    );
}
export default App;