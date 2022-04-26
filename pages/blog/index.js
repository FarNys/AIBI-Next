import BlogHeader from "../../Components/Blog/BlogHeader.js";
import BlogNew from "../../Components/Blog/BlogNew";
import BlogProduct from "../../Components/Blog/BlogProduct";
import Layout from "../../Components/Layout";

const Blog = () => {
  return (
    <Layout title="Blog">
      <div className="blog_container">
        <BlogHeader />
        <BlogNew />
        <BlogProduct />
      </div>
    </Layout>
  );
};

export default Blog;
