import React from 'react';
import PropTypes from 'prop-types'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
}

export default Task;