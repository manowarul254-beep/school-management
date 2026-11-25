import { res } from '../data';

export default function Results() {
  return (
    <div className="cd">
      <div className="bars">
        {res.map((r) => (
          <div className="bar" key={r[0]}>
            <b>{r[1]}%</b>
            <i style={{ '--h': r[1] * 1.7 + 'px' }} />
            <small className="m">{r[0]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
