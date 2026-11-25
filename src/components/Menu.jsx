import { useState } from 'react';
import { categories, menu } from '../shop';
import { useCart } from '../lib/cart.jsx';
import { peso } from '../lib/order';
import Scoop from './Scoop.jsx';

function MenuCard({ item, index, onAdded }) {
  const { add } = useCart();
  const [sizeIndex, setSizeIndex] = useState(0);
  const [bump, setBump] = useState(0);
  const size = item.sizes[sizeIndex];
  const single = item.sizes.length === 1;

  const handleAdd = () => {
    add(item, size);
    setBump((b) => b + 1);
    onAdded(`Added ${item.name} (${size.label})`);
  };

  return (
    <article className="menu-card glass" style={{ '--i': index, '--tint': item.colors[1] }}>
      {item.tag && <span className="menu-card__tag">{item.tag}</span>}

      <div className="menu-card__scoop">
        <Scoop
          key={bump}
          colors={item.colors}
          specks={item.specks}
          size={104}
          className={bump ? 'is-bump' : ''}
        />
        <span className="menu-card__shadow" />
      </div>

      <h3>{item.name}</h3>
      <p className="menu-card__flavor">{item.flavor}</p>
      <p className="menu-card__desc">{item.desc}</p>

      {!single && (
        <div className="sizes" role="radiogroup" aria-label={`${item.name} size`}>
          {item.sizes.map((s, i) => (
            <button
              key={s.label}
              role="radio"
              aria-checked={i === sizeIndex}
              className={`size${i === sizeIndex ? ' is-active' : ''}`}
              onClick={() => setSizeIndex(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="menu-card__foot">
        <span className="price">
          {peso(size.price)}
          {single && <small> / {size.label}</small>}
        </span>
        <button className="btn btn--add" onClick={handleAdd}>
          + Add
        </button>
      </div>
    </article>
  );
}

export default function Menu({ onAdded }) {
  const [category, setCategory] = useState('All');
  const items = category === 'All' ? menu : menu.filter((m) => m.category === category);

  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Our menu</span>
          <h2 className="section-title">
            Pick your <span className="grad">planet</span>
          </h2>
          <p className="section-sub">Choose a flavor and size, then add it to your order.</p>
        </div>

        <div className="chips" role="tablist" aria-label="Menu categories" data-reveal>
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={c === category}
              className={`chip${c === category ? ' is-active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* key={category} replays the pop-in animation when the filter changes */}
        <div className="menu-grid" key={category}>
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} onAdded={onAdded} />
          ))}
        </div>
      </div>
    </section>
  );
}
