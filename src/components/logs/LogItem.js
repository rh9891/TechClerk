import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log entry has been deleted." });
  };

  return (
    <li className="collection-item" id="collection-item-1">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention
              ? "red-text text-darken-3"
              : "indigo-text text-darken-4"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="blue-grey-text">
          <span></span>Last Updated:{" "}
          <span
            className="blue-grey-text"
            style={{ textDecoration: "underline" }}
          >
            {log.tech}
          </span>
          <span
            className="blue-grey-text"
            style={{ textDecoration: "underline" }}
          >
            {" "}
            (ID #{log.id})
          </span>{" "}
          on <Moment format="MMMM Do YYYY [at] h:mm:ss A">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons blue-grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
