import { shop } from '../shop';

const steps = [
  { icon: '🍦', title: 'Pick your flavors', text: 'Choose your flavors and sizes from the menu and add them to your order.' },
  { icon: '📝', title: 'Fill in your details', text: 'Tell us your name, contact number, and when you want it — pickup or delivery.' },
  { icon: '💬', title: 'Send via Messenger', text: 'We copy your order and open our Messenger. Just paste and hit send!' },
];

export default function HowToOrder() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">How to order</span>
          <h2 className="section-title">
            Three steps to <span className="grad">happiness</span>
          </h2>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step glass" key={s.title} data-reveal style={{ '--d': `${i * 0.12}s` }}>
              <span className="step__num">{i + 1}</span>
              <span className="step__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="pay glass" data-reveal>
          <div>
            <h3>Payment</h3>
            <p>
              GCash: <strong>{shop.payment.gcashNumber}</strong> ({shop.payment.gcashName}) or cash on pickup/delivery.
              Please send your GCash receipt in Messenger.
            </p>
          </div>
          <p className="pay__note">{shop.deliveryNote}</p>
        </div>
      </div>
    </section>
  );
}
