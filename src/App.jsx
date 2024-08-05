import config from './config/config.js';
import './App.css';



function App() {

  return (
    <>
      <button>
        <a href={config.appwriteUrl} target="_blank">
          {config.appwriteUrl}
        </a>
      </button>
    </>
  );
}

export default App;
