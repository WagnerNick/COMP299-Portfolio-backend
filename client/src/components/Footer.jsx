import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Nick Wagner</h3>
          <p>Game Developer • Programmer</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a>nickwagner233@gmail.com</a>
          <a>(289) 971-5280</a>
          <a href="https://github.com/WagnerNick" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nick-wagner233/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©{new Date().getFullYear()} Nick Wagner. All rights reserved.</p>
      </div>
    </footer>
  );
}
