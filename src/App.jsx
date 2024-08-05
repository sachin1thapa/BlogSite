import { config } from './config/config.js';
import './App.css';

function App() {
  return (
    <>
      <button>
        <a href={config.appwriteUrl} target="_blank">
          {import.meta.env.VITE_APPWRITE_URL}
        </a>
      </button>
    </>
  );
}

export default App;
