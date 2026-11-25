import { shop } from '../shop';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {shop.name}
        </span>
        <a href={shop.facebook} target="_blank" rel="noreferrer">
          Facebook ↗
        </a>
      </div>
    </footer>
  );
}
