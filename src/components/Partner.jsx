// Bulk discount + consignment offers. Text and on/off switch are in shop.js → offers.
import { offers, shop } from '../shop';
import { copyNow, copyAsync } from '../lib/order';

export default function Partner({ onNotify }) {
  if (!offers.enabled) return null;
  const { bulk, consignment } = offers;

  // Copy a ready-made inquiry, then the link opens Messenger
  const copyInquiry = (text) => {
    const ok = copyNow(text);
    if (ok) onNotify('Message copied — paste it in Messenger');
    else copyAsync(text).then((done) => done && onNotify('Message copied — paste it in Messenger'));
  };

  return (
    <section id="partner" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Events & resellers</span>
          <h2 className="section-title">
            Order big or <span className="grad">sell with us</span>
          </h2>
          <p className="section-sub">Special deals for big orders and for store owners.</p>
        </div>

        <div className="partner-grid">
          <article className="offer glass" data-reveal>
            <span className="offer__badge offer__badge--bulk">🎉 Bulk discount</span>
            <h3>{bulk.title}</h3>
            <p>{bulk.text}</p>

            <ul className="tiers">
              {bulk.tiers.map((t) => (
                <li key={t.min}>
                  <span>{t.min}</span>
                  <strong>{t.deal}</strong>
                </li>
              ))}
            </ul>

            <a
              className="btn btn--primary"
              href={shop.messenger}
              target="_blank"
              rel="noreferrer"
              onClick={() => copyInquiry(bulk.message)}
            >
              💬 {bulk.cta}
            </a>
          </article>

          <article className="offer offer--store glass" data-reveal style={{ '--d': '0.12s' }}>
            <span className="offer__badge offer__badge--store">🏪 Consignment</span>
            <h3>{consignment.title}</h3>
            <p>{consignment.text}</p>

            <ul className="checks">
              {consignment.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="offer__note">{consignment.requirement}</p>

            <a
              className="btn btn--dark"
              href={shop.messenger}
              target="_blank"
              rel="noreferrer"
              onClick={() => copyInquiry(consignment.message)}
            >
              💬 {consignment.cta}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
