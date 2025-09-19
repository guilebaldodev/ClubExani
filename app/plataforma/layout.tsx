"use client"

import { useDashboardStore } from "@/stores/progessStore";
import Header from "../ui/course/Header";
import Footer from "../ui/landingPage/Footer";
import { useEffect } from "react";

const Layout = ({children}:{children:React.ReactNode}) => {

    const setStats= useDashboardStore(s=> s.setDashboardData)

    useEffect(()=>{
        const fetchStats = async()=> {
            try {
                const res= await fetch("/api/progreso/stats")
                if(!res.ok) throw new Error("Error al cargar")
                const data = await res.json()
                console.log(data)

                setStats({
                    stats: data.stats,
                    lastProgress:data.lastProgress
                })
            

            } catch (error) {
               console.log(error) 
            }
        }

        fetchStats()

    },[setStats])


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