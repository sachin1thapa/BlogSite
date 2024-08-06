import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage';
import SignIn from './components/userauth/SignIn';
import SignUp from './components/userauth/SignUp';
import UserBlogPost from './components/main/UserBlogPost';
import CreateBlogPost from './components/main/CreateBlogPost';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signIn',
          element: <SignIn />,
        },
        {
          path: '/signUp',
          element: <SignUp />,
        },
        {
          path: '/User',
          element: <UserBlogPost />,
        },
        {
          path: '/createpost',
          element: <CreateBlogPost />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
