import { shop } from '../shop';

export default function Visit() {
  return (
    <section id="visit" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Visit us</span>
          <h2 className="section-title">
            Come say <span className="grad">hi</span>
          </h2>
        </div>

        <div className="visit-grid">
          <div className="visit-card glass" data-reveal>
            <span className="visit-card__icon">🕒</span>
            <h3>Store hours</h3>
            <ul className="hours">
              {shop.hours.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <strong>{h.time}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit-card glass" data-reveal style={{ '--d': '0.1s' }}>
            <span className="visit-card__icon">📍</span>
            <h3>Location</h3>
            <p>{shop.address}</p>
            <a className="btn btn--ghost glass btn--sm" href={shop.mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>

          <div className="visit-card glass" data-reveal style={{ '--d': '0.2s' }}>
            <span className="visit-card__icon">💬</span>
            <h3>Questions?</h3>
            <p>Message us anytime or give us a call.</p>
            <div className="visit-card__actions">
              <a className="btn btn--primary btn--sm" href={shop.messenger} target="_blank" rel="noreferrer">
                Chat on Messenger
              </a>
              <a className="btn btn--ghost glass btn--sm" href={`tel:${shop.phone.replace(/\s/g, '')}`}>
                Call {shop.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
