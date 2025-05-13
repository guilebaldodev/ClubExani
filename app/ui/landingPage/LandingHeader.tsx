'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar'

const Header = () => {
  const [menu, setmenu] = useState(false);
  const router = useRouter();

  return (
    
    <header className="header">
    {
      menu && 
      <>
        <MobileNavbar onClose={()=>{
          setmenu(false)
        }}></MobileNavbar>
      
      </>
    }
    <div className="logotype" onClick={() => router.push("/")}>
      <Image src="/layout/black-logo.png" alt="Logotipo" width={32} height={32} />
      <h2>
        <span className="primary-color">Simu</span>
        landum
      </h2>
    </div>

    <Image
    onClick={()=>{
      setmenu(true)
    }}
    className='burger-menu' src='/layout/black-burger.png' height={28} width={28} alt='burger menu'></Image>
    <nav className="navbar">
      <Link href="/planes">Planes</Link>
      <Link href="/testimonios">Testimonios</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>

    <div className="navbar__button">
      <button onClick={() => router.push("/curso")}>Ir al Curso</button>
    </div>
  </header>
  );
};

export default Header;
