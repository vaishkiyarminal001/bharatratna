import React, { useState } from 'react';
import "./Home.css";

export default function Home() {
  const [formData, setFormData] = useState({
    movieName: '',
    theater: '',
    screen: '',
    showTiming: '',
    price: '',
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
    // Form data logging (optional)
    console.log('Form Data:', formData);

    // Prepare the message based on the form data
    const message = `%0aNumber of Tickets: ${formData.numberOfTickets}`;

    // WhatsApp URL including the phone number and message
    const whatsappUrl = `https://wa.me/<+91 74794 75733>?text=${message}`;

    // Redirect the user to the WhatsApp URL
    window.location.href = whatsappUrl;
  };

  return (
    <div className='home'>
      <div className="nav">
        <h1>Book Your Show Now and Grab Your Seat</h1>
      </div>

      <div className="text">
        <h3>
          "Experience the excitement of the newest release! Book your first ticket now for the midnight premiere at 12:00 A.M. Be among the first to witness this highly anticipated movie. Secure your spot and immerse yourself in the thrill from the very beginning!"
        </h3>
      </div>

      <div className="movieform">
        <img src="https://www.cntvbihar.in/news_file/932883170IMG-20231030-WA0003.jpg" alt="error" />

        <div className='form'>
          <form>
            <label>
              Manjhi The Bharat Ratna:
              <input type="text" name="movieName" value={formData.movieName} onChange={handleChange} />
            </label>
            <label>
              Theater:
              <input type="text" name="theater" value={formData.theater} onChange={handleChange} />
            </label>
            <label>
              Screen:
              <input type="text" name="screen" value={formData.screen} onChange={handleChange} />
            </label>
            <label>
              Show Timing:
            <input type="text" name="showTiming" value="12:00 A.M." readOnly />
            </label>

            <label>
              Price:
              <input type="text" name="price" value={formData.price} onChange={handleChange} />
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
