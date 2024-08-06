import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default Layout;
