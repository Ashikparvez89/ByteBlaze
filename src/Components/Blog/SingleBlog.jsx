import React from "react";
import { Link, useNavigation } from "react-router-dom";
import placeholderImage from "../Blog/404.jpg";
import Spineer from "../../Pages.-/Spineer";
import { RiChatDeleteFill } from "react-icons/ri";
const SingleBlog = ({ blog, deleteable,handledelte }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Spineer></Spineer>;

  const {
    cover_image,
    title,
    description,
    published_timestamp,
    id,
    public_reactions_count,
    
  } = blog;
  return (
    <div className="flex relative">
      <section className="bg-gray-800 text-gray-100 border transition hover:scale-105">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="">
            <Link
              to={`/blog/${id}`}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={cover_image || placeholderImage}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {title}
                </h3>
                <span className="text-xs text-gray-400">
                  {new Date(published_timestamp).toLocaleDateString()}
                </span>
                <p>{description}</p>
              </div>
              <div className="text-center">
                <button className="btn btn-success">Read More</button>
              </div>
            </Link>
          </div>

        </div>
      </section>
      {deleteable && <div onClick={()=>handledelte(id)} className="absolute -top-5 -right-5 bg-secondary rounded-full p-5 cursor-pointer"><RiChatDeleteFill size={20} ></RiChatDeleteFill></div>}
    </div>
  );
};

export default SingleBlog;
