import { Link } from "react-router-dom";
import "./blog.css";
import p1 from "../../assets/portable.png"; // funImg equivalent
import p2 from "../../assets/indoor.png"; // second blog image
import p3 from "../../assets/patent.png"; // third blog image

const blogs = [
  {
    slug: "behind-the-scenes-development",
    img: p1,
    category: "Development",
    title: "Behind the Scenes of Development",
    authorImg: "https://i.pravatar.cc/40?img=12",
    author: "Golfbasket Team",
    date: "November 16, 2025",
  },
  {
    slug: "why-golfbasket-hoops-is-different",
    img: p2,
    category: "Sports",
    title: "Why Golfbasket Hoops Is Different From Mini Golf or Basketball",
    authorImg: "https://i.pravatar.cc/40?img=15",
    author: "Golfbasket Team",
    date: "November 18, 2025",
  },
  {
    slug: "updates-on-production-progress",
    img: p3,
    category: "Innovation",
    title: "Updates on Production Progress",
    authorImg: "https://i.pravatar.cc/40?img=33",
    author: "Golfbasket Team",
    date: "November 21, 2025",
  },
];

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <h1 className="blog-heading">Blog & Updates</h1>
      <p className="blog-subtitle">
        Behind the scenes, news, and stories from Golfbasket Hoops — stay updated and inspired.
      </p>

      <div className="blog-container">
        {blogs.map((blog, i) => (
          <Link to={`/blog/${blog.slug}`} key={i} className="blog-card">
            <div className="img-wrapper">
              <img src={blog.img} alt="blog" className="blog-img" />
            </div>

            <span className="blog-category">{blog.category}</span>

            <h3 className="blog-title">{blog.title}</h3>

            <div className="blog-footer">
              <img src={blog.authorImg} className="author-img" alt="" />
              <span className="author-name">{blog.author}</span>
              <span className="blog-date">{blog.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
