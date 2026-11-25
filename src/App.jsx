import { useCallback, useState } from 'react';
import { useReveal } from './hooks/useReveal';
import Background from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FlavorRibbon from './components/FlavorRibbon.jsx';
import Menu from './components/Menu.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import MobileCartBar from './components/MobileCartBar.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  useReveal();

  const notify = useCallback((message) => setToast({ message, id: Date.now() }), []);
  const clearToast = useCallback(() => setToast(null), []);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <>
      <Background />
      <Navbar onCartClick={openCart} />
      <main>
        <Hero />
        <FlavorRibbon />
        <Menu onAdded={notify} />
        <HowToOrder />
        <Visit />
      </main>
      <Footer />
      <MobileCartBar hidden={cartOpen} onOpen={openCart} />
      <CartDrawer open={cartOpen} onClose={closeCart} />
      <Toast toast={toast} onDone={clearToast} />
    </>
  );
}
