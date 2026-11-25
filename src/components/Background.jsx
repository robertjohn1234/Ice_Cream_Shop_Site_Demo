// Soft pastel blobs and floating sprinkles behind the whole page.
const SPRINKLES = [
  { x: 6, y: 14, c: '#ff8fb1', r: 20, d: 0 },
  { x: 18, y: 62, c: '#8c6bff', r: -35, d: 1.2 },
  { x: 30, y: 30, c: '#5fd3a5', r: 60, d: 2.1 },
  { x: 44, y: 82, c: '#ffc43d', r: -10, d: 0.6 },
  { x: 57, y: 18, c: '#ff8fb1', r: 75, d: 3 },
  { x: 66, y: 55, c: '#5fd3a5', r: -55, d: 1.7 },
  { x: 78, y: 28, c: '#ffc43d', r: 30, d: 2.6 },
  { x: 88, y: 72, c: '#8c6bff', r: -20, d: 0.3 },
  { x: 94, y: 10, c: '#5fd3a5', r: 45, d: 2.2 },
  { x: 12, y: 90, c: '#ffc43d', r: 80, d: 1 },
  { x: 72, y: 92, c: '#ff8fb1', r: -70, d: 3.4 },
  { x: 38, y: 50, c: '#8c6bff', r: 15, d: 2.8 },
];

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__blob bg__blob--1" />
      <div className="bg__blob bg__blob--2" />
      <div className="bg__blob bg__blob--3" />
      {SPRINKLES.map((s, i) => (
        <span
          key={i}
          className="sprinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            background: s.c,
            '--r': `${s.r}deg`,
            animationDelay: `${s.d}s`,
          }}
        />
      ))}
    </div>
  );
}
