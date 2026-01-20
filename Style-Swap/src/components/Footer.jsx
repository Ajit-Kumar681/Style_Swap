import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(180deg, #020617, #020617);
          color: #cbd5e1;
          padding: 70px 20px 25px;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .footer-container {
          max-width: 1280px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 45px;
        }

        .footer-brand h2 {
          color: #ffffff;
          font-size: 24px;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .footer-brand p {
          font-size: 14.5px;
          color: #94a3b8;
          line-height: 1.8;
        }

        .footer h3 {
          font-size: 16px;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 18px;
          position: relative;
        }

        .footer h3::after {
          content: "";
          width: 32px;
          height: 2px;
          background: #38bdf8;
          position: absolute;
          left: 0;
          bottom: -6px;
        }

        .footer-item {
          display: flex;
          gap: 14px;
          margin-bottom: 14px;
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
        }

        .footer-item span {
          color: #38bdf8;
          font-size: 18px;
          margin-top: 2px;
        }

        .footer a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          display: inline-block;
          margin-bottom: 10px;
          transition: all 0.25s ease;
        }

        .footer a:hover {
          color: #38bdf8;
          transform: translateX(4px);
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 45px auto 0;
          padding-top: 20px;
          border-top: 1px solid #1e293b;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <h2>StyleSwap</h2>
            <p>
              Premium clothing rental platform offering designer outfits
              for every occasion. Rent smart. Dress better. Stay sustainable.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3>Corporate Office</h3>
            <div className="footer-item">
              <span>📍</span>
              <div>
                StyleSwap Technologies Pvt. Ltd.<br />
                Fashion Business Park, 2nd Floor<br />
                MG Road, Bengaluru – 560001<br />
                Karnataka, India
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>
            <div className="footer-item">
              <span>📞</span>
              <div>+91 7361952329</div>
            </div>
            <div className="footer-item">
              <span>✉️</span>
              <div>support@styleswap.com</div>
            </div>
            <div className="footer-item">
              <span>🕘</span>
              <div>Mon – Sat | 10:00 AM – 7:00 PM</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <a href="/">Home</a><br />
            <a href="/browse">Browse Collection</a><br />
            <a href="/how-it-works">How It Works</a><br />
            <a href="/login">Login</a><br />
            <a href="/signup">Create Account</a>
          </div>

        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} StyleSwap. All rights reserved.</div>
          <div>Designed for Industry-Level Projects</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
