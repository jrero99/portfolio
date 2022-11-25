const Introduction = () => {
  return (
    <section className="h-screen flex items-center px-3">
      <div className="max-w-2xl m-auto text-center">
        <div className="flex flex-col md:flex-row md:justify-center">
          <p className="text-xs font-medium tracking-widest md:mb-10 text-gray-900 flex items-center justify-center">
            FULL STACK DEVELOPER&nbsp;
          </p>
          <p className="text-xs font-medium tracking-widest mb-10 text-gray-900 flex items-center justify-center">
            <span className="font-light">|</span>
            &nbsp;BARCELONA
          </p>
        </div>
        <h1 className="tracking-in-contract tracking-tighter leading-3-5 md:leading-5-5 text-5xl md:text-5 font-bold text-gray-900">
          Hi, I am Javi
        </h1>
        <a href="#content">
          <button className="text-sm font-bold tracking-widest uppercase text-white py-5 px-8 rounded-full focus:outline-none transition duration-150 ease-in-out mt-12 bg-zinc-900">
            explore works
          </button>
        </a>
      </div>
    </section>
  );
};
export default Introduction