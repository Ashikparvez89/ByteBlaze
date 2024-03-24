import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
           <div className="h-16">
                <Header></Header>
           </div>
            <div className="min-h-[calc(100vh-186px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;