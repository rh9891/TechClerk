import React, { useState, Fragment } from "react";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    console.log(message, tech, attention);
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="blue-grey-text">System Log Entry</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(event) => setTech(event.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Sam Weir">Sam Weir</option>
              <option value="Bill Haverchuck">Bill Haverchuck</option>
              <option value="Neal Schweiber">Neal Schweiber</option>
              <option value="Lindsay Weir">Lindsay Weir</option>
              <option value="Daniel Desario">Daniel Desario</option>
              <option value="Ken Miller">Ken Miller</option>
              <option value="Nick Andopolis">Nick Andopolis</option>
              <option value="Kim Kelly">Kim Kelly</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(event) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn-flat blue-grey-text"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
