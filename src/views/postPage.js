import Title from "../components/title";
import React from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import PostDetail from "../components/postDetail";
import MorePost from "../components/morePost";
import Clock from "../components/clock";
import { useParams } from "react-router-dom";


const App=()=> {
    const articleLink=useParams();
    const link='http://localhost:8080/api/articles/'+articleLink.articleLink;
    return (
        <div>
            <Title title="Tin tức" />
            <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    <PostDetail link={link}/>
                    <MorePost />
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