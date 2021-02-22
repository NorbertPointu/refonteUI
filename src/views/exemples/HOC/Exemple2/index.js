import React from 'react';
import AvatarRenderProp1 from './AvatarRenderProp1';
import AvatarWithHook1 from './AvatarWithHook1';

const Exemple2 = (props) => (
  <div>
    With RenderProp :
    <AvatarRenderProp1 {...props} username="NorbertPointu" />
    With Hook :
    <AvatarWithHook1 {...props} username="NorbertPointu" />
  </div>
);

export default Exemple2;
