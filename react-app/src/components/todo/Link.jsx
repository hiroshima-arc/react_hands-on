// @flow

import * as React from 'react';

export type OwnProps = {
  children: any;
  active: boolean;
  onClick: () => any;
}
const Link = (props: OwnProps) => {
  const { children, active, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  );
};
export default Link;