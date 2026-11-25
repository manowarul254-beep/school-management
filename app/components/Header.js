'use client';
import { useEffect, useState } from 'react';
import { nav } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(-1);
  const [p, setP] = useState(0);
  const [up, setUp] = useState(false);

  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      setP((scrollY / (h.scrollHeight - innerHeight)) * 100);
      setUp(scrollY > 500);
      let c = -1;
      nav.forEach((n, i) => {
        const s = document.getElementById(n[0]);
        if (s && s.getBoundingClientRect().top < 120) c = i;
      });
      setCur(c);
    };
    f();
    addEventListener('scroll', f);
    return () => removeEventListener('scroll', f);
  }, []);

  const toggleTheme = () => {
    const r = document.documentElement;
    const dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    r.dataset.theme = dark ? 'light' : 'dark';
  };

  return (
    <>
      <div id="pb" style={{ width: p + '%' }} />
      <header>
        <div className="w nv">
          <a className="lg" href="#top">🌸 শাপলা মডেল হাই স্কুল</a>
          <nav className={open ? 'o' : ''} onClick={() => setOpen(false)}>
            {nav.map((n, i) => (
              <a key={n[0]} href={'#' + n[0]} className={cur === i ? 'on' : ''}>{n[1]}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="ib" onClick={toggleTheme} aria-label="থিম">◐</button>
            <button className="ib" id="mb" onClick={() => setOpen(!open)} aria-label="মেনু">☰</button>
          </div>
        </div>
      </header>
      <button className={`ib ${up ? 's' : ''}`} id="up" onClick={() => scrollTo({ top: 0 })} aria-label="উপরে">↑</button>
    </>
  );
}
