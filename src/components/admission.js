import React from "react";
import background from "../assets/image/494.jpg";
import CardPostHorizontal from "./cardPostHorizontal";
import CardPostHorizontalMini from "./cardPostHorizontalMini";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class admission extends React.Component {
    state={
        admission:[],
        recruitment:[],
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/articles?limit=4&offset=0&id_catalogue='+34)
        .then(res=>{
            const admission=res.data;
            this.setState({admission});
        }).catch(error=>console.log(error));
        axios.get('http://localhost:8080/api/articles?limit=8&offset=0&id_catalogue='+35)
        .then(res=>{
            const recruitment=res.data;
            this.setState({recruitment});
        }).catch(error=>console.log(error));
    }
    render() {
        return (
            <div className="bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <div className="bg-sky-500 text-center">
                    <strong className="text-2xl text-white">Tuyển sinh - Tuyển dụng</strong>
                </div>
                <div className="container mx-auto 2xl:px-40">
                    <div className=" grid grid-cols-1 lg:grid-cols-3">
                        <div className="md:col-span-2">
                            {this.state.admission.map(card=><CardPostHorizontal 
                            image={card.article_image} date={card.createdAt} heading={card.article_heading}
                            summarize={card.article_summarize} link={"/tuyen-dung/"+card.article_link}/>)}
                            <div className="my-5 text-right">
                                <a href="/tuyen-sinh" className="hover:bg-blue-500 hover:text-white duration-300 ease-in-out border 
                                border-white rounded-lg p-2 my-2 text-sky-500 bg-white font-bold">
                                    &gt;&gt;Xem thêm</a>
                            </div>
                        </div>
                        <div className="lg:col-span-1 text-center">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-orange-500" /><br />
                            <strong className="text-orange-500 text-3xl">Tin tuyển dụng</strong>
                            <hr className="my-1 border-orange-500 border" />
                    
                            {this.state.recruitment.map(card=><CardPostHorizontalMini
                            date={card.createdAt} heading={card.article_heading}
                            link={"/tuyen-dung/"+card.article_link}/>)}
                            <div className="my-5 text-right">
                                <a href="/tuyen-dung" className="hover:bg-blue-500 hover:text-white duration-300 ease-in-out border 
                                border-white rounded-lg p-2 my-2 text-sky-500 bg-white font-bold">
                                    &gt;&gt;Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        );
    }
}

export default admission;