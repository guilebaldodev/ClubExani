import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
  
  return (
    <div className="error-container">

    <Image src={"/layout/404.png"} alt="error"  width={300} height={300}></Image>
      <h2>404 Página no encontrada</h2>
      <div className="texts">
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link href="/plataforma" style={{ color: "#0070f3", textDecoration: "underline",fontSize:"18px" }}>
        Volver a la plataforma
      </Link>
      </div>
    </div>

  );
}