import { useCart } from '../lib/cart.jsx';
import { peso } from '../lib/order';
import CartIcon from './CartIcon.jsx';

// Sticky "View order" bar at the bottom on phones, shown once something is in the cart
export default function MobileCartBar({ hidden, onOpen }) {
  const { count, subtotal } = useCart();
  if (count === 0 || hidden) return null;

  return (
    <button className="mobile-bar" onClick={onOpen}>
      <span className="mobile-bar__label">
        <CartIcon size={18} /> View order · {count} item{count > 1 ? 's' : ''}
      </span>
      <strong>{peso(subtotal)}</strong>
    </button>
  );
}
