import React, { useState } from "react";
import "../index.css";

const Contact = () => {
  const [disable, setDisable] = useState(false);

  return (
    <div className="main justify-center  items-center flex  flex-col flex-wrap h-auto w-full relative top-32">
      <div className="h-auto w-[80%]  ">
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3 ">
          Contect With Me
        </h1>
        <div className=" justify-center items-center flex md:flex-row flex-col flex-wrap mt-10 md:space-x-12">
          <div className=" h-auto    flex flex-col flex-wrap justify-center space-y-12">
            <div className="h-32 w-72   rounded-md bg-slate-800 ">kfajsl</div>
            <div className="h-32 w-72   rounded-md bg-slate-800 ">kfajsl</div>
            <div className="h-32 w-72   rounded-md bg-slate-800 ">kfajsl</div>
          </div>

          <div className=" h-full md:w-[55%] w-[85%] pb-4  rounded-md bg-slate-800 mt-5 md:mt-0 pt-5 items-center justify-center flex-col flex-wrap flex ">
            <form
              action=""
              className="h-full w-full   justify-center items-center flex-row flex-wrap flex space-y-5"
            >
              <div className=" w-[85%]   h-auto  justify-center items-center  md:flex-col flex-row flex-wrap flex mt-5">
                <div className="h-20 w-full items-center  justify-between flex-row flex-wrap flex space-y-3 md:space-y-0">
                  <input
                    type="text"
                    name="name"
                    className=" h-10   rounded-md md:w-[48%] w-full bg-slate-950 p-2"
                    placeholder="Enter Your Name"
                  />

                  <input
                    type="email"
                    name="email"
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
                  className="h-10 w-full   rounded-md  bg-slate-950 p-2"
                  placeholder="Enter Your Subject"
                />
              </div>
              <div className="  w-[85%] h-auto  justify-center items-center flex-row flex-wrap flex">
                {/* <input type="text" name="message" className="h-44 w-full   rounded-md bg-slate-950  "/> */}
                <textarea
                  name="message"
                  className="h-52 w-full   rounded-md bg-slate-950 p-2 "
                  placeholder="Type Your Message..."
                ></textarea>
              </div>
              <div className="   rounded-md w-[40%]  h-auto justify-center items-center flex-row flex-wrap flex bg-slate-950 ">
                <button type="submit" className="h-10 w-full ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
