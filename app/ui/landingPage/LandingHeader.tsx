'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
    <div className="logotype" onClick={() => router.push("/")}>
      <Image src="/layout/black-logo.png" alt="Logotipo" width={32} height={32} />
      <h2>
        <span className="primary-color">Club</span>
        Exani
      </h2>
    </div>

    <nav className="navbar">
      <Link href="/planes">Planes</Link>
      <Link href="/testimonios">Testimonios</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>

    <div className="navbar__button">
      <button onClick={() => router.push("/exani-iii")}>Ir al Curso</button>
    </div>
  </header>
  );
};

export default Header;
