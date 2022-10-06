import React, { useEffect, useState } from 'react';

function Option({
  children,
  value,
  defaultActive,
  currentSelection,
  onSelect,
}) {
  const [isActive, setIsActive] = useState(defaultActive);

  useEffect(() => {
    if (currentSelection === value) setIsActive(true);
    else setIsActive(false);
  }, [currentSelection]);

  return (
    <div
      className={'option'.concat(isActive ? ' active' : '')}
      onClick={() => onSelect(value)}>
      {children}
    </div>
  );
}

export default Option;
