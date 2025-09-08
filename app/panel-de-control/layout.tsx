"use client"
import AdminHeader from '@/app/ui/admin/AdminHeader'
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../ui/admin/SideBar";
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs"


const Layout = ({children}:{children:React.ReactNode}) => {
    
  const {rol, clerkId} = useUserStore()

  const { user, isSignedIn } = useUser()


  const router = useRouter()

  const [ready, setReady] = useState(false);

  const [isSideBarActive, setIsSideBarActive] = useState(true);

  useEffect(() => {
    setIsSideBarActive(!(window.innerWidth >= 900));
  }, []);

  useEffect(()=>{

    if (isSignedIn === undefined || !clerkId) return;

    if (!isSignedIn) {
      toast.error("Debes iniciar sesión")
      router.push("/")
      return
    }

    if(rol !== "admin"){
      router.push("/")
      toast.error("No cuentas con permisos")
      return
    }

    setReady(true)
  },[rol,isSignedIn,router,clerkId])


  const changeSideBar=()=>{
    setIsSideBarActive(!isSideBarActive)
  }

    if(!ready) return null;
    
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