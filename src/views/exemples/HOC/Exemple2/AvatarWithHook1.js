import React from 'react';
import PropTypes from 'prop-types';
import useRequest1 from './useRequest1';

const AvatarWithHook1 = ({ username }) => {
  const [state] = useRequest1(`https://api.github.com/users/${username}`)
  console.log('state', JSON.stringify(state));
  if (state.isFetching) {
    return "Loading";
  }

  if (state.error) {
    return "Error";
  }

  return <img src={state.responseData.avatar_url} alt="avatar" />;
}
AvatarWithHook1.propTypes = {
  username: PropTypes.string,
};
export default AvatarWithHook1
