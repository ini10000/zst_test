import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

import "../assets/css/modal.css";
import "../assets/css/landingGuest.css";
import Close from "../assets/images/Close.png";

export default function CustomModal({ setShow, modal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="modal_container">
      <div className=" modal-main">
        <div className="modal_body">
          <div className="modal_row">
            <h3>{modal === "login" ? "Login" : "Contact Agent"}</h3>
            {modal === "contact" && (
              <div onClick={() => setShow(false)} className="close_div">
                <img src={Close} alt="close" />
              </div>
            )}
          </div>
          {invalid && <p className="invalid">Invalid email address/password</p>}
          {failed && <p className="invalid">Please fill all the fields</p>}
          {modal === "login" ? (
            <div>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                label="E-mail Address"
                name="email"
                type="email"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                name="password"
                type="password"
              />
            </div>
          ) : (
            <div>
              <Input
                onChange={(e) => setName(e.target.value)}
                label="Name"
                name="name"
                type="text"
              />
              <Input
                onChange={(e) => setMessage(e.target.value)}
                label="Message"
                name="message"
                type="text"
              />
            </div>
          )}
          <div className="submit_button_container">
            <Button
              click={(e) => {
                e.preventDefault();
                modal === "login"
                  ? email === "user" && password === "password"
                    ? setShow(false)
                    : setInvalid(true)
                  : !name && !message
                  ? setFailed(true)
                  : setShow(false);
              }}
              containerStyle="submit_button"
              textStyle="post_button_text"
              title={modal === "login" ? "Login" : "Send"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
