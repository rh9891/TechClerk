import React from "react";

const AddButton = () => {
  return (
    <div className="fixed-action-btn click-to-toggle">
      <a href="#!" className="btn-floating btn-large blue-grey">
        <i className="large material-icons">more_horiz</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating blue-grey modal-trigger"
          >
            <i className="material-icons">people</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating blue-grey modal-trigger"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a
            href="#add-log-modal"
            className="btn-floating blue-grey modal-trigger"
          >
            <i className="material-icons">note_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
