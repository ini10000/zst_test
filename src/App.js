import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Users } from "./data/Users";
import "./assets/css/landingGuest.css";

import Navbar from "./components/Navbar";
import CustomModal from "./components/Modal";
import Entry from "./components/Entry";

export default function App() {
  const [showModal, setShow] = useState(true);
  const [showContact, setContact] = useState(false);
  const [entries, setEntries] = useState(Users.data);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = Users.data.filter((data) => {
      return data.company.name.toLowerCase().includes(value);
    });
    setEntries(result);
  };

  return (
    <div className="guest_container">
      <div className="guest_header">
        <Navbar
          click={() => {
            setShow(true);
          }}
        />
      </div>
      <div className={"search_container"}>
        <InputGroup className="mb-3 guest_search">
          <FormControl
            className="search"
            onChange={(e) => handleSearch(e)}
            placeholder="Filter Results"
          />
          <Button style={{ backgroundColor: "#3e4095" }} id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>

      <div className="guest_body">
        <div className="guest_body_left">
          {showModal && <CustomModal modal={"login"} setShow={setShow} />}
          {entries.map((item, index) => {
            return (
              <Entry
                key={index}
                item={item}
                show={showContact}
                setShow={setContact}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
