"use client"
import AdminHeader from '@/app/ui/admin/AdminHeader'
import "react-toastify/dist/ReactToastify.css";

import SideBar from "../ui/admin/SideBar";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = ({children}:{children:React.ReactNode}) => {
    
  const [isSideBarActive, setIsSideBarActive] = useState(true);

  useEffect(() => {
    setIsSideBarActive(!(window.innerWidth >= 900));
  }, []);


  const changeSideBar=()=>{
    setIsSideBarActive(!isSideBarActive)
  }
    
    
    return ( 
        <>

            <div className="super-container">

                <SideBar toggleSideBar={changeSideBar} isSideBarActive={isSideBarActive}></SideBar>
                <div className="outlet">
                <AdminHeader toggleSideBar={changeSideBar}></AdminHeader>
                {children}
                </div>
            </div>

                  <ToastContainer position="top-right" autoClose={3000} />


        </>
     );
}
 
export default Layout;