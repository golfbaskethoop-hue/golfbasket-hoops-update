import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import DomeGalleryPage from "./Pages/DomeGallery";
import Blog from "./Pages/Blog/blog";
import BlogArticle from "./Pages/Blog/BlogArticle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<DomeGalleryPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogArticle />} /> {/* FIXED */}
      </Route>
    </Routes>
  )
}

export default App
