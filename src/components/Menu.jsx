import { useEffect, useRef, useState } from 'react';
import { categories, menu, offers } from '../shop';
import { useCart } from '../lib/cart.jsx';
import { peso } from '../lib/order';
import Scoop from './Scoop.jsx';

// Reads the fade-out time from index.css (--menu-leave-duration) so you only change it in one place
function leaveDuration() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
  const value = getComputedStyle(document.documentElement).getPropertyValue('--menu-leave-duration');
  const ms = parseFloat(value);
  if (Number.isNaN(ms)) return 220;
  return value.trim().endsWith('ms') ? ms : ms * 1000;
}

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
        <div
          className="sizes"
          role="radiogroup"
          aria-label={`${item.name} size`}
          style={{ '--count': item.sizes.length, '--active': sizeIndex }}
        >
          {/* white pill that slides behind the selected size */}
          <span className="sizes__pill" aria-hidden="true" />
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
        {/* key={price} replays a small fade when the size (and price) changes */}
        <span className="price" key={size.price}>
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
  const [category, setCategory] = useState('All'); // highlighted tab
  const [shown, setShown] = useState('All'); // category whose cards are on screen
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Fade the current cards out, then swap in the new category (which fades in)
  const choose = (c) => {
    if (c === category) return;
    setCategory(c);
    setLeaving(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShown(c);
      setLeaving(false);
    }, leaveDuration());
  };

  const items = shown === 'All' ? menu : menu.filter((m) => m.category === shown);

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
              onClick={() => choose(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {offers.enabled && (
          <a href="#partner" className="menu-banner glass" data-reveal>
            <span>🎉 Bulk discounts for events</span>
            <span className="menu-banner__dot" aria-hidden="true">·</span>
            <span>🏪 Sell our ice cream in your store</span>
            <strong>Learn more →</strong>
          </a>
        )}

        {/* key={shown} replays the card entrance animation for the new category */}
        <div className={`menu-grid${leaving ? ' is-leaving' : ''}`} key={shown}>
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} onAdded={onAdded} />
          ))}
        </div>
      </div>
    </section>
  );
}
