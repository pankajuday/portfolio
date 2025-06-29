import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const errors = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };
    
    let isValid = true;
    
    if (!formData.fullName.trim()) {
      errors.fullName = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email format is invalid";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear errors when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PROXY}/api/client/send-message`,
        formData
      );
      
      if (response.status === 200) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          errorMessage: "",
        });
        setFormData({ email: "", fullName: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, isSuccess: false }));
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: error.response?.data?.message || "Failed to send message. Please try again later.",
      });
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isError: false, errorMessage: "" }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="card backdrop-blur-sm mb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400 mt-1">contact@pankajuday.tech</p>
                  <a href="mailto:contact@pankajuday.tech" className="text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block">Send an email</a>
                </div>
              </div>
            </div>
            
            <div className="card backdrop-blur-sm mb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400 mt-1">Remote, Available Worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="card backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <p className="text-gray-400 mt-1">Available for freelance projects and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex justify-between items-center ">
                <div className="w-[48%]">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1 ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`input-field ${formErrors.fullName ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {formErrors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>
                )}
              </div>
              
              <div className="w-[48%]" >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`input-field ${formErrors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`input-field ${formErrors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`input-field resize-none ${formErrors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              
              {/* Form status messages */}
              {formStatus.isSuccess && (
                <div className="p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formStatus.isError && (
                <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                  {formStatus.errorMessage}
                </div>
              )}
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
