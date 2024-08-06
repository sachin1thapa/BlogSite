import { useEffect } from 'react';
import BlogCard from './BlogCard';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from '../../features/authSlice';
import { SiGnuprivacyguard } from 'react-icons/si';
import { STATUSES } from '../../constants';

function FetchBlog() {
  let { islogedIN, status } = useSelector((state) => state.userdetais);
  let dispatch = useDispatch();

  //! Default One to

  // useEffect(() => {
  //   authservice
  //     .GetCurrentUser()
  //     .then(({ msg, status, user }) => {
  //       if (status === 200 && user) {
  //         dispatch(login(user));
  //         console.log(msg);
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.msg);
  //     })
  //     .finally(() => {
  //       dispatch(logout());
  //     });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!islogedIN ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-2 text-lg">
          Signup to Read the Blog
          <SiGnuprivacyguard />
        </div>
      ) : (
        <>
          {status === STATUSES.LOADING ? (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-2 text-lg">
              <AiOutlineLoading3Quarters className="animate-spin" />
            </div>
          ) : (
            <div className="grid mx-auto w-[900px] mt-3 ">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          )}
        </>
      )}
    </>
  );
}
export default FetchBlog;
