import React, { useState } from "react";
import { Card } from "react-bootstrap";

import CustomModal from "../components/Modal";
import Heart from "../assets/images/heart.png";
import Like from "../assets/images/likeheart.png";

export default function Entry({ item, setShow, show }) {
  const [like, setLike] = useState(false);

  return (
    <div>
      <Card
        key={item.id}
        className="guest_job_container"
        style={{ width: "18rem" }}
      >
        <Card.Img onClick={() => setShow(true)} variant="top" src={item.url} />
        <Card.Body>
          <Card.Title className="guest_job_header_text">
            {item.company.name}
          </Card.Title>
          <Card.Text>{item.company.catchPhrase}</Card.Text>
          <Card.Text className="guest_job_description">
            {`${item.address.suite} ${item.address.street}, ${item.address.city}, ${item.address.zipcode}`}
          </Card.Text>
          <div className="guest_job_footer">
            <Card.Text>{item.name}</Card.Text>
            <Card.Text>{item.phone}</Card.Text>
            <div style={{ cursor: "pointer" }} onClick={() => setLike(!like)}>
              {like ? (
                <img height={20} src={Heart} alt="heart" />
              ) : (
                <img height={20} src={Like} alt="heart" />
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
      {show && <CustomModal modal={"contact"} setShow={setShow} />}
    </div>
  );
}
