import { useState } from 'react';

function TextTemplate() {
  const [inputText, setInputText] = useState('');
  const [inputTemplate, onSetTemplate] = useState('');
  const [outputText, setOutputText] = useState('');

  // const handleChange = (event) => {
  //   setInputText(event.target.value);
  // };

  const handleReplace = () => {
    const textLines = inputText.split('\n');
    const regex = new RegExp('xxx', 'g');
    const replacedLines = textLines.map((line) => {
     
      //const result = inputText.replaceAll(regex, replaceText);
      return  inputTemplate.replaceAll(regex, line);
    });
    setOutputText(replacedLines.join('\n'));
  };

  return (
    <div>
      <textarea
          id="origin-text"
          name="origin-text"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        ></textarea>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter text to search"
          value={inputTemplate}
          onChange={(event) => onSetTemplate(event.target.value)}
        />

      <button onClick={handleReplace}>Replace</button>
      <textarea value={outputText} readOnly />
    </div>
  );
}

export default TextTemplate;
