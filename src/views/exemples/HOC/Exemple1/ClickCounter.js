// https://www.kaherecode.com/tutorial/les-composants-dordre-superieurhoc-avec-react
import React from 'react';
import PropTypes from 'prop-types';
import WithCounter from './WithCounter';

class ClickCounter extends React.Component {
  // To prevent error on i need ti create a pure function, because i have only render() in this class
  autre= () => {}

  render() {
    const { count, increment } = this.props
    return (
      // eslint-disable-next-line react/button-has-type
      <button onClick={increment}>
        {`cliqué ${count} fois`}
      </button>
    )
  }
}

ClickCounter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
};

export default WithCounter(ClickCounter, 4)
