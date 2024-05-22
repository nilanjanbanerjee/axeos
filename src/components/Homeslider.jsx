import React from 'react'

function Homeslider() {
  return (
    <>
      <div id="myCarousel" className="carousel slide banner-1" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to={0} className="active" />
    <li data-target="#myCarousel" data-slide-to={1} />
    <li data-target="#myCarousel" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {" "}
      <img
        className="first-slide"
        src="http://via.placeholder.com/1500x650"
        alt="First slide"
      />
      <div className="container">
        <div className="carousel-caption banner1 text-left">
          <h2 className="wow fadeInUp">Build a Good Relationshp</h2>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the1500s,
          </h6>
          <p className="hidden-sm-down">
            <a className="btn btn-md btn-default" href="#" role="button">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {" "}
      <img
        className="second-slide"
        src="http://via.placeholder.com/1500x650"
        alt="Second slide"
      />
      <div className="container">
        <div className="carousel-caption banner1">
          <h2 className="wow fadeInUp">We are Creative People</h2>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the1500s,
          </h6>
          <p className="hidden-sm-down">
            <a className="btn btn-md btn-default" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      {" "}
      <img
        className="third-slide"
        src="http://via.placeholder.com/1500x650"
        alt="Third slide"
      />
      <div className="container">
        <div className="carousel-caption banner1 text-right">
          <h2 className="wow fadeInUp">
            We are <span>X</span>eos<span>.</span>
          </h2>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the1500s,
          </h6>
          <p className="hidden-sm-down">
            <a className="btn btn-md btn-default" href="#" role="button">
              Browse gallery
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#myCarousel"
    role="button"
    data-slide="prev"
  >
    {" "}
    <span className="carousel-control-prev-icon" aria-hidden="true" />{" "}
    <span className="sr-only">Previous</span>{" "}
  </a>{" "}
  <a
    className="carousel-control-next"
    href="#myCarousel"
    role="button"
    data-slide="next"
  >
    {" "}
    <span className="carousel-control-next-icon" aria-hidden="true" />{" "}
    <span className="sr-only">Next</span>{" "}
  </a>{" "}
</div>

    </>
  )
}

export default Homeslider