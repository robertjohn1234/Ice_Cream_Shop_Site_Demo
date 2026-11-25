import { useCart } from '../lib/cart.jsx';
import { shop, offers } from '../shop';
import Scoop from './Scoop.jsx';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'How to order', href: '#how' },
  ...(offers.enabled ? [{ label: 'Bulk & resell', href: '#partner' }] : []),
  { label: 'Visit us', href: '#visit' },
];

export default function Navbar({ onCartClick }) {
  const { count } = useCart();

  return (
    <header className="nav">
      <div className="nav__inner glass">
        <a href="#top" className="nav__logo">
          <Scoop colors={['#ffe0ea', '#ff8fb1', '#e0446f']} size={26} ring />
          <span>{shop.name}</span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button className="nav__cart" onClick={onCartClick} aria-label={`Open order, ${count} items`}>
          <span aria-hidden="true">🛒</span>
          <span className="nav__cart-text">My order</span>
          {count > 0 && (
            <span className="badge" key={count}>
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
