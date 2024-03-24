import React, { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../utils";
import SingleBlog from "../Blog/SingleBlog";
import EmptyPage from "./EmptyPage";


const Bookmark = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);



  const handledelte=id=>{
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }
  if(blogs.length < 1) return <EmptyPage massage='no bookmarks available' address='/blog' labe='Got to blog'></EmptyPage>
  return (
    <div className="my-10">
      <div className="container mx-auto grid grid-cols-3 gap-6 mb-5">
        {
          blogs.map(blog=><SingleBlog handledelte={handledelte} deleteable={true} blog={blog}></SingleBlog>)
        }
      </div>
    </div>
  );
};

export default Bookmark;
