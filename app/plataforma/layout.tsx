
"use client";

import { useDashboardStore } from "@/stores/progessStore";
import Header from "../ui/course/Header";
import Footer from "../ui/landingPage/Footer";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setStats = useDashboardStore(
    (s) => s.setDashboardData
  );

  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    // Esperar a que Clerk determine el estado de autenticación.
    if (!isLoaded || !isSignedIn) {
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/progreso/stats");

        if (!res.ok) {
          throw new Error("Error al cargar estadísticas");
        }

        const data = await res.json();

        setStats({
          stats: data.stats,
          lastProgress: data.lastProgress,
        });
      } catch (error) {
        console.error(
          "Error al obtener estadísticas:",
          error
        );
      }
    };

    fetchStats();
  }, [isLoaded, isSignedIn, setStats]);

  return (
    <div className="colum-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
