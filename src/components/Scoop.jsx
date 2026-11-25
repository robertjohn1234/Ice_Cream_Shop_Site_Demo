// A glossy ice cream scoop drawn with CSS — no photos needed.
// colors: [highlight, main, shadow]; specks: optional color for bits/chips.
export default function Scoop({ colors, specks, size = 110, ring = false, className = '' }) {
  const [light, base, dark] = colors;
  const classes = ['scoop', specks && 'scoop--specks', ring && 'scoop--ring', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      aria-hidden="true"
      style={{
        '--light': light,
        '--base': base,
        '--dark': dark,
        '--speck': specks || 'transparent',
        '--size': `${size}px`,
      }}
    />
  );
}
