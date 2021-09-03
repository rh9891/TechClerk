import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { _id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(_id);
    M.toast({
      html: `Technician, ${firstName} ${lastName}, has been deleted.`,
    });
  };

  return (
    <li className="collection-item blue-grey-text">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons blue-grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
