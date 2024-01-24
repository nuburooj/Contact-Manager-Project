import React, { useState, useEffect } from 'react';

export const Dmodetoggle = () => {
  const [isDark, setIsDarkMode] = useState(false);


  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => setIsDarkMode(!isDark)} checked={isDark} />
        <span className="slider round">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      </label>
    </div>
  );
};