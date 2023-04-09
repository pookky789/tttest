import React, { useState, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';
const AddPrefixAndSuffix = () => {
  const [inputText, setInputText] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [outputText, setResult] = useState("");

  const outputRef = useRef(null);
  const handleCopy = () => {
    outputRef.current.select();
    document.execCommand('copy');
  };

  const addPrefixAndSuffix = () => {
    const lines = inputText.split("\n");
    const prefixedAndSuffixedLines = lines.map((line) => `${prefix}${line}${suffix}`);
    return prefixedAndSuffixedLines.join("\n");
  };

  const handleAddPrefixAndSuffix = () => {
    const resultText = addPrefixAndSuffix();
    setResult(resultText);
  };

  return (
    <div className="text-replace-tool">
     <textarea
          id="origin-text"
          name="origin-text"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        ></textarea>
      <div>
        <input
          type="text"
          placeholder="Add prefix"
          value={prefix}
          onChange={(event) => setPrefix(event.target.value)}
        />
        <input
          type="text"
          placeholder="Add suffix"
          value={suffix}
          onChange={(event) => setSuffix(event.target.value)}
        />
      </div>
      <button onClick={handleAddPrefixAndSuffix}>Add Prefix and/or Suffix</button>
      
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

    </div>
  );
};

export default AddPrefixAndSuffix;
