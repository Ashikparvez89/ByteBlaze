import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages.-/MainLayouts";
import Blog from "../Components/Blog/Blog";
import BlogPage from "../Components/Blog/BlogPage";
import Home from "../Pages.-/Home";
import Bookmark from "../Components/Bookmark/Bookmark";
import Content from "../Components/Blog/Content";
import Author from "../Components/Blog/Author";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children:[
        {
          path:"/blog",
          element:<Blog></Blog>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=21&top=7')
          
        },
        {
          path:"/blog/:id",
          element: <BlogPage></BlogPage>,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element:<Content></Content>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:"author",
                element: <Author></Author>,          
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:"/",
          element:<Home></Home>
        },
        {
            path:"/bookmark",
            element:<Bookmark></Bookmark>
        }
      ]
    },
  ]);