import toast from "react-hot-toast";
import { json } from "react-router-dom";

// getblog


export const getBlogs = ()=>{

    let blogs = [];
    let storedBlog = localStorage.getItem('blogs');
    if(storedBlog){
        blogs = JSON.parse(storedBlog)
    }
    return blogs;
}

// save

export const saveBlogs=(blog)=>{
    let blogs = getBlogs();
    const isExist = blogs.find(b=> b.id === blog.id)
    if(isExist){
        return toast.error('Already Bookmarked !')
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Save Bookmark successful')
}

// delete

export const deleteBlogs=(id)=>{

    let blogs = getBlogs();
    const remaining = blogs.filter(b=> b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Bookmark Removed')
}


