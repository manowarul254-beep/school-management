'use client';
import { useState } from 'react';
import { stp } from '../data';
import { bn } from '../lib/util';

export default function Admission() {
  const [t, setT] = useState(0);
  const [c, setC] = useState(900);
  const [bus, setBus] = useState(false);
  const [lab, setLab] = useState(false);
  const total = c + (bus ? 600 : 0) + (lab ? 200 : 0);

  return (
    <div className="two">
      <div>
        <div className="tabs">
          {stp.map((s, i) => (
            <button key={s[0]} className={t === i ? 'on' : ''} onClick={() => setT(i)}>{s[0]}</button>
          ))}
        </div>
        <div className="cd" style={{ minHeight: 190 }}>
          <h3 style={{ margin: '0 0 8px' }}>{stp[t][0]}</h3>
          <p>{stp[t][1]}</p>
        </div>
      </div>
      <div className="cd">
        <h3 style={{ margin: 0 }}>💰 মাসিক খরচের হিসাব</h3>
        <label>শ্রেণি</label>
        <select value={c} onChange={(e) => setC(+e.target.value)}>
          <option value={900}>ষষ্ঠ</option><option value={950}>সপ্তম</option>
          <option value={1000}>অষ্টম</option><option value={1100}>নবম</option>
        </select>
        <label><input type="checkbox" style={{ width: 'auto' }} checked={bus} onChange={(e) => setBus(e.target.checked)} /> স্কুল বাস (+৬০০)</label>
        <label><input type="checkbox" style={{ width: 'auto' }} checked={lab} onChange={(e) => setLab(e.target.checked)} /> ল্যাব ও আইসিটি ফি (+২০০)</label>
        <p style={{ margin: '14px 0 0' }}>মোট মাসিক খরচ</p>
        <div className="tot">৳ {bn(total)}</div>
        <small className="m">* নমুনা হিসাব; প্রকৃত ফি অফিস থেকে নিশ্চিত করুন।</small>
      </div>
    </div>
  );
}
