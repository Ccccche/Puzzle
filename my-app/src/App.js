import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JigsawPuzzle
  imageSrc='https://github.com/Ccccche/Puzzle/blob/main/my-app/src/images/test.jpg'
  rows={4}
  columns={6}
  onSolved={() => alert('Solved!')}
/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

