import React, { Component } from "react";
import Moment from "react-moment";
import isEmpty from "../../validation/is-empty";
import PropTypes from "prop-types";

class ProfileCred extends Component {
  render() {
    const { education, experience } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        {isEmpty(exp.location) ? null : <span>{exp.location}</span>}
        {isEmpty(exp.description) ? null : (
          <p>
            <strong>Description:</strong> {exp.description}
          </p>
        )}
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {edu.fieldofstudy}
        </p>
        {isEmpty(edu.location) ? null : <span>{edu.location}</span>}
        {isEmpty(edu.description) ? null : (
          <p>
            <strong>Description:</strong> {edu.description}
          </p>
        )}
      </li>
    ));

    return (
      <div className="row">
        {eduItems && (
          <div className="col-md-6">
            <h3 className="text-center text-info">Experience</h3>
            <ul className="list-group">{expItems}</ul>
          </div>
        )}
        {expItems && (
          <div className="col-md-6">
            <h3 className="text-center text-info">Education</h3>
            <ul className="list-group">{eduItems}</ul>
          </div>
        )}
      </div>
    );
  }
}

ProfileCred.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};

export default ProfileCred;
