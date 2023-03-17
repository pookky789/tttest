import React, { useState, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';

function TextReplaceTool() {
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  const outputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform text replacement
    const regex = new RegExp(searchText, 'g');
    const result = inputText.replaceAll(regex, replaceText);
    setOutputText(result);
  };

  const handleCopy = () => {
    outputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="text-replace-tool">
      
      <h1>Text Replace Tool</h1>  
      <form onSubmit={handleSubmit}>
    
      <label htmlFor="origin-text">Origin Text:</label>
      <textarea
          id="origin-text"
          name="origin-text"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        ></textarea>

        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter text to search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <label htmlFor="replace">Replace:</label>
        <input
          type="text"
          id="replace"
          name="replace"
          placeholder="Enter text to replace with"
          value={replaceText}
          onChange={(event) => setReplaceText(event.target.value)}
        />
   
        <button type="submit">Replace</button>
      </form>
     
      <div style={{ position: 'relative', display: 'inline' }}>
      <label htmlFor="result">Result:</label>
          <textarea
          id="result"
          name="result"
          rows="10"
          cols="50"
          value={outputText}
          readOnly
         ref={outputRef} 
        ></textarea>
        <button
          onClick={handleCopy}
          style={{
            position: 'relative',
            //top: '10px',
            right: '10px',
            border: 'none',
            background: 'darkgray',
            cursor: 'pointer',
          }}
        >
          <FaCopy />
        </button>

       

      </div>

      <div class="col-md-9" style={{ position: 'relative', top: '20px' }}>
        <h2 >Getting Started</h2>
        <ol>
          
         <li>In the input text area, enter the lines of text that you want to process.</li>
         <li>Click the "Replace" button to replace the lines of text with the text template.</li>
          <li>The resulting text will be displayed in the Result text area. You can copy the Result text to your clipboard by clicking the copy icon button.</li>
        </ol>
      </div>
  
    </div>
  );
}

export default TextReplaceTool;