import React, { useState } from 'react';
import "./Home.css";

export default function Home() {
  const [formData, setFormData] = useState({
    yourname: '', // Added 'yourname' for the user's name
    showTiming: '12:00 P.M.',
    category: 'Platinum', 
    numberOfTickets: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Prepare the message based on the form data
    const message = `%0aYour Name: ${formData.yourname} %0aNumber of Tickets: ${formData.numberOfTickets} %0aCategory: ${formData.category}`;

    // WhatsApp URL including the phone number and message
    const whatsappUrl = `https://wa.me/+917479475733?text=${message}`;

    // Redirect the user to the WhatsApp URL
    window.location.href = whatsappUrl;
  };

  return (
    <div className='home'>
      <div className="nav">
        <h1>Book Your Show Now and Grab Your Seat</h1>
      </div>

      <div className="text">
        <h3>"Be part of the thrilling premiere! Book now for an exhilarating movie experience and secure your front-row seat!"</h3>
      </div>

      <div className="movieform">
        <img src="https://www.cntvbihar.in/news_file/932883170IMG-20231030-WA0003.jpg" alt="error" />

        <div className='form'>
          <form>
            <label>
              Your Name:
              <input type="text" name="yourname" value={formData.yourname} onChange={handleChange} />
            </label>

            <label>
              Show Timing:
              <input type="text" name="showTiming" value={formData.showTiming} readOnly />
            </label>

            <label className='price'>
              Price:
              <select className='categorySelect' name="category" value={formData.category} onChange={handleChange}>
                <option value="Platinum">Platinum ₹250</option>
                <option value="Gold">Gold ₹200</option>
                <option value="Loung">Loungers ₹230</option>
              </select>
            </label>

            <label>
              No. Of Tickets:
              <input
                type="number"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSubmitBook}>Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}
