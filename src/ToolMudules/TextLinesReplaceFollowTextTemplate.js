import { useState, useRef} from 'react';
import { FaCopy } from 'react-icons/fa';

function TextTemplate() {
  const [inputText, setInputText] = useState('text line 1\ntext line 2');
  const [inputTemplate, onSetTemplate] = useState('new #here');
  const [outputText, setOutputText] = useState('new text line 1\nnew text line 2');

  const outputRef = useRef(null);
  const handleCopy = () => {
    outputRef.current.select();
    document.execCommand('copy');
  };

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

export default TextTemplate;
