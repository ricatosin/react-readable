import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from './VoteButton';

const VoteButtons = ({ voteUp, voteDown }) => (
  <div className="d-flex">
    <h6>Rate :
    
    <VoteButton clickHandler={voteUp} />
    <VoteButton clickHandler={voteDown} btnClass="btn btn-outline-secondary" iconClass="fa fa-thumbs-o-down" />
    </h6>
  </div>
);

VoteButtons.propTypes = {
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default VoteButtons;
