import {useEffect, useState} from 'react'
import axios from 'axios'


function Homeservices() {


 const [homeelements, sethome]= useState([]);
  useEffect(()=>{
    axios.get("/data.json").then((res) => {
      sethome(res.data.home);
    });
  },[])


return (
<>
{homeelements.map((homeelement, index) => (
  <section className="section-padding-ash" key={index}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="section-title text-center" >
            <h2>{homeelement.sec1_title}</h2>
            <h6>{homeelement.sec1_desc}</h6>
          </div>
        </div>
      </div>
      
      <div className="row">
      {homeelement.serviceselements.map((item, index2) => (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index2}>
          <div className="services-cont">
            <div className="icon-cont">
              <i className="icofont icofont-code-alt" />
            </div>
            <div className="text-cont" >
              <h6>{item.title}</h6>
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

export default Homeservices