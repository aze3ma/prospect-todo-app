import React from 'react';
import classnames from 'classnames';

interface LinkProps {
  active: boolean;
  children: boolean;
  setFilter: Function;
}

const Link = ({ active, children, setFilter }: LinkProps): React.ReactElement => {
  return (
    <button
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer', padding: '0 10px' }}
      onClick={() => setFilter()}
    >
      {children}
    </button>
  );
};

export default Link;
