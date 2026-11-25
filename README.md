# Orbit Scoops — Ice Cream Shop Website (demo)

A one-page ice cream shop site where customers pick flavors, fill in their details, and send the order to the shop's **Messenger**. No backend or database needed.

**How ordering works:** customer adds items → fills name, contact, pickup/delivery, date & time → taps **Order via Messenger**. The site copies a neat order summary and opens the shop's Messenger chat. The customer pastes and sends.

## Run it locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Make it a real shop's site

Almost everything is in **`src/shop.js`**:

| What | Field |
|---|---|
| Shop name, tagline | `shop.name`, `shop.tagline` |
| **Messenger link** | `shop.messenger` → `https://m.me/<facebook-page-username>` |
| Facebook, phone, address, Google Maps link | `shop.facebook`, `shop.phone`, `shop.address`, `shop.mapsUrl` |
| Store hours | `shop.hours` |
| GCash details, payment choices | `shop.payment`, `shop.paymentOptions` |
| Menu items, prices, sizes, badges | `menu` |
| Menu filter tabs | `categories` |

Each menu item's `colors` draws its scoop (highlight, main, shadow), so no product photos are needed. `specks` adds bits like cookies or macapuno.

Colors and fonts for the whole site are at the top of **`src/index.css`** (`:root`).

**Finding the Messenger link:** open the shop's Facebook Page → its username is in the page URL (facebook.com/**username**) → use `https://m.me/username`.

## Project structure

```
src/
  shop.js                 ← shop details + menu (edit this)
  index.css               ← all styles
  App.jsx                 ← page sections in order
  lib/cart.jsx            ← cart (saved in the browser)
  lib/order.js            ← builds the Messenger order message + copy helpers
  hooks/useReveal.js      ← fade-in on scroll
  components/
    Hero.jsx              ← headline + orbiting scoops around the cone
    Menu.jsx              ← filters, menu cards, size picker
    CartDrawer.jsx        ← cart, order form, "Order via Messenger"
    OrderSentModal.jsx    ← "paste & send" instructions, copy again
    ...                   ← Navbar, FlavorRibbon, HowToOrder, Visit, Footer, etc.
```

## Deploy free on Render

1. Push to a GitHub repo.
2. Render → **New → Static Site** → pick the repo.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`

## Notes

- The cart and the customer's name/contact/address are remembered on their device, so returning customers don't retype them.
- If a browser blocks automatic copying (some in-app browsers do), the order is shown with a **Copy order** button.
- Animations are pure CSS (no animation library), which keeps the site light on mobile data. They turn off for visitors with "reduce motion" enabled.
- This is a demo for a fictional shop. Use a real shop's name, logo and photos only with the owner's permission.
