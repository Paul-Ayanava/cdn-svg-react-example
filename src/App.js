import CDNSVGComponent from './CDNSVGComponent';
import './App.css';

function App() {
  const svgUrl = 'https://gist.githubusercontent.com/Paul-Ayanava/41cc6a52178cdb2facc3ea5c1dbfbfa0/raw/888bf575edd99afe3a0a666132b7005d92e9b216/gistfile1.txt'
  return (
    <div className="App">
      <header className="App-header">
        Test of SVG saved inside CDN
      </header>
      <CDNSVGComponent svgUrl={svgUrl} />
    </div>
  );
}

export default App;
