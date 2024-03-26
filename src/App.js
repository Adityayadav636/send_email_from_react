import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css'; // Import CSS file for styling

const App = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    emailjs.sendForm('service_6iaf1jc', 'template_sg2fjsa', formRef.current, '3YF-GioYB9eN6t4fk')
      .then((result) => {
        alert("Success!! Your query is generated in our system.");
        console.log(result.text);
        // You can add your own success handling logic here
      }, (error) => {
        alert("Error! Something went wrong.");
        console.log(error.text);
        // Handle error
      });

    // Reset form fields after submission
    formRef.current.reset();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-heading">Contact Us</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
           
          <div className="form-group">
            <label htmlFor="query">Your Query:</label>
            <textarea id="query" name="query" rows="4" />
          </div>
          <div className="submitDiv">
            <button type="submit" className="submit-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
