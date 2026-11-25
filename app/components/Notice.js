'use client';
import { useState } from 'react';
import { nts, cats } from '../data';

export default function Notice() {
  const [c, setC] = useState('সব');
  return (
    <>
      <div className="ch">
        {cats.map((x) => (
          <button key={x} className={c === x ? 'on' : ''} onClick={() => setC(x)}>{x}</button>
        ))}
      </div>
      {nts.filter((n) => c === 'সব' || n[3] === c).map((n) => (
        <div className="cd nt" key={n[0]}>
          <div className="dt"><b>{n[1]}</b><small>{n[2]}</small></div>
          <div><b>{n[0]}</b><small className="m">{n[3]}</small></div>
        </div>
      ))}
    </>
  );
}
