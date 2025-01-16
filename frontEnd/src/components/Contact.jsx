import React, { useState } from "react";
import "../index.css";
import smi from "../assets/social-media.png";
import send from "../assets/send.png";
import mail from "../assets/mail.png";
import available from "../assets/available.png";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(formData);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PROXY}/api/client/send-message`,
        formData
      );
      alert("Thank you! Your message has been successfully submitted. We'll get back to you soon!");
      if (response.status === 201) {
        setSuccess(true);
        setFormData({ email: "", fullName: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="main justify-center  items-center flex  flex-col flex-wrap h-auto w-full relative top-32 "
      id="contact"
    >
      <div className="h-auto w-[80%]  ">
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3 ">
          Contect With Me
        </h1>
        <div className=" justify-center items-center flex md:flex-row flex-col flex-wrap mt-10 md:space-x-12">
          <div className=" h-auto    flex flex-col flex-wrap justify-center space-y-7">
            <div className="h-36 w-72 shadow-inner rounded-md bg-slate-800 justify-center items-center flex flex-col ">
              <a href="#socialMedia">
                <img src={smi} alt="" className="h-24 w-24" />
                <span className="text-slate-400">Socail Media</span>
              </a>
            </div>
            <div className="h-36 w-72 shadow-inner  rounded-md bg-slate-800 justify-center items-center flex flex-col ">
              <img src={mail} alt="" className="h-16 w-16 mb-3" />
              <span className="text-slate-400">pankajuday7033@gmail.com</span>
            </div>

            <div className="h-36 w-72 shadow-inner   rounded-md bg-slate-800 justify-center items-center flex flex-col ">
              <img src={available} alt="" className="h-16 w-16" />
              <span className="text-slate-400">Freelance Available</span>
            </div>
          </div>

          <div className=" h-full md:w-[55%] w-[85%] pb-4  rounded-md bg-slate-800 mt-5 md:mt-0 pt-5 items-center justify-center flex-col flex-wrap flex ">
            <form
            onSubmit={handleSubmit}
             
              className="h-full w-full   justify-center items-center flex-row flex-wrap flex space-y-5"
            >
              <div className=" w-[85%]   h-auto  justify-center items-center  md:flex-col flex-row flex-wrap flex mt-5">
                <div className="h-20 w-full items-center  justify-between flex-row flex-wrap flex space-y-3 md:space-y-0">
                  <input
                    type="text"
                    name="fullName"
                    className=" h-10   rounded-md md:w-[48%] w-full bg-slate-950 p-2"
                    placeholder="Enter Your Name"
                    
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                    id=""
                    className="h-10   md:w-[48%] w-full rounded-md bg-slate-950 p-2"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className=" w-[85%] h-auto justify-center items-center flex-row flex-wrap flex">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  required
                  onChange={handleChange}
                  className="h-10 w-full   rounded-md  bg-slate-950 p-2"
                  placeholder="Enter Your Subject"
                />
              </div>
              <div className="  w-[85%] h-auto  justify-center items-center flex-row flex-wrap flex">
                <textarea
                  name="message"
                  type="text"
                  value={formData.message}
                  required
                  onChange={handleChange}
                  className="h-52 w-full   rounded-md bg-slate-950 p-2 "
                  placeholder="Type Your Message..."
                ></textarea>
              </div>
              <div className="   rounded-md w-[40%]  h-auto justify-center space-x-2 items-center flex-row  flex-wrap flex bg-slate-950 ">
                <button type="submit" className="h-10   ">
                  Submit
                </button>
                <img src={send} alt="" className="h-6  " />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
