'use client';
import { useRef, useState } from 'react';
import { gc, gn, em } from '../data';
import { bn } from '../lib/util';

export default function Gallery() {
  const d = useRef(null);
  const [i, setI] = useState(0);
  const go = (k) => setI((k + gc.length) % gc.length);
  const bg = (k) => `linear-gradient(135deg,${gc[k]},#111827)`;

  return (
    <>
      <div className="g">
        {gc.map((c, k) => (
          <div key={c} className="gl" style={{ background: bg(k) }} onClick={() => { setI(k); d.current.showModal(); }}>{em[k]}</div>
        ))}
      </div>
      <dialog id="lb" ref={d} onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(i - 1); if (e.key === 'ArrowRight') go(i + 1); }}>
        <div id="lbi" style={{ background: bg(i) }}>{em[i]}</div>
        <p>{gn[i]} ({bn(i + 1)}/{bn(gc.length)})</p>
        <div className="nb">
          <button className="btn bp" onClick={() => go(i - 1)}>← আগে</button>
          <button className="btn bp" onClick={() => d.current.close()}>বন্ধ</button>
          <button className="btn bp" onClick={() => go(i + 1)}>পরে →</button>
        </div>
      </dialog>
    </>
  );
}
