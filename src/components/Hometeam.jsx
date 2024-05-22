import {useEffect, useState} from 'react'
import axios from 'axios'

function Hometeam() {

  const [teamlements, setteam]= useState([]);
  useEffect(()=>{
    axios.get("/data.json").then((res) => {
      setteam(res.data.home);
    });
  },[])

  return (
    <>
{teamlements.map((teamlement, index) => (        
<section className="section-padding-ash" key={index}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-title text-center">
          <h2>{teamlement.sec3_title}</h2>
          <h6>{teamlement.sec3_desc}</h6>
        </div>
      </div>
    </div>
    <div className="row">

    {teamlement.sec3items.map((item, index2) => (
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index2}>
        <div className="team-cont">
          <img src={item.image} className="img-fluid" alt="item 1"/>
          <div className="text-cont">
            <h5><a href="#">{item.name}</a></h5>
            <h6>{item.designation}</h6>
            <p>{item.desc}</p>
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

export default Hometeam