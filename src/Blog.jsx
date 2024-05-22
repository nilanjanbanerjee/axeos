import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Innerheader from './components/Innerheader'

function Blog() {


  const [bloglements, setblog]= useState([]);
  useEffect(()=>{
    axios.get("/data.json").then((res) => {
      setblog(res.data.blog);
    });
  },[])



  return (
    <>
  <Innerheader />
  <section className="section-padding-ash">
  <div className="container">
    <div className="row">


    
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="row">
          
          
        {bloglements.map((bloglement, index) => ( 
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={index}>
            <div className="blog-post-cont">
              <img
                src={bloglement.image}
                className="img-fluid"
                alt="item 1"
              />
              <div className="text-cont">
                <h6>
                  <a href="#">{bloglement.author}</a> | <a href="#">January 19, 2017</a>
                </h6>
                <h5>
                <Link to={`/BlogDetails`}>{bloglement.title}</Link>
                </h5>
                <p>
                {bloglement.shortdesc}
                </p>
                <Link className="readdmore" to={`/BlogDetails/${bloglement.id}`}> Read More <i className="icofont icofont-long-arrow-right" /> </Link>
              </div>
            </div>
          </div>
          ))}



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

export default Blog