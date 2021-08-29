import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please submit a log message and select a technician." });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log entry added by ${tech}.` });

      // Clears field after submission.
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="blue-grey-text" style={{ marginBottom: "2rem" }}>
          Add Log Entry
        </h4>
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
                <span>Needs Attention?</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn blue-grey"
          id="submit-button-1"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);
