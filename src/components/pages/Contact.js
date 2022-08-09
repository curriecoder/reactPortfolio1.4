import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  function sendMail() {
    let link = "mailto:andrew.j.currie0@gmail.com"
             + "?cc=" + `${email}`
             + "&subject=" + encodeURIComponent(`Name: ${userName}`)
             + "&body=" + encodeURIComponent(`Message: ${body}`)
    ;
    
    window.location.href = link;
}
  const handleFormSubmit = (e) => {
    e.preventDefault();

    sendMail();
    
    alert(`Thank you for your submission ${userName}`);

    setUserName("");
    setEmail("");
    setBody("");
  };

  return (
    <div className="container">
      <h1 className="my-2">Contact</h1>
      <form className="p-4 p-md-5 border rounded-3">
        <div className="mb-3">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="First Name Last Name"
          />
          <label for="floatingName">Name</label>
        </div>
        <div className="mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="email@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <label for="floatingText">Type your message here:</label>
        <textarea
          value={body}
          name="body"
          onChange={handleInputChange}
          className="border rounded-3 text-dark"
          type="text"
        />
        <div className="text-center">
          <button
            className="w-50 btn btn-lg btn-success"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
        <hr className="my-4" />
      </form>
    </div>
  );
}
