import Header from "../../components/Header/Header";
import "./blog.css";

export default function BlogLayout({ children }) {
  return (
    <>
      <Header />

      <div className="blog-layout-wrapper">
        {children}
      </div>
    </>
  );
}
