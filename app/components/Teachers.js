'use client';
import { useState } from 'react';
import { tea } from '../data';
import { ini } from '../lib/util';

export default function Teachers() {
  const [on, setOn] = useState(-1);
  return (
    <div className="g">
      {tea.map((t, i) => (
        <div key={t[0]} className={`fl ${on === i ? 'on' : ''}`} onClick={() => setOn(on === i ? -1 : i)}>
          <div className="fi">
            <div className="ff">
              <div className="av">{ini(t[0])}</div>
              <b>{t[0]}</b><small className="m">{t[1]}</small>
            </div>
            <div className="fb">
              <b>শিক্ষাগত যোগ্যতা</b>
              <p style={{ margin: '6px 0 0', fontSize: '1.2rem' }}>{t[2]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
