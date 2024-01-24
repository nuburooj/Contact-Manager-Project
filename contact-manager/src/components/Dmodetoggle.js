import React, { useState, useEffect } from 'react';

export const Dmodetoggle = () => {
  const [isDark, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDark)}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};
