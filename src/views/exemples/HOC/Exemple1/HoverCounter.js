// https://www.kaherecode.com/tutorial/les-composants-dordre-superieurhoc-avec-react
import React from 'react';
import PropTypes from 'prop-types';
import WithCounter from './WithCounter';

class HoverCounter extends React.Component {
  focus =() => {}

  render() {
    const { count, increment } = this.props
    return (
      // eslint-disable-next-line react/button-has-type
      <p onMouseOver={increment} onFocus={this.focus}>
        {`Survolé ${count} fois`}
      </p>
    )
  }
}
HoverCounter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
};
export default WithCounter(HoverCounter, 2)
