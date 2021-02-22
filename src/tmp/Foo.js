import React from 'react';
import PropTypes from 'prop-types';

const Foo = ({ width, height, onChange }) => (
  <div>
    <input name="width" value={width} onChange={onChange} />
    <input name="height" value={height} onChange={onChange} />
  </div>
);

Foo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Foo
