import { menu } from '../shop';
import Scoop from './Scoop.jsx';

// Endless scrolling strip of flavor names
export default function FlavorRibbon() {
  const row = [...menu, ...menu];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {row.map((m, i) => (
          <span className="ribbon__item" key={i}>
            <Scoop colors={m.colors} size={22} />
            {m.name}
          </span>
        ))}
      </div>
    </div>
  );
}
