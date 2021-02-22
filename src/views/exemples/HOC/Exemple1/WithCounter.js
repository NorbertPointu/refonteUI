import React from 'react';

const WithCounter = (WrappedComponent, incrementNumber = 1) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      // The count need to be destructurate from state
      const { count } = this.state
      return (
        <WrappedComponent
          {...this.props}
          count={count}
          increment={this.increment}
        />
      )
    }
  }

  return NewComponent;
};

export default WithCounter
