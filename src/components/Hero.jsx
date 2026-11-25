import { useRef } from 'react';
import { shop, menu } from '../shop';
import Scoop from './Scoop.jsx';

// Scoops that orbit around the cone. delay = where on the orbit it starts.
const byId = (id) => menu.find((m) => m.id === id);
const ORBITS = [
  { item: byId('ube'), size: 50, orbit: 360, dur: 16, delay: 0 },
  { item: byId('mango'), size: 40, orbit: 360, dur: 16, delay: -8 },
  { item: byId('buko'), size: 34, orbit: 470, dur: 24, delay: -3 },
  { item: byId('chocolate'), size: 44, orbit: 470, dur: 24, delay: -11 },
  { item: byId('cookies'), size: 30, orbit: 470, dur: 24, delay: -19 },
];

export default function Hero() {
  const systemRef = useRef(null);

  // Tilt the orbit system slightly toward the mouse
  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !systemRef.current) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    systemRef.current.style.setProperty('--ry', `${x * 16}deg`);
    systemRef.current.style.setProperty('--rx', `${-y * 10}deg`);
  };

  return (
    <section id="top" className="hero" onPointerMove={onPointerMove}>
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="pill glass" data-reveal>
            <span className="pill__dot" /> Fresh batches daily · Pickup & delivery
          </p>
          <h1 className="hero__title" data-reveal style={{ '--d': '0.1s' }}>
            Ice cream that's <span className="grad">out of this world.</span>
          </h1>
          <p className="hero__sub" data-reveal style={{ '--d': '0.2s' }}>
            {shop.tagline} Pick your flavors, then send your order straight to our Messenger.
          </p>
          <div className="hero__cta" data-reveal style={{ '--d': '0.3s' }}>
            <a href="#menu" className="btn btn--primary">
              See the menu
            </a>
            <a href="#how" className="btn btn--ghost glass">
              How to order
            </a>
          </div>
          <ul className="hero__facts" data-reveal style={{ '--d': '0.4s' }}>
            <li>
              <strong>{menu.length}</strong> flavors & treats
            </li>
            <li>
              <strong>₱{Math.min(...menu.flatMap((m) => m.sizes.map((s) => s.price)))}</strong> starting price
            </li>
            <li>
              <strong>Messenger</strong> easy ordering
            </li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal style={{ '--d': '0.2s' }}>
          <div className="system" ref={systemRef}>
            <span className="orbit-track" style={{ '--orbit': '360px' }} />
            <span className="orbit-track" style={{ '--orbit': '470px' }} />

            {ORBITS.map((o, i) => (
              <div
                key={i}
                className="orbit"
                style={{ '--orbit': `${o.orbit}px`, '--dur': `${o.dur}s`, '--delay': `${o.delay}s` }}
              >
                <div className="orbit__planet">
                  <Scoop colors={o.item.colors} specks={o.item.specks} size={o.size} />
                </div>
              </div>
            ))}

            <div className="cone-stack">
              <Scoop colors={['#ffe0ea', '#ff8fb1', '#e0446f']} specks="#ffffff" size={150} ring />
              <span className="cone" />
            </div>
          </div>

          <span className="float-chip glass float-chip--1">🍨 Made in small batches</span>
          <span className="float-chip glass float-chip--2">🛵 Delivery available</span>
        </div>
      </div>
    </section>
  );
}
