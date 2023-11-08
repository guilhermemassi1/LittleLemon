import { useState } from "react";
import DatePicker from "react-datepicker";
import "./bookingpage.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import Footer from "./Footer";
import { format } from "date-fns";
export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [date, setDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [occasion, setOccasion] = useState("Other");
  const [time, setTime] = useState("17:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatedDate = format(date, "MMMM do yyyy");
    alert(
      `Table booked for ${name} on ${formatedDate} at ${time} pm to ${numberOfGuests} Guests.`
    );
    console.log(name, phone, email, numberOfGuests, occasion, date, time);
    setName("");
    setPhone("");
    setEmail("");
    setDate(new Date());
    setNumberOfGuests(0);
  };

  return (
    <div className="bookingpage">
      <Header />
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <div className="formPersonalInfo">
            <div className="formName">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength="3"
              />
            </div>
            <div className="formEmail">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formPhone">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phoneNumber"
                required
                minLength="10"
                maxLength="12"
              />
            </div>
          </div>
          <div className="formDateTime">
            <div className="formDate">
              <label htmlFor="dateTable">Choose a Date</label>
              <DatePicker
                id="dateTable"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className="formTime">
              <label htmlFor="timeTable">Choose a Time</label>
              <select id="timeTable" onChange={(e) => setTime(e.target.value)}>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
          </div>
          <div className="tableInfo">
            <div className="formNumber">
              <label htmlFor="numberOfGuests">Number of guests:</label>
              <input
                id="numberOfGuests"
                name="numberOfGuests"
                type="number"
                value={numberOfGuests}
                min="0"
                onChange={(e) => setNumberOfGuests(e.target.value)}
              />
            </div>
            <div className="formOccasion">
              <label htmlFor="occasion">Occasion</label>
              <div id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                <input type="radio" value="Birthday" name="occasion" /> Birthday
                <input type="radio" value="Anniversary" name="occasion" />
                Anniversary
                <input type="radio" value="Other" name="occasion" /> Other
              </div>
            </div>
          </div>

          <div className="formSubmitButton">
            <button type="submit" value="Submit">
              Confirm Table
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
