import {useEffect, useState} from 'react'
import axios from 'axios'

function Homeblog() {

  const [bloglements, setblog]= useState([]);
  useEffect(()=>{
    axios.get("/data.json").then((res) => {
      setblog(res.data.home);
    });
  },[])

  return (
    <>
{bloglements.map((bloglement, index) => ( 
<section className="section-padding-ash" key={index}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-title text-center">
          <h2>{bloglement.sec3_title}</h2>
          <h6>{bloglement.sec3_desc}</h6>
        </div>
      </div>
    </div>
    <div className="row">
      
    {bloglement.sec4items.map((item, index2) => (
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index2}> 
        <div className="blog-post-cont">
          <img
            src={item.image}
            className="img-fluid"
            alt="item 1"
          />
          <div className="text-cont">
            <h6>
              <a href="#">{item.author}</a> | <a href="#">{item.date}</a>
            </h6>
            <h5><a href="#">{item.title}</a></h5>
            <p>{item.shortdesc}</p>
            <a href="#" className="readdmore">
              Read More <i className="icofont icofont-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    ))}

    </div>
  </div>
</section>
))}
    </>
  )
}

export default Homeblog