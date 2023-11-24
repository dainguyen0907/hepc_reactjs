import React from "react";
import CardPost from "./cardPost";

class cataloguePost extends React.Component {
    render() {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    this.props.article ? this.props.article.map(
                        (card, key) => <CardPost image={card.article_image}
                            date={card.createdAt} heading={card.article_heading}
                            summarize={card.article_summarize} link={this.props.catalogue+"/"+ card.article_link} />) : ''
                }
            </div>
        )
    }
}

export default cataloguePost;