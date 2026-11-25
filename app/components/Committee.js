'use client';
import { useRef, useState } from 'react';
import { com } from '../data';
import { ini } from '../lib/util';

export default function Committee() {
  const d = useRef(null);
  const [m, setM] = useState(com[0]);

  const move = (e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-4px)`;
  };

  return (
    <>
      <div className="g">
        {com.map((c) => (
          <div key={c[0]} className="cd tl" onMouseMove={move}
            onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
            onClick={() => { setM(c); d.current.showModal(); }}>
            <div className="av">{ini(c[0])}</div>
            <b>{c[0]}</b><small className="m">{c[1]}</small>
          </div>
        ))}
      </div>
      <dialog ref={d}>
        <div className="av">{ini(m[0])}</div>
        <h3 style={{ margin: 0, textAlign: 'center' }}>{m[0]}</h3>
        <p style={{ color: 'var(--mu)', textAlign: 'center' }}>{m[1]}</p>
        <p>📞 {m[2]}</p><p>🎓 {m[3]}</p><p>💼 {m[4]}</p>
        <button className="btn bp" style={{ width: '100%', marginTop: 10 }} onClick={() => d.current.close()}>বন্ধ করুন</button>
      </dialog>
    </>
  );
}
