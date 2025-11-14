import React from "react";

function Contact({ contact, onDelete }) {
  return (
    <li>
      <div className="contact-item">
        <h3>
          {contact.job_title} {contact.favorite && "★"}
        </h3>
        <p>
          <strong>Birthday:</strong> {contact.birthday || "N/A"}
        </p>
        <p>
          <strong>Notes:</strong> {contact.notes || "N/A"}
        </p>
        <p>
          <strong>Website:</strong> {contact.website || "N/A"}
        </p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Contact;
