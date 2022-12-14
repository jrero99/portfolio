const Header = () => {
  return (
    <header className="w-full right-0">
      <nav className="h-20 py-2 px-6 max-w-screen-xl flex justify-end m-auto">
        <ul className="flex">
          <li className="flex ">
            <a className="flex text-gray-900 p-4 font-semibold text-base cursor-pointer" href="https://github.com/jrero99" target="_blank">
              github.
            </a>
          </li>
          <li className="flex">
            <a className="flex text-gray-900 p-4 font-semibold text-base cursor-pointer" href="https://www.linkedin.com/in/redondorodriguezjavier/" target="_blank">
              linkedin.
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
