import React from 'react'

function Innerheader() {
  return (
    <>
<div id="myCarousel" className="carousel slide banner-2" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        className="first-slide"
        src="http://via.placeholder.com/1500x350"
        alt="First slide"
      />
      <div className="container">
        <div className="carousel-caption banner1 text-center">
          <h2 className="wow fadeInUp">About</h2>
          <p className="breadcrumb-item">
            <a href="#">Home</a> / About
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Innerheader