import React from "react";
import { useState } from "react";
import "./ContactListManager.css";
import Contact from "./Contact";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [job_title, setJobTitle] = useState("");
  const [birthday, setBirthday] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [favorite, setFavorite] = useState(false);

  // Handle input changes
  const handleJobTitleChange = ({ target: { value } }) => setJobTitle(value);
  const handleBirthdayChange = ({ target: { value } }) => setBirthday(value);
  const handleNotesChange = ({ target: { value } }) => setNotes(value);
  const handleWebsiteChange = ({ target: { value } }) => setWebsite(value);
  const handleFavoriteChange = ({ target: { checked } }) =>
    setFavorite(checked);

  // Add a new contact to the list
  const addContact = () => {
    if (job_title.trim() !== "") {
      setContacts([
        ...contacts,
        { job_title, birthday, notes, website, favorite },
      ]);
      setJobTitle("");
      setBirthday("");
      setNotes("");
      setWebsite("");
      setFavorite(false);
    }
  };

  // Delete a contact from the list
  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1); // Remove 1 item at index
    setContacts(newContacts);
  };

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <div className="form-container">
        <label>
          Job Title
          <input
            type="text"
            placeholder="Job Title"
            value={job_title}
            onChange={handleJobTitleChange}
          />
        </label>
        <label>
          Birthday
          <input
            type="date"
            placeholder="Birthday"
            value={birthday}
            onChange={handleBirthdayChange}
          />
        </label>
        <label>
          Notes
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={handleNotesChange}
          />
        </label>
        <label>
          Website
          <input
            type="url"
            placeholder="Website"
            value={website}
            onChange={handleWebsiteChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={favorite}
            onChange={handleFavoriteChange}
          />
          Favorite
        </label>
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ol className="contact-list-display">
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            contact={contact}
            onDelete={() => deleteContact(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;
