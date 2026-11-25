import { fac } from '../data';

export default function Facilities() {
  return (
    <div className="g">
      {fac.map((f) => (
        <div className="cd fc" key={f[1]}>
          <div className="ic">{f[0]}</div>
          <b>{f[1]}</b><small className="m">{f[2]}</small>
        </div>
      ))}
    </div>
  );
}
