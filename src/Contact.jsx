import React, { useState } from 'react';
import axios from 'axios'
import Innerheader from './components/Innerheader'

function Contact() {


  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
     try 
     {
       const response = await axios.post('http://localhost:3000/user', formData);
       console.log(response.data);
       alert('Form submitted successfully');
     } catch (error) {
       console.error('Error submitting form', error);
       alert('Error submitting form');
     }
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const jsonData = JSON.stringify(formData, null, 2);
  //   downloadJson(jsonData);
  // };

  // const downloadJson = (jsonData) => {
  //   const blob = new Blob([jsonData], { type: 'application/json' });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'formData.json';
  //   link.click();
  //   URL.revokeObjectURL(url);
  // };



  return (
    <>
<Innerheader />
<section className="section-padding-ash">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="contact-left">
          <h4>Submit Your Message</h4>
          <p>
            Established fact that a reader will be distracted by the readable
            content
          </p>
          <div className="form-cont">
          <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="First Name *"
                      value={formData.fname} onChange={handleChange}
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
                      value={formData.lname} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone} onChange={handleChange}
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
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      rows={5}
                      className="form-control"
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary wow tada">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="contact-right">
          <h4>Contact Info</h4>
          <p>Share Your Contact Info with Others</p>
          <div className="contact-info">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info-item">
                  <div className="icon-cont">
                    <i className="icofont icofont-paint" />
                  </div>
                  <div className="text-cont">
                    <h6>Address:</h6>
                    <p>P-32 Kolkata - 700125</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info-item">
                  <div className="icon-cont">
                    <i className="icofont icofont-paint" />
                  </div>
                  <div className="text-cont">
                    <h6>Phone:</h6>
                    <p>+91 9874039154</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info-item">
                  <div className="icon-cont">
                    <i className="icofont icofont-paint" />
                  </div>
                  <div className="text-cont">
                    <h6>Skype:</h6>
                    <p>my.skype.id</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info-item">
                  <div className="icon-cont">
                    <i className="icofont icofont-paint" />
                  </div>
                  <div className="text-cont">
                    <h6>Email ID:</h6>
                    <p>name@yourdomain.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58908.92750053163!2d88.4393756!3d22.6609473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1461641077502"
                    className="map"
                    allowFullScreen=""
                  />
                </div>
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

export default Contact