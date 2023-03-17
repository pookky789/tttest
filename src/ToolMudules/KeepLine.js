import React, { useState } from 'react';

function KeepLine() {
  const [inputText, setInputText] = useState('Text line 1 aaa\nText line 2 bbb\nText line 3 ccc');
  const [searchText, setSearchText] = useState('bbb');
 // const [textTemplate, setTextTemplate] = useState(''); // predefined text template
  const [outputText, setOutputText] = useState('Text line 2 bbb');

//   const handleSearchTextChange = (event) => {
//     setSearchText(event.target.value);
//   };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const lines = inputText.split('\n');
    const updatedText = lines.filter(line => line.includes(searchText)).join('\n');
    setOutputText(updatedText);

  };

  return (
    <div className="text-replace-tool">
        <h1>Keep Text Line</h1>
      <form onSubmit={handleFormSubmit}>
        
      <label htmlFor="origin-text">Origin Text:</label>
      <textarea
          id="origin-text"
          name="origin-text"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        ></textarea>

        <label htmlFor="search">Search for Keep Lines:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter text to search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <button type="submit">Keep lines</button>
      </form>
      <div className="result">
        <label htmlFor="result">Result:</label>
        <textarea
          id="result"
          name="result"
          rows="10"
          cols="50"
          value={outputText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default KeepLine;
