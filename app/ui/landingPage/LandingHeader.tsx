'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

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
      <Image src="/layout/logo.png" alt="Logotipo" width={60} height={50} />
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
      <Link href="/simuladores">Simuladores</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/creditos">Creditos</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>

    <div className='right-buttons'>
      <button className='navbar__button' onClick={() => router.push("/dashboard")}>Simular</button>
    
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='login-button'>Iniciar sesion</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton appearance={{elements:{userButtonAvatarBox:{
          width:"38px",
          height:"38px"
        }}}}></UserButton>
      </SignedIn>
    </div>
  </header>
  );
};

export default Header;
