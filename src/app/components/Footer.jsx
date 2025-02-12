import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <a href="/" className="mb-4 d-inline-block">
                  <img src="/img/logo.png" alt="PG Phone Shop Logo" width="50" />
                </a>
                <ul className="list-inline footer-menu">
                  <li className="list-inline-item">
                    <a href="/">Home</a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a href="/">Blog</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/terms">Terms &amp; Conditions</a>
                  </li> */}
                  {/* <li className="list-inline-item">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li> */}
                </ul>
                <p className="copyright-text">
                  Copyright &copy; 2025, Designed &amp; Developed By <a href="/">PG Phone Shop</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
