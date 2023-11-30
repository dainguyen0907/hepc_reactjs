import Title from "../components/title";
import React, { useEffect, useState } from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import PostDetail from "../components/postDetail";
import MorePost from "../components/morePost";
import RightCatalogue from "../components/rightCatalogue";
import Clock from "../components/clock";
import PageNotFound from "./pageNotFound";
import CardPostHorizontal from "../components/cardPostHorizontal";
import { useParams } from "react-router-dom";
import axios from "axios";


const App = () => {
    const articleLink = useParams();
    let key = articleLink.articleLink;
    let linkgetArticle = 'http://localhost:8080/api/articles/' + articleLink.articleLink;
    if (articleLink.catalogue === "tim-kiem") {
        linkgetArticle = 'http://localhost:8080/api/search/' + articleLink.articleLink;
    }
    let linkgetCatalogue = 'http://localhost:8080/api/catalogue/' + articleLink.catalogue;
    const [article, setArticle] = useState({});
    const [title, setTitle] = useState("Tin tức");
    const [searchResult, setSearchResult] = useState([]);
    const [department, setDepartment] = useState(null);
    useEffect(() => {
        if (articleLink.catalogue === "tim-kiem") {
            setTitle("Tìm kiếm");
            setDepartment(1);//ID department bộ phận truyền thông chứa tin tức
            axios.get(linkgetArticle)
                .then(res => { setSearchResult(res.data) })
                .catch(error => console.log(error));
        }
        else {
            axios.get(linkgetArticle)
                .then(res => { setArticle(res.data) })
                .catch(error => console.log(error));
            axios.get(linkgetCatalogue)
                .then(res => {
                    if (res.data.length === 1) {
                        setTitle(res.data[0].catalogue_name);
                        setDepartment(res.data[0].id_department);
                    }
                })

        }

    }, [articleLink.catalogue, linkgetArticle, linkgetCatalogue]);
    return (isNaN(article) ?
        <div>
            <Title catalogue={articleLink.catalogue} title={title} />
            <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                    {articleLink.catalogue === "tim-kiem" ?
                        <>
                            {
                                searchResult.length > 0 ?
                                    <><p className="p-6"><h1>Kết quả tìm kiếm cho từ khoá: <span className="font-bold text-red-500">{key}</span></h1></p>
                                        {searchResult.map(card => <CardPostHorizontal
                                            image={card.article_image} date={card.createdAt} heading={card.article_heading}
                                            summarize={card.article_summarize} link={"/tin-tuc/" + card.article_link} />)}
                                    </> : <div className="p-6 font-bold">Không tìm được bài viết liên quan đến từ khoá: <span className="font-bold text-red-500">{key}</span></div>
                            }
                        </>
                        : <>
                            <PostDetail heading={article.article_heading} createdAt={article.createdAt}
                                content={article.article_content || ''} file={article.article_file} />
                            <MorePost id={article.id} id_catalogue={article.id_catalogue} catalogue={articleLink.catalogue} />
                        </>}
                </div>
                <div className="md:col-span-1 ">
                    <Clock />
                    <RightCatalogue department={department} />
                    <RightNavbar />
                    <NewAnouncement />
                </div>
            </div>
        </div> :
        <PageNotFound />

    );
}
export default App;