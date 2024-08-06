function Footer() {
  return (
    <>
      <footer className="bg-[#e3e4d1]">
        <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 lg:pt-8">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-[42px] text-teal-600 lg:justify-start">
                BlogSite
              </div>

              <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Your Daily Dose of Insight: Discover, Learn, and Thrive
              </p>
            </div>

            <ul className="mt-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  {' '}
                  About{' '}
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  {' '}
                  Services{' '}
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  {' '}
                  Projects{' '}
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  {' '}
                  Blog{' '}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-8 pb-2 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
