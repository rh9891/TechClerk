import React, { Fragment } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
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
          on <Moment format="MMMM Do YYYY [at] h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons blue-grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
