import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import "./blogArticle.css";

export default function BlogArticle() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.slug === id);

  if (!blog) return <h2 style={{ padding: 80 }}>Blog not found.</h2>;

  return (
    <>
      {/* 🔥 PAGE HEADER */}
      <div className="section-header">
        <h1>Blog & Updates</h1>
        <p>
          Behind the scenes, news, and stories from Golfbasket Hoops — stay
          updated and inspired.
        </p>
      </div>

      {/* 🔥 ARTICLE */}
      <div className="blog-article-container">
        
        {/* TITLE */}
        <h1 className="blog-title">{blog.title}</h1>

        {/* META */}
        <div className="blog-meta">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        {/* HERO IMAGE */}
        <div className="blog-hero-wrapper">
          <img src={blog.img} alt={blog.title} className="blog-hero-image" />
        </div>

        {/* CONTENT */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}
