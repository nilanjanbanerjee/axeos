import React from 'react'
import Innerheader from './components/Innerheader'

function Portfolio() {
  return (
    <>
    <Innerheader />
<section className="section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="portfolioFilter text-center">
          {" "}
          <a href="#" data-filter="*" className="current">
            All Categories
          </a>{" "}
          /{" "}
          <a href="#" data-filter=".people">
            Layout
          </a>{" "}
          /{" "}
          <a href="#" data-filter=".places">
            HTML
          </a>{" "}
          /{" "}
          <a href="#" data-filter=".food">
            Wordpress
          </a>{" "}
          /{" "}
          <a href="#" data-filter=".objects">
            Responsive
          </a>{" "}
          /{" "}
        </div>
        <div className="portfolioContainer">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 objects">
              <div className="grid objects">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 1</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 people places">
              <div className="grid people places">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 2</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 food">
              <div className="grid food">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 3</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 people places">
              <div className="grid people places">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 4</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 places objects">
              <div className="grid places objects">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 5</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 people food objects">
              <div className="grid people food objects">
                <figure className="effect-lily">
                  {" "}
                  <img
                    src="http://via.placeholder.com/350x200"
                    className="img-fluid"
                    alt="img01"
                  />
                  <figcaption>
                    <h2>Image 6</h2>
                    <p>Lily likes to play with crayons and pencils</p>
                    <p>
                      <a
                        className="info magnific-popup"
                        href="http://via.placeholder.com/500x500"
                      >
                        <b>View Large</b>
                      </a>
                    </p>{" "}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Portfolio