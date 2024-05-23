import "./App.css";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Gallary from "./components/Gallary";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import ListBlogPost from "./components/ListBlogPost";
import BlogDetails from "./components/BlogDetails";
import CommentDetails from "./components/CommentDetails";
function App() {
  let { userId } = useParams();
  console.log(userId);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/blogs/add" exact element={<BlogPost />} />
        <Route path="/blogs/list" exact element={<ListBlogPost />} />
        <Route path="/blogs/list/:id" exact element={<BlogDetails />} />
        <Route
          path="/blogs/list/:id/comments"
          exact
          element={<CommentDetails />}
        />
        <Route path="/photos" exact element={<Gallary />} />
        <Route path="/faq" exact element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
