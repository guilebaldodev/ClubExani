import Header from "../ui/course/Header";
import Footer from "../ui/landingPage/Footer";

const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <>
        <div className="colum-container">
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
        </div>
        </>
     );
}
 
export default Layout;