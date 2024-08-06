import profile from '../../assets/images/profilepic.png'; // get from the appwrite
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  let { islogedIN, userstatus } = useSelector((state) => state.userdetais);

  console.log(islogedIN, userstatus);

  const navigate = useNavigate();

  const menuItems = [
    { name: 'Add Post', href: '/createpost' },
    { name: 'Own Post', href: '/User' },
  ];

  return (
    <div className="relative w-full bg-[#CADABF]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 ">
        {/* Logo and Home Button */}
        <div className="inline-flex items-center space-x-2">
          <button onClick={() => navigate('/')} className="font-bold">
            BlogPost
          </button>
        </div>

        {/* Desktop Menu */}
        {islogedIN && (
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Auth Buttons */}
        {!islogedIN ? (
          <div className="hidden space-x-6 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => {
                navigate('/signin');
              }}
            >
              Log In
            </button>
          </div>
        ) : (
          <>
            <div className="flex grow justify-end">
              <input
                className="flex h-7 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Serach post"
              ></input>
            </div>
            <div className="ml-5  hidden lg:block">
              <span className="relative inline-block">
                <img className="h-7 w-7 rounded-full" src={profile} alt="Dan_Abromov" />
                <span
                  className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full  ring-2 ring-white ${
                    userstatus ? 'bg-green-600' : 'bg-red-600'
                  }`}
                ></span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
