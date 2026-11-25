'use client';
import { useEffect, useState } from 'react';
import { ph } from '../data';
import { bn } from '../lib/util';

const stats = [[450, 'শিক্ষার্থী'], [28, 'শিক্ষক-কর্মচারী'], [5, 'শ্রেণি'], [41, 'বছরের পথচলা']];

export default function Hero() {
  const [txt, setTxt] = useState('');
  const [v, setV] = useState(stats.map(() => 0));

  useEffect(() => {
    let pi = 0, ci = 0, del = false, t;
    const tick = () => {
      const s = ph[pi];
      if (!del) { ci++; if (ci > s.length + 14) del = true; }
      else { ci -= 2; if (ci <= 0) { del = false; ci = 0; pi = (pi + 1) % ph.length; } }
      setTxt(s.slice(0, Math.max(0, Math.min(ci, s.length))) + '▌');
      t = setTimeout(tick, del ? 30 : 80);
    };
    tick();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let id, s;
    const f = (t) => {
      s = s || t;
      const p = Math.min((t - s) / 1400, 1);
      setV(stats.map((x) => Math.round(x[0] * p)));
      if (p < 1) id = requestAnimationFrame(f);
    };
    id = requestAnimationFrame(f);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="hero" id="top">
      <i className="bl b1" /><i className="bl b2" /><i className="bl b3" />
      <div className="w">
        <span className="em">🏫</span>
        <h1>শাপলা মডেল হাই স্কুল</h1>
        <p>Shapla Model High School · স্থাপিত ১৯৮৫ · EIIN: ১২৩৪৫৬ (ডেমো)</p>
        <p id="ty">{txt}</p>
        <div className="cta">
          <a className="btn bp" href="#admission">ভর্তির তথ্য</a>
          <a className="btn bg" href="#notice">সর্বশেষ নোটিশ</a>
        </div>
        <div className="st">
          {stats.map((s, i) => (<div key={s[1]}><b>{bn(v[i])}</b>{s[1]}</div>))}
        </div>
      </div>
    </div>
  );
}
