import React, { useState } from 'react';

function Select({ onSelect, children }) {
  const [currentSelect, setCurrentSelect] = useState();

  const _onSelect = value => {
    onSelect(value);

    setCurrentSelect(value);
  };

  const childrenWithHandler = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    if (child.props.defaultActive && !currentSelect)
      setCurrentSelect(child.props.value);

    return React.cloneElement(child, {
      currentSelection: currentSelect,
      onSelect: _onSelect,
    });
  });

  return (
    <div className='select flex flex-grow bg-slate-200 text-white text-center font-semibold my-2 rounded-md overflow-hidden'>
      {childrenWithHandler}
    </div>
  );
}

export default Select;
