import React, { useState } from 'react';

function RemoveLine() {
  const [searchText, setSearchText] = useState('');
  const [textTemplate, setTextTemplate] = useState(''); // predefined text template

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const lines = textTemplate.split('\n');
    const updatedText = lines.filter(line => !line.includes(searchText)).join('\n');
    setTextTemplate(updatedText);
    setSearchText('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Search text:
          <input type="text" value={searchText} onChange={handleSearchTextChange} />
        </label>
        <button type="submit">Remove lines</button>
      </form>
      <textarea value={textTemplate} readOnly />
    </div>
  );
}

export default RemoveLine;
