import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import placeholderImage from "../Blog/404.jpg"
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ScaleLoader } from "react-spinners";
import Spineer from "../../Pages.-/Spineer";

const Content = () => {
  const content = useLoaderData();
  const {
    cover_image,
    title,
    description,
    published_timestamp,
    id,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
    tags,
    body_html

  } = content;
  const navigate = useNavigate();
  const handlegoback = ()=>{
    navigate(-1);
  }

 const navigation = useNavigation();

if(navigation.state === "loading") return <Spineer></Spineer>

  return (
    <div>
      <div className="px-6 py-16 mx-auto space-y-12">
        <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="">
            <div
              
              className="mx-auto group hover:no-underline focus:no-underline"
            >
              <img 
             
                className="object-cover w-full rounded bg-gray-500"
                src={cover_image || placeholderImage}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {title}
                </h3>
                <span className="text-xs text-gray-400">
                  {new Date(published_timestamp).toLocaleDateString()}
                </span>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
              </div>
              <div className="text-center">
                <button onClick={handlegoback} className="btn btn-success">GO Blog</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {tags.map((tag) => (
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>








    </div>
  );
};

export default Content;
