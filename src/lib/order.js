// Formatting helpers + building the order message sent to Messenger.
import { shop } from '../shop';

export const peso = (n) => `${shop.currency}${n.toLocaleString('en-PH')}`;

// "2026-12-03" -> "Thu, Dec 3, 2026"
export function formatDate(value) {
  if (!value) return '';
  const [y, m, d] = value.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-PH', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// "14:30" -> "2:30 PM"
export function formatTime(value) {
  if (!value) return '';
  const [h, min] = value.split(':').map(Number);
  return `${h % 12 || 12}:${String(min).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
}

// Today's date as "YYYY-MM-DD" in the visitor's local time (for the date picker minimum)
export function todayISO() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export function buildOrderMessage(items, form, subtotal) {
  const delivery = form.type === 'delivery';
  const lines = [
    `🍦 NEW ORDER — ${shop.name}`,
    '',
    `Name: ${form.name.trim()}`,
    `Contact: ${form.contact.trim()}`,
    `Order type: ${delivery ? 'Delivery' : 'Pickup'}`,
    `Date & time: ${formatDate(form.date)} · ${formatTime(form.time)}`,
  ];
  if (delivery) lines.push(`Address: ${form.address.trim()}`);

  lines.push('', 'ORDER:');
  items.forEach((i) => lines.push(`• ${i.name} (${i.size}) ×${i.qty} — ${peso(i.price * i.qty)}`));

  lines.push('', `Subtotal: ${peso(subtotal)}`);
  if (delivery) lines.push('Delivery fee: to be confirmed');
  lines.push(`Payment: ${form.payment}`);
  if (form.notes.trim()) lines.push(`Notes: ${form.notes.trim()}`);

  return lines.join('\n');
}

// Copies text right away (works inside a click, even in some in-app browsers).
// Returns true if the instant copy worked.
export function copyNow(text) {
  let ok = false;
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    ok = document.execCommand('copy');
    document.body.removeChild(ta);
  } catch {
    ok = false;
  }
  return ok;
}

// Modern clipboard API (async). Resolves to true/false.
export async function copyAsync(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
