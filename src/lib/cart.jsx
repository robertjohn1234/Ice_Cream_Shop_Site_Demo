// Shopping cart shared by the whole site. Saved in the browser so it survives a refresh.
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'orbit-scoops-cart';

function load() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const key = `${action.item.id}|${action.size.label}`;
      if (items.some((i) => i.key === key)) {
        return items.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...items,
        {
          key,
          id: action.item.id,
          name: action.item.name,
          size: action.size.label,
          price: action.size.price,
          colors: action.item.colors,
          qty: 1,
        },
      ];
    }
    case 'inc':
      return items.map((i) => (i.key === action.key ? { ...i, qty: i.qty + 1 } : i));
    case 'dec':
      return items.flatMap((i) => {
        if (i.key !== action.key) return [i];
        return i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [];
      });
    case 'remove':
      return items.filter((i) => i.key !== action.key);
    case 'clear':
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage not available — cart still works for this visit */
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((sum, i) => sum + i.qty * i.price, 0),
      add: (item, size) => dispatch({ type: 'add', item, size }),
      inc: (key) => dispatch({ type: 'inc', key }),
      dec: (key) => dispatch({ type: 'dec', key }),
      remove: (key) => dispatch({ type: 'remove', key }),
      clear: () => dispatch({ type: 'clear' }),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
