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
      <textarea value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      <input value={inputTemplate} onChange={(event) => onSetTemplate(event.target.value)}/>
      <button onClick={handleReplace}>Replace</button>
      <textarea value={outputText} readOnly />
    </div>
  );
}

export default TextTemplate;
