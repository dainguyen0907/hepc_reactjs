import Title from "../components/title";
import React from "react";
import RightNavbar from "../components/rightNavbar";
import NewAnouncement from "../components/newAnouncement";
import PostDetail from "../components/postDetail";
import MorePost from "../components/morePost";
import Clock from "../components/clock";

class postPage extends React.Component {
    render() {
        return (
            <div>
                <Title title="Tin tức" />
                <div className="container mx-auto 2xl:px-40 grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <PostDetail />
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
}

export default postPage;