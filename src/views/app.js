import * as React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./homePage";
import PostPage from "./postPage";
import NotFoundPage from "./pageNotFound";
import Header from "../components/header";
import Footer from "../components/footer";

class app extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<PostPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    );
  }
}

export default app;