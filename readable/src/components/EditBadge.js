import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Badge from './Badge';

const EditBadge = ({ link }) => (
  <Link className="badge badge-primary" to={link}>
    Edit <i className="fa fa-paint-brush" aria-hidden="true" />
  </Link>
);


EditBadge.propTypes = {
  link: PropTypes.string.isRequired,
};

export default EditBadge;
