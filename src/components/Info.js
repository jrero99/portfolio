const Info = () => {
  return (
    <section className="bg-green-900 mt-20 min-h-screen pb-10">
      <ul class="flex justify-center">
        <li class="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out text-blue">
          Experiences
        </li>
        <li class="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out">
          Portfolio
        </li>
        <li class="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out">
          About me
        </li>
      </ul>
    </section>
  );
};
export default Info;
