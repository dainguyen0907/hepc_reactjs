import React from "react";
import CardPost from "./cardPost";

class catalogue extends React.Component {
    render() {
        return (
            <>
                <div className="bg-sky-500 text-center">
                    <strong className="text-2xl text-white">{this.props.catalogueName}</strong>
                </div>
                <div className="container mx-auto 2xl:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            this.props.article?this.props.article.map(
                                (card,key)=><CardPost image={card.article_image} 
                                date={card.createdAt} heading={card.article_heading}
                                summarize={card.article_summarize} link={this.props.catalogue+card.article_link}/>):''
                        }
                    </div>

                    <div className="my-5 text-center">
                        <a href={"/"+this.props.catalogue} className="hover:bg-white hover:text-sky-500 duration-300 ease-in-out border 
                        border-sky-500 rounded-lg p-2 my-2 text-white bg-sky-500 font-bold">
                            Xem thêm</a>
                    </div>
                </div>

            </>

        )
    }
}

export default catalogue;