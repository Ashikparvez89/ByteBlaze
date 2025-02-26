import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localtheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localtheme);
    },[theme])
    const handleTheme = e =>{
        if(e.target.checked){
            setTheme('synthwave')
        }else{setTheme('light')}
    }

    console.log(theme)
  return (
    <div className="shadow-lg w-full fixed z-10">
      <div className="px-10 navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-2xl font-bold text-primary flex gap-0">
            Byte<span className="text-secondary">Blaze</span>
          </NavLink>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <ul className="menu menu-horizontal text-lg font-bold gap-4 px-1">
            {/* <a>Home</a>
            <a>Blog</a>
            <a>Bookmarks</a> */}
            <NavLink className={({isActive})=> isActive? 'text-primary' : ''} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive? 'text-primary' : ''} to="/blog">Blog</NavLink>
            <NavLink className={({isActive})=> isActive? 'text-primary' : ''} to="/bookmark">Bookmarks</NavLink>
          </ul>
          <label className="cursor-pointer grid place-items-center">
            <input onChange={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
