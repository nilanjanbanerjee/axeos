import {useEffect, useState} from 'react'
import axios from 'axios'


function Homeabout() {


  const [aboutelements, setabout]= useState([]);
  useEffect(()=>{
    axios.get("/data.json").then((res) => {
      setabout(res.data.home);
    });
  },[])

  return (
    <>
{aboutelements.map((aboutelement, index) => (    
<section className="section-padding-about" key={index}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-lg-offset-right-6">
        <div className="text-left">
          <h2>{aboutelement.sec2_title}</h2>
          <p>{aboutelement.sec2_desc}</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-lg-offset-right-6">
        <div className="row">
        {aboutelement.sec2items.map((item, index2) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index2}>
            <div className="counter-cont">
              <h4>
                <span
                  className="numscroller"
                  data-min={1}
                  data-max={item.number}
                  data-delay={5}
                  data-increment={10}
                >
                  {item.number}
                </span>
                +
              </h4>
              <h6>{item.text}</h6>
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  </div>
</section>
))}
    </>
  )
}

export default Homeabout