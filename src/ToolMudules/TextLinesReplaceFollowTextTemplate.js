import { useState } from 'react';

function TextTemplate() {
  const [inputText, setInputText] = useState('text line 1\ntext line 2');
  const [inputTemplate, onSetTemplate] = useState('new #here');
  const [outputText, setOutputText] = useState('new text line 1\nnew text line 2');

  // const handleChange = (event) => {
  //   setInputText(event.target.value);
  // };

  const handleReplace = (event) => {
    event.preventDefault();
    const textLines = inputText.split('\n');
    const regex = new RegExp('#here', 'g');
    const replacedLines = textLines.map((line) => {
     
      //const result = inputText.replaceAll(regex, replaceText);
      return  inputTemplate.replaceAll(regex, line);
    });
    setOutputText(replacedLines.join('\n'));
  };

  return (
    <div className="text-replace-tool">
      <h1>Replace Text Line follow Text Template </h1>  
        <form onSubmit={handleReplace}>  
        <div>
          <label htmlFor="origin-text">Origin Text:</label>
            <textarea
              id="origin-text"
              name="origin-text"
              rows="10"
              cols="50"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            ></textarea>
         
        </div>
         
          <label htmlFor="search">Text template (Must contain '#here'):</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Enter text template"
            value={inputTemplate}
            onChange={(event) => onSetTemplate(event.target.value)}
          />

        <button >Replace</button>
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

export default TextTemplate;
