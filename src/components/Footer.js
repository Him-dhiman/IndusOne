import React from "react";
import "../css/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
// import { MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <>
      <div className="new--line--add"></div>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Tech IndusOne newsletter for latest updates &nbsp;
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>

          <div className="input-areas">

            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
           </form>
          </div>
        </section>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Products</h2>
              <Link to="/">New Technologies</Link>
              <Link to="/">AI Connect</Link>
              <Link to="/">IMS</Link>
              <Link to="/">Learn</Link>
            </div>
            <div class="footer-link-items">
              <h2>Explore</h2>
              <Link to="/">Store</Link>
              <Link to="/">Support</Link>
              <Link to="/">Blogs</Link>
              <Link to="/">Languages</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Demo</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div class="footer-link-items">
              <h2>Company</h2>
              <Link to="/">About</Link>
              <Link to="/">Vision</Link>
              <Link to="/">Support</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                Tech IndusOne
                <i className="fa-solid fa-globe"></i>
              </Link>
            </div>
            <small class="website-rights">All Rights Reserved @2022</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
