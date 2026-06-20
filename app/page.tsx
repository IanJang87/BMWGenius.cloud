import Image from "next/image";

export default function Home() {
  return (
    <>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
        <div className="samchully-wrap">
          <a href="https://www.samchullymotors.co.kr/" className="samchully-btn" target="_blank" rel="noopener noreferrer">
            Samchully Motors
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </main>

      <footer>
        © 2026 BMW Genius JANG UIHWAN
      </footer>
    </>
  );
}
