import logo from './logo.svg';
import './App.css';
import './TextReplaceTool.css';

function App() {
  return (
    <div className="text-replace-tool">
      <h1>Text Replace Tool</h1>
      <form>
        <label for="origin-text">Origin Text:</label>
        <textarea id="origin-text" name="origin-text" rows="10" cols="50"></textarea>


        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" placeholder="Enter text to search" />

        <label htmlFor="replace">Replace:</label>
        <input type="text" id="replace" name="replace" placeholder="Enter text to replace with" />

        <button type="submit">Replace</button>
      </form>

      <div class="result">
        <label for="result">Result:</label>
        <textarea id="result" name="result" rows="10" cols="50"></textarea>
      </div>

    </div>

    
  );
}

export default App;
