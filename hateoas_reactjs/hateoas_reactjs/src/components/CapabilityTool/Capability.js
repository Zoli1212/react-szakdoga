import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCapability } from "../../actions/CapabilityActions";
import UpdateIcon from "./UpdateIcon";

export class Capability extends Component {
  deleteCapability = (id) => {
    this.props.deleteCapability(id);
  };

  render() {
    const {
      id,
      numOfAvailableDevelopers,
      numOfDevelopers,
      techStack,
      _links
    } = this.props.capability;

    return (
      <div className="card card-body border-primary mb-3">
        <h4 className="text-primary">
          {techStack} ...{_links.getThisCapability.href}
          <UpdateIcon id={id} />
          
          <i
            className="fas fa-user-times ml-2"
            style={{ color: "red" }}
            onClick={this.deleteCapability.bind(
              this, id)}
          />
        </h4>

        <ul className="list-group">
          <li className="list-group-item bg-light text-primary">
            Technológiai tudás: {techStack}
          </li>
          <li className="list-group-item bg-light  text-primary">
            Összes keresett programozó: {numOfDevelopers}
          </li>
          <li className="list-group-item bg-light  text-primary">
            Elérhető programozók száma: {numOfAvailableDevelopers}
          </li>
        </ul>
      </div>
    );
  }
}

Capability.propTypes = {
  capability: PropTypes.object.isRequired,
  deleteCapability: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCapability }
)(Capability);
