import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import Spineer from "../../Pages.-/Spineer";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs[0].title);
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Spineer></Spineer>
  return (
    <div className="">
      <div className="my-10">
        <div className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
            >
              <img className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" src={blogs[0].cover_image} alt="" />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                {new Date(blogs[0].published_timestamp).toLocaleDateString()}
                </span>
                <p>
                {blogs[0].description}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-6 mb-5">
        {blogs.map((blog, idx) => (
          <SingleBlog key={idx} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blog;
