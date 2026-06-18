import Image from "next/image";

export default function Home() {
  return (
    <>
      <main style={{ flex: 1 }}>
        <header>
          <Image
            src="/bmw-logo.svg"
            alt="BMW"
            width={41}
            height={41}
            className="bmw-logo"
            priority
          />
          <p className="site-title">
            BMWGenius<span>.cloud</span>
          </p>
        </header>

        <nav>
          <a href="/models" className="menu-item">
            <span>Models</span>
            <span className="menu-arrow">›</span>
          </a>
          <a href="/colors" className="menu-item">
            <span>Colors</span>
            <span className="menu-arrow">›</span>
          </a>
          <a href="/bmw_excellence_club" className="menu-item">
            <span>BMW Excellence Club 3.0+</span>
            <span className="menu-arrow">›</span>
          </a>
        </nav>
      </main>

      <footer>
        Copyright 2026. BMW Genius Jang Uihwan · Samchully Motors
      </footer>
    </>
  );
}
