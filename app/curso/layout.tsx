import Header from "../ui/course/Header";
import Footer from "../ui/landingPage/Footer";

const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
        </>
     );
}
 
export default Layout;