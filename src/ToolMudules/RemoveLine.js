import React, { useState } from 'react';

function RemoveLine() {
  const [inputText, setInputText] = useState('Text line 1 aaa\nText line 2 bbb\nText line 3 ccc');
  const [searchText, setSearchText] = useState('bbb');
 // const [textTemplate, setTextTemplate] = useState(''); // predefined text template
  const [outputText, setOutputText] = useState('Text line 1 aaa\nText line 3 ccc');

//   const handleSearchTextChange = (event) => {
//     setSearchText(event.target.value);
//   };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const lines = inputText.split('\n');
    const updatedText = lines.filter(line => !line.includes(searchText)).join('\n');
    setOutputText(updatedText);

  };

  return (
    <div className="text-replace-tool">
        <h1>Remove Text Line</h1>
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

        <label htmlFor="search">Search for Remove Lines:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter text to search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <button type="submit">Remove lines</button>
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

      <div class="col-md-9" style={{ position: 'relative', top: '20px' }}>
        <h2 >Getting Started</h2>

        <ol>
         <li>Paste the text into the origin input text area.</li>
         <li>Specify the search text to be removed.</li>
         <li>Click the "Remove lines" button to replace the lines of text with the text template.</li>
          <li>The resulting text will be displayed in the Result text area. You can copy the Result text to your clipboard by clicking the copy icon button.</li>
        </ol>
      </div>

    </div>
  );
}

export default RemoveLine;
