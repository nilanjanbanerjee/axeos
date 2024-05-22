import React from 'react'

function Footer() {
  return (
    <>
<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-item">
            <img className="img-fluid" src="src/assets/images/logo-2.png" alt="logo-2" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />
              ever since the 1500s
            </p>
          </div>
          <div className="footer-item">
            <ul className="social">
              <li>
                <a href="#">
                  <i className="icofont icofont-social-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont icofont-social-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont icofont-social-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont icofont-social-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont icofont-social-dribble" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-1">
          <div className="footer-item">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="footer-item">
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Online Marketing</a>
              </li>
              <li>
                <a href="#">App Design</a>
              </li>
              <li>
                <a href="#">App Development</a>
              </li>
              <li>
                <a href="#">Online Training</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-item">
            <h4>Recent Posts</h4>
            <ul>
              <li>
                <a href="#">What is Lorem Ipsum?</a>
              </li>
              <li>
                <a href="#">Why do we use it?</a>
              </li>
              <li>
                <a href="#">There are many variations</a>
              </li>
              <li>
                <a href="#">passages of Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Contrary to popular</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum is not simply</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-bottom">
            <p>Copyright © 2018. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div id="qnimate" className="off">
    <div id="search" className="open">
      <button
        data-widget="remove"
        id="removeClass"
        className="close"
        type="button"
      >
        ×
      </button>
      <form action="#" method="post" autoComplete="off">
        <input
          type="text"
          placeholder="Type search keywords here"
          defaultValue=""
          name="term"
          id="term"
        />
        <button className="btn btn-primary btn-xl" type="submit">
          <span className="glyphicon glyphicon-search" /> Search
        </button>
      </form>
    </div>
  </div>
</>

  )
}

export default Footer