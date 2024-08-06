import { useNavigate } from 'react-router-dom';
import NavBar from './Header/NavBar';

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="grid h-screen place-content-center bg-white px-4">
        <button
          onClick={() => {
            navigate('/');
          }}
          className="uppercase tracking-widest text-gray-500"
        >
          404 | Not Found
        </button>
      </div>
    </>
  );
}
export default ErrorPage;
