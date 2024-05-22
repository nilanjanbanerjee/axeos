import React from 'react'

function BlogDetails() {
  return (
    <>
<section className="section-padding-ash">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="blog-post-cont">
              {" "}
              <img
                src="http://via.placeholder.com/1000x650"
                className="img-fluid"
                alt="item 1"
              />
              <div className="text-cont">
                <h6>
                  <a href="#">Nilanjan</a> | <a href="#">January 19, 2017</a>
                </h6>
                <h5>
                  <a href="#">What is Lorem Ipsum?</a>
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words. There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words. There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or
                  randomised words. There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words.
                </p>
                <div className="social-cont">
                  <div className="alignleft">
                    <h5>Share us on:</h5>
                  </div>
                  <div className="blog-details-social alignleft">
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
                <h5>Comments</h5>
                <form
                  action="process.php"
                  method="post"
                  name="ContactForm"
                  id="ContactForm"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="First Name *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          placeholder="Last Name *"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject *"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows={5}
                          className="form-control"
                          name="comment"
                          placeholder="Your Message *"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="sidebar">
          <div className="sidebar-item">
            <h5>Category</h5>
            <hr />
            <ul>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Corporate</a>
              </li>
              <li>
                <a href="#">Multipurpose</a>
              </li>
              <li>
                <a href="#">Creative</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-item">
            <h5>Archives</h5>
            <hr />
            <ul>
              <li>
                <a href="#">2017</a>
              </li>
              <li>
                <a href="#">2016</a>
              </li>
              <li>
                <a href="#">2015</a>
              </li>
              <li>
                <a href="#">2014</a>
              </li>
              <li>
                <a href="#">2013</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-item">
            <h5>Recent Posts</h5>
            <hr />
            <ul>
              <li>
                <a href="#">Iaculisnunc sedaugue lacus</a>
              </li>
              <li>
                <a href="#">Portanon pulvinar nequelaoree</a>
              </li>
              <li>
                <a href="#">Quis variusquam quisqueid</a>
              </li>
              <li>
                <a href="#">Eget miproin sedliberoenimsed</a>
              </li>
              <li>
                <a href="#">Portanon pulvinar nequelaoree</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default BlogDetails