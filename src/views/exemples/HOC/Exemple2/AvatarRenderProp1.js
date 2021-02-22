import React from 'react';
import PropTypes from 'prop-types';
import RenderProp from './RenderProp1';

const AvatarRenderProp1 = ({ username }) => (
  <RenderProp url={`https://api.github.com/users/${username}`}>
    {(state) => {
      if (state.isFetching) {
        return "Loading";
      }

      if (state.error) {
        return "Error";
      }

      return <img src={state.responseData.avatar_url} alt="avatar" />;
    }}

  </RenderProp>
);
AvatarRenderProp1.propTypes = {
  username: PropTypes.string,
};
export default AvatarRenderProp1
