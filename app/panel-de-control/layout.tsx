// import Header from "../ui/course/Header";
// import Footer from "../ui/landingPage/Footer";
import AdminHeader from '@/app/ui/admin/AdminHeader'

import SideBar from "../ui/admin/SideBar";

const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <>

            <div className="super-container">

                <SideBar></SideBar>
                <div className="outlet">
                <AdminHeader></AdminHeader>
                {children}
                </div>
            </div>

        </>
     );
}
 
export default Layout;