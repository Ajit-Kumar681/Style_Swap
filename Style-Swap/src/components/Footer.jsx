import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #020617;
          color: #cbd5f5;
          padding: 40px 20px;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin: 15px 0;
        }

        .footer-links span {
          cursor: pointer;
          font-size: 14px;
        }

        .footer-links span:hover {
          color: #60a5fa;
        }

        .copyright {
          margin-top: 15px;
          font-size: 13px;
          color: #94a3b8;
        }
      `}</style>

      <div className="footer">
        <h3>StyleSwap</h3>

        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>

        <p>Rent & swap fashion sustainably</p>

        <div className="copyright">
          © {new Date().getFullYear()} StyleSwap
        </div>
      </div>
    </>
  );
};

export default Footer;
